import axios from  'axios';

export const CARS_SERVER = "http://127.0.0.1:8000/cars"

// A mock function to mimic making an async request for data
export const getCars = async (token: string) => {
  return axios.get(CARS_SERVER, 
    {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((res) => res.data);
}
