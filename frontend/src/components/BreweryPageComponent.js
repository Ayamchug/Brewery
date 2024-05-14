// // import React, { useState, useEffect } from 'react';
// // import { useParams } from 'react-router-dom';
// // import axios from 'axios';
// // import ReviewComponent from './ReviewComponent';

// // const BreweryPageComponent = () => {
// //     const { id } = useParams();
// //     const [brewery, setBrewery] = useState(null);
// //     const [reviews, setReviews] = useState([]);
// //     const [loading, setLoading] = useState(false);

// //     useEffect(() => {
// //         const fetchBreweryData = async () => {
// //             setLoading(true);
// //             try {
// //                 const response = await axios.get(`https://api.openbrewerydb.org/breweries/${id}`);
// //                 setBrewery(response.data);
// //                 setLoading(false);
// //             } catch (error) {
// //                 console.error('Error fetching brewery data:', error);
// //                 setLoading(false);
// //             }
// //         };

// //         const fetchReviews = async () => {
// //             try {
// //                 const response = await axios.get(`https://api.openbrewerydb.org/reviews?brewery_id=${id}`);
// //                 setReviews(response.data);
// //             } catch (error) {
// //                 console.error('Error fetching reviews:', error);
// //             }
// //         };

// //         fetchBreweryData();
// //         fetchReviews();
// //     }, [id]);

// //     if (!brewery) {
// //         return <div>Loading...</div>;
// //     }

// //     return (
// //         <div>
// //             <h2>{brewery.name}</h2>
// //             <p>Address: {brewery.street}, {brewery.city}, {brewery.state} {brewery.postal_code}</p>
// //             <p>Phone: {brewery.phone}</p>
// //             <p>Website: <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">{brewery.website_url}</a></p>
// //             <h3>Reviews:</h3>
// //             <ul>
// //                 {reviews.map((review) => (
// //                     <li key={review.id}>
// //                         <p>Rating: {review.rating}</p>
// //                         <p>{review.description}</p>
// //                     </li>
// //                 ))}
// //             </ul>
// //             <ReviewComponent breweryId={id} />
// //         </div>
// //     );
// // };

// // export default BreweryPageComponent;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const SearchComponent = () => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [breweries, setBreweries] = useState([]);
//     const [loading, setLoading] = useState(false);

//     const handleSearch = async (event) => {
//         event.preventDefault();
//         setLoading(true);
//         try {
//             const response = await axios.get(`https://api.openbrewerydb.org/breweries/search?q=${searchTerm}`);
//             setBreweries(response.data);
//             setLoading(false);
//         } catch (error) {
//             console.error('Error searching breweries:', error);
//             setLoading(false);
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={handleSearch}>
//                 <input
//                     type="text"
//                     value={searchTerm}
//                     onChange={(event) => setSearchTerm(event.target.value)}
//                     placeholder="Search breweries"
//                 />
//                 <button type="submit">Search</button>
//             </form>
//             {loading ? (
//                 <p>Loading...</p>
//             ) : (
//                 <ul>
//                     {breweries.map((brewery) => (
//                         <li key={brewery.id}>
//                             <a href={`/brewery/${brewery.id}`}>{brewery.name}</a>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default SearchComponent;


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReviewComponent from './ReviewComponent';

const BreweryPageComponent = () => {
    const { id } = useParams();
    const [brewery, setBrewery] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchBreweryData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://api.openbrewerydb.org/breweries/${id}`);
                setBrewery(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching brewery data:', error);
                setLoading(false);
            }
        };

        const fetchReviews = async () => {
            try {
                const response = await axios.get(`https://api.openbrewerydb.org/reviews?brewery_id=${id}`);
                setReviews(response.data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchBreweryData();
        fetchReviews();
    }, [id]);

    if (!brewery) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{brewery.name}</h2>
            <p>Address: {brewery.street}, {brewery.city}, {brewery.state} {brewery.postal_code}</p>
            <p>Phone: {brewery.phone}</p>
            <p>Website: <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">{brewery.website_url}</a></p>
            <h3>Reviews:</h3>
            <ul>
                {reviews.map((review) => (
                    <li key={review.id}>
                        <p>Rating: {review.rating}</p>
                        <p>{review.description}</p>
                    </li>
                ))}
            </ul>
            <ReviewComponent breweryId={id} />
        </div>
    );
};

export default BreweryPageComponent;