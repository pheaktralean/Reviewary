import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/addReviewCard.css";
//import ReviewCard from './ReviewCard';

const AddReviewCard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/create-review'); // Adjust path if needed
  };

  return (
    <div className="add-review-card" onClick={handleClick}>
      <span className="plus-sign">+</span>
    </div>
  );
};

export default AddReviewCard;
