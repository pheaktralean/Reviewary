/* form page to fill out the info */

import { useState } from "react";
import "../styles/styles.css"; // Import styles for the form
import "../styles/form.css"; // Import styles for the form specifically

function Form({ onSubmit, onCancel})
{
    const [formData, setFormData] = useState({
        image:null,
        description:'',
        link:'',
        date: '',
        tag:'',
        folder: '',
        rating: 0,
        quality: 0,
        price: 0,
        satisfaction: 0,
        emotion: 3,
        recommendation: 3,
        reviewText:'',
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value, // Handle file input
        });
    };

    const handleStarClick = (field, rating) => {
        const updated = { ...formData, [field]: rating};
        setFormData(updated);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form className="review-form" onSubmit={handleSubmit}>
            {/* for the image input */}
            <div>
                <label>
                    Upload Image (optional):
                </label>
                <input type="file" name="image" onChange={handleChange} />
            </div>

            {/* for the description input */}
            <div>
                <label>Description:</label>
                <input type="text" name="description" value={formData.description} onChange={handleChange} required />
            </div>


            {/* for the link input */}
            <div>
                <label>Link:</label>
                <input type="text" name="link" value={formData.description} onChange={handleChange} />
            </div>

            {/* for the date of experience */}
            <div>
                <label>Date of Experience:</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange} required />
            </div>

            {/* for the tag input */}
            <div>
                <label>Tag:</label>
                <select name="tag" value={formData.tag} onChange={handleChange} required>
                    <option value="">Select a tag</option>
                    <option value="product">Product</option>
                    <option value="service">Service</option>
                    <option value="store">Store</option>
                </select>
            </div>

            {/* for the folder input */}
            <div>
                <label>Folder (optional):</label>
                <input type="text" name="folder" value={formData.folder} onChange={handleChange} />
            </div>


            {/* for the star ratings */}
            {['rating', 'quality', 'price', 'satisfaction'].map((field) => (
                <div key={field} className="star-rating">
                    <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                        key={star}
                        onClick={() => handleStarClick(field, star)}
                        style={{ color: star <= formData[field] ? 'gold' : 'lightgray', cursor: 'pointer', fontSize: '24px' }}
                        >
                        ★
                        </span>
                    ))}
                </div>
            ))}


            {/* for the emotion input */}
            <div className="emotion-slider">
                <label>Emotion:</label>
                <input type="range" name="emotion" min="1" max="5" value={formData.emotion} onChange={handleChange} className="vertical-slider" />
                <div className="emotion-labels">
                    <span>Disappointed</span>
                    <span>Uncomfortable</span>
                    <span>Neutral</span>
                    <span>Satisfied</span>
                    <span>Happy</span>
                </div>
            </div>


            {/* for the recommendation input */}
            <div className="likert-scale">
                <label>Would you recommend this?</label>
                <div>
                {[1, 2, 3, 4, 5].map((num) => (
                    <label key={num}>
                    <input
                        type="radio"
                        name="recommendation"
                        value={num}
                        checked={formData.recommendation === String(num)}
                        onChange={handleChange}
                    />
                    {['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'][num - 1]}
                    </label>
                ))}
                </div>
            </div>


            {/* for the review input */}
            <div>
                <label>Review:</label>
                <textarea name="reviewText" value={formData.reviewText} onChange={handleChange} rows="5" required />
            </div>


            {/* buttons for submit and cancel */}
            <div className="form-buttons">
                <button type="submit-button">Save</button>
                <button type="cancel-button" onClick={onCancel}>Cancel</button>
            </div>

        </form>
    )

}

export default Form;