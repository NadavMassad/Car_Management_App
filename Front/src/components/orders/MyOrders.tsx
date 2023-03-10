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

      <MakeOrder/><hr/>
      <h1>My Orders</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '.25rem', gridAutoRows: 'minmax(160px, auto)' }}>
        {orders.map(order => <div key={order.id} style={{ borderRadius: '5px', border: '2px solid rgb(0, 0, 0)', padding: '.5rem' }}>
          Car: {order.car_name}<br />
          From Date: {order.fromDate}<br />
          To Date: {order.toDate}<br />
          {order.isAllDay ? <div> All Day</div> :
            <div> From Time: {order.fromTime}<br />
              To Time: {order.toTime}</div>}
          Destination: {order.destination}<br />
          <img src={`http://127.0.0.1:8000${order.car_image}`} style={{ width: '150px', height: '100px' }} alt={order.car} /><br />
          <button>Start Your Drive</button>
        </div>)}
      </div>
    </div>
  );
}
