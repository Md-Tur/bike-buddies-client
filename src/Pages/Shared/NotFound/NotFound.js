import React from 'react';
import notFound from '../../../images/notFound.png';

const NotFound = () => {
    return (
        <div className='flex justify-center'>
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;