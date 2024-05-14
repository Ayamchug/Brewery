import React from 'react';

const SearchForm = () => {
    return (
        <form>
            <input type="text" placeholder="Search by City" />
            <input type="text" placeholder="Search by Name" />
            <input type="text" placeholder="Search by Type" />
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchForm;