import React from 'react';
import banner1 from '../../../images/banner/banner1.jpg';
import indicator from '../../../images/right-arrow.png';

const Banner = () => {
    const background_image = {
        backgroundImage: `url(${banner1})`,
        height: "80vh",
        width: '100%',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div>
            <div style={background_image}>
                <div className='h-full'>
                    <div className='text-green-500 flex h-full' style={{ justifyContent: "center", alignItems: "center" }}>
                        <div>
                            <h1 className='text-6xl font-bold'>Welcome to Bike Buddies</h1>
                            <p className='mt-3 text-center text-2xl font-medium'>This is a manufacturer website from where you can <br /> purchase any parts that you needed for your dream bike.</p>
                            <div className='mt-4 flex content-between ml-16 font-medium'>
                                <div className='flex mr-4'>
                                    <img src={indicator} alt="" /> <p className='ml-2'>EMI Facilities</p>
                                </div>
                                <div className='flex mr-4'>
                                    <img src={indicator} alt="" /> <p className='ml-2'>Fast Delivery</p>
                                </div>
                                <div className='flex mr-4'>
                                    <img src={indicator} alt="" /> <p className='ml-2'>Real Products</p>
                                </div>
                                <div className='flex mr-4'>
                                    <img src={indicator} alt="" /> <p className='ml-2'>Online Pay</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;