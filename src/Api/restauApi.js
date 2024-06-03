import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const allRestaurants = async () => {
    try{
        const getRestaurants = await api.get('/restaurant')
        return getRestaurants
    }catch(error){
        throw new Error('Error fetching restaurant profile: ' + error.message); // Gère les erreurs de requête
    }
}

export const restauProfile = async () => {
    try{
        const response = await api.get('/restaurant/profile/id')
        return response.data 
    }catch(error){
        throw new Error('Error fetching restaurant profile: ' + error.message);
    }
};