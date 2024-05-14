import React, { useState } from 'react';
import axios from 'axios';

const ReviewComponent = ({ breweryId }) => {
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const requestData = {
            brewery_id: breweryId,
            rating: parseInt(rating),
            description: description,
        };

        console.log('Request URL:', `/api/reviews`);
        console.log('Request Data:', requestData);

        try {
            const response = await axios.post(`/api/reviews`, requestData);
            console.log('Response Data:', response.data);
        } catch (error) {
            console.error('Error submitting review:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Rating:
                <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
            </label>
            <br />
            <label>
                Description:
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <br />
            <button type="submit">Submit Review</button>
        </form>
    );
};

export default ReviewComponent;