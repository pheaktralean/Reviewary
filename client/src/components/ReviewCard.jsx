/* review card => usable in dashboard, folders, tags...*/

import React from 'react';
import "../styles/reviewCard.css";

function ReviewCard({ title, image, rating, reviewPreview}){
    const renderStars = (count) => {
        return [...Array(5)].map((_, index) => (
            <span key={index} style={{color: index <count ? "gold" :"lightgray",
                fontSize:"18px"
            }}>
                ★
            </span>
        ));
    };


    return (
        <div className="review-card">
            {image && <img src={image} alt={title} className="review-card-image" />}
            <div className="review-card-body">
                <h3 className="review-card-title">{title}</h3>
                <div className="review-card-rating">{renderStars(rating)}</div>
                <p className="review-card-preview">{reviewPreview}</p>
            </div>
        </div>
    )
}

export default ReviewCard;  