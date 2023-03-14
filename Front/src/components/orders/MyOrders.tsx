import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  getOrdersAsync,
  ordersSelector
} from './OrdersSlice';
import { userAccess } from '../login/loginSlice';
import { carsSelector, getCarsAsync } from '../cars/carsSlice';
import MakeOrder from './MakeOrder';


export function MyOrders() {
  const orders = useAppSelector(ordersSelector);
  const token = useAppSelector(userAccess)
  // const cars = useAppSelector(carsSelector)
  const dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(getOrdersAsync(token))
    dispatch(getCarsAsync(token))
  }, [orders.length])


  return (
    <div>

      <h1>ההזמנות שלי</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '.25rem', gridAutoRows: 'minmax(160px, auto)' }}>
        {orders.map(order =>
          <div key={order.id} style={{ borderRadius: '5px', border: '2px solid rgb(0, 0, 0)', padding: '.5rem', textAlign: 'center' }}>
            מכונית: {order.car_name}<br />
            מתאריך: {order.fromDate!.toString()}<br />
            עד לתאריך: {order.toDate!.toString()}<br />
            {order.isAllDay ? <div> כל היום</div> :
              <div> משעה: {order.fromDate!.toString()}<br />
                עד שעה: {order.toDate!.toString()}</div>
            }
            יעד: {order.destination}<br />
            <img src={`http://127.0.0.1:8000${order.car_image}`} style={{ width: '150px', height: '100px' }} alt={order.car_name} /><br />
          </div>)}
      </div>
    </div>
  );
}
