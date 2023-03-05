import axios from  'axios';
import OrderModel from '../../models/Order';

export const MY_SERVER = "http://127.0.0.1:8000/orders"

// A mock function to mimic making an async request for data
export const getOrders = async (token: string) => {
  return axios.get(MY_SERVER, 
    {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((res) => res.data);
}


export const addOrder = async (token: string, order: OrderModel) => {
  return axios.post(MY_SERVER, order,
    {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((res) => res.data);
}
