import React from 'react';

const AddReview = () => {

    const handleReview = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const review = event.target.review.value;
        const rating = event.target.rating.value;
        console.log(name, email, review, rating);
    }

    return (
        <div>
            <h2>Drop Your Review Here</h2>
            <div className='flex justify-center items-center mt-3'>
                <form onSubmit={handleReview}>
                    <input type="text" id='name' placeholder="Name here" className="block input input-bordered input-sm w-full max-w-xs" />
                    <input type="email" id='email' placeholder="Email here" className="block input input-bordered input-sm w-full max-w-xs mb-2 mt-2" />
                    <textarea id='review' className="block textarea textarea-bordered" placeholder="Your Review" required></textarea>
                    <input id='rating' type="text" placeholder="Your Ratings" className="block input input-bordered input-sm w-full max-w-xs mb-2 mt-2" required />
                    <input type="submit" value="Submit Review" className="btn btn-outline btn-success" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;