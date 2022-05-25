import React from 'react';

const Review = ({ feedback }) => {

    const { name, email, review, rating } = feedback;

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title">Name: {name}</h2>
                <p><small>Email: {email} </small></p>
                <p><small>Review: {review} </small></p>
                <p>Ratings: {rating} </p>
            </div>
        </div>
    );
};

export default Review;