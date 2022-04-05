import React from 'react';
import './review.css'

const SingleReview = (props) => {
    const { name, body, image, rating } = props.review
    return (
        <div className='single-review'>
            <img src={image} className='w-100 rounded' alt="" />
            <h3>{name}</h3>
            <p>{body}</p>
            <h5>Rating : <span>{rating}</span></h5>
        </div>
    );
};

export default SingleReview;