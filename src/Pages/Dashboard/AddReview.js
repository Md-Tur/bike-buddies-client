import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {

    const [user] = useAuthState(auth);

    const handleReview = event => {
        event.preventDefault();
        const feedback = {
            name: event.target.name.value,
            email: event.target.email.value,
            review: event.target.review.value,
            rating: event.target.rating.value
        }
        fetch("https://polar-coast-87590.herokuapp.com/review", {
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
                    toast.success('Thank You For Your Review')
                }
            })
    }

    return (
        <div>
            <h2>Drop Your Review Here</h2>
            <div className='flex justify-center items-center mt-3'>
                <form onSubmit={handleReview}>
                    <input type="text" name='name' value={user.displayName} className="block input input-bordered input-sm w-full max-w-xs" disabled readOnly />
                    <input type="email" name='email' value={user.email} className="block input input-bordered input-sm w-full max-w-xs mb-2 mt-2" disabled readOnly />
                    <input type="text" name='review' placeholder="Review Here" className="block input input-bordered input-sm w-full max-w-xs" />
                    <input name='rating' type="text" placeholder="Your Ratings" className="block input input-bordered input-sm w-full max-w-xs mb-2 mt-2" required />
                    <input type="submit" value="Submit Review" className="btn btn-outline btn-success" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;