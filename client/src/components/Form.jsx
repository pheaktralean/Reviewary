/* form page to fill out the info */

import { useState } from "react";
import "../styles/styles.css"; // Import styles for the form

function Form({ onSubmit, onCancel})
{
    const [formData, setFormData] = useState({
        image:null,
        description:'',
        link:'',
        tag:'',
        folder: '',
        rating: 0,
        reviewText:'',
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value, // Handle file input
        });
    };

    const handleStarClick = (rating) => {
        setFormData({...formData, rating });
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

            
            {/* for the rating input */}
            <div className="star-rating">
                <label>Rating:</label>      
                {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    onClick={() => handleStarClick(star)}
                    style={{ color: star <= formData.rating ? 'gold' : 'lightgray', cursor: 'pointer', fontSize: '24px' }}
                >
                    ★
                </span>
                ))}
            </div>


            {/* for the review input */}
            <div>
                <label>Review:</label>
                <textarea name="reviewText" value={formData.reviewText} onChange={handleChange} rows="5" required />
            </div>


            {/* buttons for submit and cancel */}
            <div className="form-buttons">
                <button type="submit">Save</button>
                <button type="button" onClick={onCancel}>Cancel</button>
            </div>

        </form>
    )

}

export default Form;