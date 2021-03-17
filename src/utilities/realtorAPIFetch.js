import axios from "axios";

const getListings = props => {
    const options = {
        method: 'GET',
        url: 'https://realtor.p.rapidapi.com/properties/v2/list-for-sale',
        params: {
            city: 'New York City',
            limit: '200',
            offset: '0',
            state_code: 'NY',
            sort: 'relevance'
        },
        headers: {
            'x-rapidapi-key': '7eb956ff59msh50ec9c0bfbabea4p14f781jsne342c14978b4',
            'x-rapidapi-host': 'realtor.p.rapidapi.com'
        }
    };

    return axios.request(options)
}


export default getListings;
