import axios from 'axios';

const API_BASE_URL = 'https://affinitymag.co.uk/wp-json'; // Replace with your API base URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getrandom = async (endpoint) => {
    try {
      const response = await api.get(endpoint);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

  export const getrecentpost =async (endpoint)=>{
    try{
      const response =await api.get(endpoint);
      return response.data;
    }catch(error){
      console.error('error fetching recent post data:',error)
      throw error;
    }
  }