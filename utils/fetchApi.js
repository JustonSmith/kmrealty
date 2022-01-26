import axios from 'axios';

export const baseUrl = 'https://realty-in-us.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get ((url), {
        headers: {
            'x-rapidapi-host': 'realty-in-us.p.rapidapi.com',
            'x-rapidapi-key': '8e2e11ca6dmsh77a061b9b854a4ep1762d7jsne6e273637c9f'
        }
    })
    return data;
}

