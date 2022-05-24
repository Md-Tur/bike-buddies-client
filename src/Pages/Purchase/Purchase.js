import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();

    return (
        <div>
            <h2 className='text-3xl text-center mt-2 mb-2 text-cyan-600'>Confirm Your Purchase{id}</h2>
            <div className='flex justify-center items-center'>
                <div>
                    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                        <div className='flex gap-3'>
                            <div>
                                <figure className="px-10 pt-10">
                                    <img className="rounded-xl" style={{ height: "200px", width: "350px" }} src="https://i.ibb.co/8Pv6XVn/Spark-Plug.png" alt="" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Product</h2>
                                    <p><small> Buy From Here</small></p>
                                    <p><small>Minimum Order: 100 </small></p>
                                    <p><small> Available: 500 </small></p>
                                    <p>Price: 300 </p>
                                    <div className='flex gap-5'>
                                        <button className="btn btn-error">-</button>
                                        <input className="input input-bordered" type="text" name="" id="" />
                                        <button className="btn btn-success">+</button>
                                    </div>
                                    <button className="btn btn-outline btn-accent">Confirm</button>
                                </div>
                            </div>
                            <div>
                                <form>
                                    <input type="text" id='name' placeholder="Name here" className="block input input-bordered input-sm w-full max-w-xs" />
                                    <input type="email" id='email' placeholder="Email here" className="block input input-bordered input-sm w-full max-w-xs mb-2 mt-2" />
                                    <textarea id='review' className="block textarea textarea-bordered" placeholder="Your Review" required></textarea>
                                    <input id='rating' type="text" placeholder="Your Ratings" className="block input input-bordered input-sm w-full max-w-xs mb-2 mt-2" required />
                                    <input type="submit" value="Submit Review" className="btn btn-outline btn-success" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Purchase;