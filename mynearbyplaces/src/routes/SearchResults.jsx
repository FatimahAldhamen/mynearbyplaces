import React from 'react';
import PlacesList from '../components/PlacesList';

const SearchResults = () => {
    return (
        <div className="search-results">
            <h2 className="text-center font-weight-light my-4">Search Results</h2>
            <PlacesList/>   
        </div>
    )
}

export default SearchResults
