import React from 'react';

const ReviewForm = () => {
    return (
        <form>
            <input type="number" min="1" max="5" placeholder="Rating (1-5)" />
            <textarea placeholder="Description"></textarea>
            <button type="submit">Submit Review</button>
        </form>
    );
}

export default ReviewForm;