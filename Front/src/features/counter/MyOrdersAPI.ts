import axios from  'axios';

const MY_SERVER = "http://127.0.0.1:8000/orders"

// A mock function to mimic making an async request for data
export const getOrders = async (token: string) => {
  return axios.get(MY_SERVER, 
    {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((res) => res.data);
}
