import React from 'react';

const Myprofile = () => {

    const handleProfile = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const location = event.target.location.value;
        const contact = event.target.contact.value;
        const linkedin = event.target.linkedin.value;
        console.log(name, email, location, contact, linkedin);
    }

    return (
        <div>
            <h2>Welcome To Your Profile</h2>
            <div className='flex justify-center items-center mt-3'>
                <form onSubmit={handleProfile}>
                    <input type="text" id='name' placeholder="Name here" className="block input input-bordered input-sm w-full max-w-xs" />
                    <input type="email" id='email' placeholder="Email here" className="block input input-bordered input-sm w-full max-w-xs mb-2 mt-2" />
                    <input type="text" id='location' placeholder="Your Location" className="block input input-bordered input-sm w-full max-w-xs mb-2 mt-2" required />
                    <input type="text" id='contact' placeholder="Your Contact Number" className="block input input-bordered input-sm w-full max-w-xs mb-2 mt-2" required />
                    <input type="text" id='linkedin' placeholder="Your Linkedin" className="block input input-bordered input-sm w-full max-w-xs mb-2 mt-2" required />
                    <input type="submit" value="Save Information" className="btn btn-outline btn-success" />
                </form>
            </div>
        </div>
    );
};

export default Myprofile;