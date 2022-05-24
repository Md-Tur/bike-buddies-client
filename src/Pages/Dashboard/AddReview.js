import React from 'react';

const AddReview = () => {

    const handleReview = event => {
        // const name = event.target.text.value;
        // const email = event.target.email.value;
        // const review = event.target.email.value;
        // console.log(name, email, review);
    }

    return (
        <div>
            <h2>Drop Your Review Here</h2>
            <div className='flex justify-center items-center mt-3'>
                <form onSubmit={handleReview()}>
                    <input type="text" placeholder="Name here" className="block input input-bordered input-sm w-full max-w-xs" />
                    <input type="email" placeholder="Email here" className="block input input-bordered input-sm w-full max-w-xs mb-2 mt-2" />
                    <textarea className="block textarea textarea-success" placeholder="Your Review" required></textarea>
                    <input type="text" placeholder="Your Ratings" className="block input input-bordered input-sm w-full max-w-xs mb-2 mt-2" required />
                    <input type="submit" value="Submit Review" className="btn btn-outline btn-success" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;