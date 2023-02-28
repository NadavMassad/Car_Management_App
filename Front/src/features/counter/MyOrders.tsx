import React, { useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  getOrdersAsync,
  ordersSelector
} from './myOrdersSlice';


export function MyOrders() {
  const orders = useAppSelector(ordersSelector);
  const dispatch = useAppDispatch();

    useEffect(() => {
      dispatch(getOrdersAsync("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3NTc3NDU1LCJpYXQiOjE2Nzc1NzU5NTUsImp0aSI6IjgwNTM5ZTdjMzZmMTQ0NmJiNmQ0OWYyZTc2ZWUwNTViIiwidXNlcl9pZCI6MSwidXNlcm5hbWUiOiJOYWRhdiIsImVtYWlsIjoibkBtLmNvbSJ9.0g2ZFOB1gp0pSkr-uoz23Cj3GfCQL78gFcrxcLuEcGw"))
    }, [orders.length])
    

  return (
    <div>
      <h1>My Orders</h1><hr/>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '.25rem', gridAutoRows: 'minmax(160px, auto)'}}>
       {orders.map((order, i)=> <div key={i} style={{borderRadius: '5px', border: '2px solid rgb(0, 0, 0)', padding: '.5rem'}}>
        Car: {order.car}<br/>
        From Date: {order.fromDate}<br/>
        To Date: {order.toDate}<br/>
        {order.isAllDay ? <div> All Day</div> :
         <div> From Time: {order.fromTime}<br/>
         To Time: {order.toTime}</div>}
         Destination: {order.destination}<br/>          
        <img src={`http://127.0.0.1:8000${order.carImg}`} style={{width: '100px', height: '100px'}} alt={order.car}/>

        
        </div>)} 
      </div>
    </div>
  );
}
