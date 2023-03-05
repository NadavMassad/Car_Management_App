import React, { useEffect } from 'react'
import Combobox from "react-widgets/Combobox";
import "react-widgets/styles.css";
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import CarModel from '../../models/Car';
import { carsSelector, getCarsAsync } from '../cars/carsSlice'
import { userAccess } from '../login/loginSlice';

const MakeOrder = () => {
  const dispatch = useAppDispatch()
  const cars = useAppSelector(carsSelector)
  const token = useAppSelector(userAccess)

  useEffect(() => {
    dispatch(getCarsAsync(token))
  }, [])
  
  return (
    <div>

<Combobox
  style={{width: "200px"}}
  data={cars}
  dataKey='id'
  textField='model'
  placeholder="Choose for A Car"
/>
    </div>
  )
}

export default MakeOrder