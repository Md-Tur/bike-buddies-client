import React from 'react';

const ContactUs = () => {
    return (
        <div className='grid grid-cols-12'>
            <div className=' text-2xl text-white bg-slate-400 col-span-4'>
                <div className='flex content-center items-center h-full w-full'>
                    <div className='ml-10'>
                        <p> <span className='font-medium'>Phone:</span> 01218111999</p>
                        <p> <span className='font-medium'>Email:</span> bike-buddies@hotmail.com</p>
                        <p> <span className='font-medium'>Telephone:</span> 21345678</p>
                        <p> <span className='font-medium'>Address:</span> Bosundhara,Dhaka-1200</p>
                    </div>
                </div>

            </div>
            <div className='w-full col-span-8'>
                <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Satkhira%20New%20Market+(bike%20buddies)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure distance on map</a></iframe>
            </div>
        </div>
    );
};

export default ContactUs;