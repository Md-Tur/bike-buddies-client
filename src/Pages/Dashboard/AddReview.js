import React from 'react';

const AddReview = () => {

    const handleReview = event => {
        event.preventDefault();
        const feedback = {
            name: event.target.name.value,
            email: event.target.email.value,
            review: event.target.review.value,
            rating: event.target.rating.value
        }
        fetch("http://localhost:5000/review", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(feedback)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    event.target.reset();
                }
            })
    }

    return (
        <div>
            <h2>Drop Your Review Here</h2>
            <div className='flex justify-center items-center mt-3'>
                <form onSubmit={handleReview}>
                    <input type="text" name='name' placeholder="Name here" className="block input input-bordered input-sm w-full max-w-xs" />
                    <input type="email" name='email' placeholder="Email here" className="block input input-bordered input-sm w-full max-w-xs mb-2 mt-2" />
                    <input type="text" name='review' placeholder="Review Here" className="block input input-bordered input-sm w-full max-w-xs" />
                    <input name='rating' type="text" placeholder="Your Ratings" className="block input input-bordered input-sm w-full max-w-xs mb-2 mt-2" required />
                    <input type="submit" value="Submit Review" className="btn btn-outline btn-success" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;