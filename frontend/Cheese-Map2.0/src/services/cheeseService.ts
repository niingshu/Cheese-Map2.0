//connect with the backend api 
const API_URL = '/api/cheeses';

export async function getCheeses() {
    const response = await fetch(API_URL);
    return response.json(); //fetch from backend and return the json for frontend
}