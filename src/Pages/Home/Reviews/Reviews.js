import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <div className='mt-3 mb-3'>
            <h2 className='text-3xl text-center mt-2 mb-2 text-indigo-600'>Review section</h2>
            <div className='px-12'>
                <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-3'>
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;