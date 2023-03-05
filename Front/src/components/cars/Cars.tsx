import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { carsSelector, getCarsAsync } from './carsSlice';
import { userAccess } from '../login/loginSlice';
import jwt_decode from "jwt-decode";
import { getProfileAsync, profileSelector } from '../profile/profileSlicer';

export function Cars() {
  const cars = useAppSelector(carsSelector);
  const dispatch = useAppDispatch();
  const token = useAppSelector(userAccess)
  let decoded_token: any = jwt_decode(token)
  const profile = useAppSelector(profileSelector)
  useEffect(() => {
    // We call this function to filter the cars to 
    // match the department of the user
    dispatch(getProfileAsync(token)) 
    dispatch(getCarsAsync(token))
  }, [cars.length])


  return (
    <div>
      <h1>Cars</h1><hr />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '.25rem', gridAutoRows: 'minmax(160px, auto)' }}>
        {cars.map((car, i) =>
          car.department === profile.department &&
          <div key={i} style={{ borderRadius: '5px', border: '2px solid rgb(0, 0, 0)', padding: '.5rem' }}>

            <div>
              Department: {car.department}<br />
              Maker: {car.make}<br />
              Model: {car.model}<br />
              Color: {car.color}<br />
              Year: {car.year}   <br />
              <img src={`http://127.0.0.1:8000${car.image}`} style={{ width: '150px', height: '100px' }} alt={car.model} /><br/>
              <button>Order Car</button>
            </div>


          </div>)}
      </div>
    </div>
  );
}
