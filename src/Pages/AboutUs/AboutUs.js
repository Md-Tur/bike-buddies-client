import React from 'react';
import developer from '../../images/developer.png';

const MyPortfolio = () => {
    return (
        <div>
            <h1 className='text-3xl text-center mt-2 mb-2 text-cyan-600'>About this site developer</h1>
            <hr />
            <div className='flex justify-center items-center'>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img className="rounded-xl" style={{ height: "250px", width: "300px" }} src={developer} alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title"><span className='text-green-700'>Name: </span> Md. Tur Ibna Mostafiz</h2>
                        <p><span className='text-green-700'>Email: </span>turibnmostafiz@gmail.com </p>
                        <p><span className='text-green-700'>Education: </span>4 year B.Sc in C.S.E (Graduated) </p>
                        <p><span className='text-green-700'>Technologies: </span> HTML,CSS,Bootstrap,Tailwind CSS,javaScript, React,google firebase,node js,express js, jwt,mongoDB </p>
                        <hr />
                        <p className='text-green-700'>Some of my Projects links</p>
                        <hr />
                        <p><span className='text-green-700'>My project1:  </span><a href="https://dental-solution-6f8eb.web.app/">Dental Solution</a> </p>
                        <p><span className='text-green-700'>My project2:  </span><a href="https://mega-grocery-bb035.web.app/">Mega Grocery</a> </p>
                        <p><span className='text-green-700'>My project2:  </span><a href="https://lively-valkyrie-fc8159.netlify.app/">Bike Review Site</a> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;