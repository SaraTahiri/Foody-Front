import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json'
    }
});

//To Log in
export function loginClient(body) {
    return api.post('/client/login', body);
}

//Forgot Password
export function forgotPassword() {
    return api.get('/client/forgot-password');
}

//Client Profile 
export const getClientProfile = async () => {
    const token = localStorage.getItem('tokenAuth');
    const response = await api.get('/client/profile', {
        headers: {
            Authorization: `Bearer ${token}` // Assurez-vous que le token est bien passé dans l'en-tête
        }
    });
    return response.data;
}

//Update Profile Client
export const updateClientProfile = async (body) => {
    const response = await api.put('/client/profile/edit', body, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('tokenAuth')}`
        }
    });
    return response.data;
}

//To fetch Data Menu
const fetchDataMenus = async (filterCriteria) => {
    let url = '/restaurant/menu';
    // Check if filterCriteria contains category or searchTerm
    if (filterCriteria.category || filterCriteria.searchTerm) {
        url += '?'; // Start query string
        // Add category parameter if present
        if (filterCriteria.category) {
            url += `category=${filterCriteria.category}`;
            // Add '&' if there are more parameters to come
            if (filterCriteria.searchTerm) {
                url += '&';
            }
        }
        // Add searchTerm parameter if present
        if (filterCriteria.searchTerm) {
            url += `search=${filterCriteria.searchTerm}`;
        }
    }
    // Fetch data using the constructed URL
    const getApi = await api.get(url);
    return getApi;
};

export default fetchDataMenus;
