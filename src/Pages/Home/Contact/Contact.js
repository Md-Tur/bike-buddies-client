import React from 'react';

const Contact = () => {
    return (
        <div className='flex justify-center'>
            <div className='mb-2 mt-3'>
                <h2 className='text-3xl text-center mt-2 mb-2 text-indigo-600'>Contact us</h2>
                <div className='flex justify-center align-middle gap-3'>
                    <div className='text-center text-white bg-slate-400'>
                        <p>Phone: 01218111999</p>
                        <p>Mail: bike-buddies@hotmail.com</p>
                        <p>Telephone: 21345678</p>
                        <p>Address: Bosundhara,Dhaka-1200</p>
                    </div>
                    <div className='bg-blue-200'>
                        <h2 className='text-center text-2xl font-bold'>Any Complain</h2>
                        <p className='text-center'>Let us know please!</p>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your mail?</span>
                            </label>
                            <input type="email" placeholder="Enter Your Mail" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text">Your Complain?</span>
                            </label>
                            <textarea className="textarea textarea-bordered h-24" placeholder="Complain Here"></textarea>
                            <button className="btn btn-outline btn-info mt-2 bg-white">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;