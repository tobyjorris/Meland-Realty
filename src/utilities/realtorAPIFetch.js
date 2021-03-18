import axios from "axios";

const getListings = listingOptions => {
    const options = {
        method: 'GET',
        url: 'https://realtor.p.rapidapi.com/properties/v2/list-for-sale',
        params: {
            city: 'Minneapolis',
            limit: '16',
            offset: '0',
            state_code: 'MN',
            sort: 'relevance'
        },
        headers: {
            'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
            'x-rapidapi-host': 'realtor.p.rapidapi.com'
        }
    };
    return axios.request(options)
}


export default getListings;
