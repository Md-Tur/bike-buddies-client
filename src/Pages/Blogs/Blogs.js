import React from 'react';
import suspension from '../../images/suspension.jpg';
import indicator from '../../images/indicator.png';
import diskBrake from '../../images/disk brake.jpg';

const Blogs = () => {
    return (
        <div className='pl-10 pr-10 ml-10 mr-10'>
            <div className='flex mt-5'>
                <div>
                    <img src={suspension} alt="" />
                </div>
                <div>
                    <h1 className='text-center font-bold text-3xl'>Suspension</h1>
                    <p className='font-medium'>The primary goal of motorcycle suspension is to keep vehicle tires in contact with the ground. Without proper suspension, tires would lose traction when encountering bumps, dips or other ground imperfections. We can’t forget about braking, acceleration or cornering forces either. <br /> Motorcycle suspensions use a spring and damper combination to isolate the chassis and rider from road imperfections. On-road motorcycle suspension systems work to minimize the effect of potholes, bumps, cornering and acceleration/deceleration forces. Off-road motorcycle suspension systems handle roots, rocks, jumps, ledges and more.<br />Without suspension, any impact between a vehicle tire and a ground imperfection is at best uncomfortable, and at worst, the cause of a dangerous crash. </p>
                </div>
            </div>
            <div className='flex mt-5'>
                <div>
                    <img src={indicator} alt="" />
                </div>
                <div>
                    <h1 className='text-center font-bold text-3xl'>Indicator</h1>
                    <p className='font-medium'>Indicator lights are used to make the operating status (on, off, fault) of the device on which they are installed visible from the outside by means of a small light. The colour of the light emitted will therefore be associated with a precise status of the application, making it instantly understandable and easy to use for the end user.<br />Each indicator light is made up of four fundamental parts. Starting from the front, where the lens or diffuser is located. This component is made of plastic (normally polycarbonate, polysulfone or nylon) which allows light to be diffused. The resulting lighting effect can be a spot light, a simple signal or have a lighting function depending on the final application.
                        The next part is the light source. This is the heart of the indicator, and is usually made up of a light source: lamp or LED. The plastic support, on the other hand, is the body of the indicator itself, also made of plastic. The choice of polymer is made taking into consideration the technical performance required, including resistance to different temperature ranges: polycarbonate up to 120°, polysulfone up to 150°. The body may also be made of metal depending on the degree of resistance required for the types of wear.</p>
                </div>
            </div>
            <div className='flex mt-5'>
                <div>
                    <img src={diskBrake} alt="" />
                </div>
                <div>
                    <h1 className='text-center font-bold text-3xl'>Disk Brake</h1>
                    <p className='font-medium'>The disc brake system consists of a rotor or disc fitted on the wheel and calliper with pads on either side. The system becomes complete with the fluid line which comes from the oil reservoir. The oil reservoir is connected to a pump which is the brake lever. <br />So, when you pull the brake lever, the oil is pushed towards the callipers and in turn; it applies pressure on the pads which creates friction with the disc to slow or stop the motorcycle. The bite of the callipers on the disc depends on the size of the pads or the area of contact of the pads with the disc.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;