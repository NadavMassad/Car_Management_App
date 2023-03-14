import axios from  'axios';
import OrderModel from '../../models/Order';
import  jwt_decode from "jwt-decode"
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
  let decoded: any = jwt_decode(token)
  return axios.post(MY_SERVER, {
    user: decoded.user_id,
    car: order.car,
    fromDate: order.orderDate,
    toDate: order.toDate,
    isAllDay: order.isAllDay,
    destination: order.destination
  },
    {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((res) => res.data);
}
