import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { carsSelector, getCarsAsync } from './carsSlice';
import { userAccess } from '../login/loginSlice';
import { getProfileAsync, profileSelector } from '../profile/profileSlicer';

export function Cars() {
  const cars = useAppSelector(carsSelector);
  const dispatch = useAppDispatch();
  const token = useAppSelector(userAccess)
  const profile = useAppSelector(profileSelector)
  useEffect(() => {
    dispatch(getProfileAsync(token)) 
    dispatch(getCarsAsync(token))
  }, [cars.length])


  return (
    <div>
      <h1>Cars Available For Your Department</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '.25rem', gridAutoRows: 'minmax(160px, auto)' }}>
        {cars.map(car =>
          <div key={car.id} style={{ borderRadius: '5px', border: '2px solid rgb(0, 0, 0)', padding: '.5rem' }}>

            <div>
              {/* Department: {car.department}<br /> */}
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
