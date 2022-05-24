import React from 'react';

const Myprofile = () => {
    return (
        <div>
            <h2>Welcome To Your Profile</h2>
            <div className='flex justify-center items-center mt-3'>
                <form>
                    <input type="text" placeholder="Name here" className="block input input-bordered input-sm w-full max-w-xs" />
                    <input type="email" placeholder="Email here" className="block input input-bordered input-sm w-full max-w-xs mb-2 mt-2" />
                    <input type="text" placeholder="Your Location" className="block input input-bordered input-sm w-full max-w-xs mb-2 mt-2" required />
                    <input type="text" placeholder="Your Contact Number" className="block input input-bordered input-sm w-full max-w-xs mb-2 mt-2" required />
                    <input type="text" placeholder="Your Linkdin" className="block input input-bordered input-sm w-full max-w-xs mb-2 mt-2" required />
                    <input type="submit" value="Save" className="btn btn-outline btn-success" />
                </form>
            </div>
        </div>
    );
};

export default Myprofile;