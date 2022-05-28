import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Myprofile = () => {
    const [profile, setProfile] = useState();
    const [user] = useAuthState(auth);

    const handleProfile = event => {
        event.preventDefault();
        const profile = {
            name: event.target.name.value,
            email: event.target.email.value,
            location: event.target.location.value,
            contact: event.target.contact.value,
            linkedin: event.target.linkedin.value
        }

        fetch('https://polar-coast-87590.herokuapp.com/my_profile', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('Profile Updated');
                    event.target.reset();
                }

                else
                    toast.error('Something went wrong');
            })
    }

    useEffect(() => {
        if (user) {
            fetch(
                `https://polar-coast-87590.herokuapp.com/view_profile?user=${user?.email}`
            )
                .then((res) => res.json())
                .then((data) => setProfile(data[0]));
        }
    }, [user]);

    return (
        <div>
            <h2>Welcome To Your Profile</h2>
            <div>
                <div>
                    <div className='flex justify-center items-center'>
                        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title"><span className='text-green-700'>Name: </span>{profile?.name}</h2>
                                <p><span className='text-green-700'>Email: </span>{user?.email}</p>
                                <p><span className='text-green-700'>Location: </span>{profile?.location}</p>
                                <p><span className='text-green-700'>Contact: </span>{profile?.Contact} </p>
                                <p><span className='text-green-700'>Linkedin: </span>{profile?.linkedin}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center mt-5 mb-3'>
                    <form onSubmit={handleProfile}>
                        <input type="text" name='name' placeholder="Name here" className="block input input-bordered input-sm w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Email here" className="block input input-bordered input-sm w-full max-w-xs mb-2 mt-2" />
                        <input type="text" name='location' placeholder="Your Location" className="block input input-bordered input-sm w-full max-w-xs mb-2 mt-2" required />
                        <input type="text" name='contact' placeholder="Your Contact Number" className="block input input-bordered input-sm w-full max-w-xs mb-2 mt-2" required />
                        <input type="text" name='linkedin' placeholder="Your Linkedin" className="block input input-bordered input-sm w-full max-w-xs mb-2 mt-2" required />
                        <input type="submit" value="Update Profile" className="btn btn-outline btn-success" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Myprofile;