// import React, { useState } from 'react';
// import axios from 'axios';

// const SearchComponent = () => {
//     const [searchType, setSearchType] = useState('');
//     const [searchTerm, setSearchTerm] = useState('');
//     const [searchResults, setSearchResults] = useState([]);
//     const [loading, setLoading] = useState(false);

//     const handleSearch = async (event) => {
//         event.preventDefault();
//         setLoading(true);
//         try {
//             let url = 'http://localhost:3000/api/search';
//             if (searchType === 'city') {
//                 url += `?by_city=${searchTerm}`;
//             } else if (searchType === 'name') {
//                 url += `?by_name=${searchTerm}`;
//             } else if (searchType === 'type') {
//                 url += `?by_type=${searchTerm}`;
//             }
//             const response = await axios.get(url);
//             setSearchResults(response.data);
//             setLoading(false);
//         } catch (error) {
//             console.error('Error searching breweries:', error);
//             setLoading(false);
//         }
//     };

//     return (
//         <div>
//             <h2>Search Breweries</h2>
//             <form onSubmit={handleSearch}>
//                 <select value={searchType} onChange={(event) => setSearchType(event.target.value)}>
//                     <option value="">Select Search Type</option>
//                     <option value="city">City</option>
//                     <option value="name">Name</option>
//                     <option value="type">Type</option>
//                 </select>
//                 <input
//                     type="text"
//                     value={searchTerm}
//                     onChange={(event) => setSearchTerm(event.target.value)}
//                     placeholder={`Search by ${searchType}`}
//                 />
//                 <button type="submit">Search</button>
//             </form>
//             {loading ? (
//                 <p>Loading...</p>
//             ) : (
//                 <ul>
//                     {searchResults.map((brewery) => (
//                         <li key={brewery.id}>
//                             <h3>{brewery.name}</h3>
//                             <p>City: {brewery.city}</p>
//                             <p>Type: {brewery.brewery_type}</p>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default SearchComponent;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [breweries, setBreweries] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const response = await axios.get(`https://api.openbrewerydb.org/breweries/search?query=${searchTerm}`);
            setBreweries(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error searching breweries:', error);
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Search breweries"
                />
                <button type="submit">Search</button>
            </form>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {breweries.map((brewery) => (
                        <li key={brewery.id}>
                            <a href={`/brewery/${brewery.id}`}>{brewery.name}</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchComponent;