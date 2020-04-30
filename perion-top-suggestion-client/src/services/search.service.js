import axios from 'axios';

const SUGGESTIONS_API_URL = process.env.NODE_ENV === 'production' ?
    'https://search-suggest.herokuapp.com/api/search/'
    : 'https://search-suggest.herokuapp.com/api/search/'
// : '//localhost:3030/api/search/';

const SEARCH_API_URL = 'https://www.google.com/search?q=';

async function getSearchSuggestions(searchTerm) {
    if (!searchTerm.trim()) {
        return Promise.resolve([]);
    }

    try {
        const res = await axios.get(`${SUGGESTIONS_API_URL}${searchTerm}`);
        const searchSuggestions = res.data
        return searchSuggestions;
    } catch (error) {
        return Promise.resolve([]);
    }
}

function getSearchUrl(searchTerm) {
    return `${SEARCH_API_URL}${searchTerm}`;
}

export default {
    getSearchSuggestions,
    getSearchUrl
}