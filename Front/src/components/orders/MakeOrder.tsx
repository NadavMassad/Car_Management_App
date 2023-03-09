import React, { useEffect, useState } from 'react'
// import "react-widgets/styles.css";
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import CarModel from '../../models/Car';
import { carsSelector, getCarsAsync } from '../cars/carsSlice'
import { userAccess } from '../login/loginSlice';
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';
import { getOrdersAsync, ordersSelector } from './OrdersSlice';

const MakeOrder = () => {
  const dispatch = useAppDispatch()
  const cars = useAppSelector(carsSelector)
  const token = useAppSelector(userAccess)
  const orders = useAppSelector(ordersSelector)
  const [isAllDay, setisAllDay] = useState(false)
  const [startDate, setstartDate] = useState<Date | null>(null) // Starting date in the calendar
  const [endDate, setendDate] = useState<Date | null>(null) // Ending date in the calendar
  const [fromDate, setfromDate] = useState("") // Starting date after format change
  const [toDate, settoDate] = useState("")// Ending date after format change
  const [startTime, setstartTime] = useState("")
  const [endTime, setendTime] = useState("")



  const handleDateChange = (dates: [Date, Date] | null) => {
    if (dates) {
      setstartDate(dates[0]); // Set the start date
      setendDate(dates[1]); // Set the end date
    }
    changeDateFormat()
  }
  //////// Reasponsible for changing the format of the dates to match //////////////
  //////////////////////// the one in the Order model //////////////////////////////
  const changeDateFormat = () => {
    if (startDate) {
      const startYear = startDate!.getFullYear(); // Get the year (e.g. 2023)
      const startMonth = startDate!.getMonth() + 1; // Get the month (0-indexed, so add 1)
      const startDay = startDate!.getDate(); // Get the day of the month (1-31)
      const formattedStartDate = `${startYear}-${startMonth < 10 ? '0' + startMonth : startMonth}-${startDay < 10 ? '0' + startDay : startDay}`; // Format the date as a string (e.g. "2023-03-07")
      setfromDate(formattedStartDate)
    }
    if (endDate) {
      const endYear = endDate!.getFullYear(); // Get the year (e.g. 2023)
      const endMonth = endDate!.getMonth() + 1; // Get the month (0-indexed, so add 1)
      const endDay = endDate!.getDate(); // Get the day of the month (1-31)
      const formattedEndDate = `${endYear}-${endMonth < 10 ? '0' + endMonth : endMonth}-${endDay < 10 ? '0' + endDay : endDay}`; // Format the date as a string (e.g. "2023-03-07")
      settoDate(formattedEndDate)
    }
  };
  
  const availableCars = () => {
    // console.log(orders)
    console.log(fromDate)
    // orders.filter(order=> console.log( order.fromDate !== fromDate))
    orders.filter(order =>  order.fromDate !== fromDate)
    console.log(orders)
  }

  useEffect(() => {
    dispatch(getOrdersAsync(token))
    dispatch(getCarsAsync(token))
  }, [cars.length])

  return (
    <div>
      יום שלם: <input defaultChecked={false} type={'checkbox'} onChange={() => setisAllDay(!isAllDay)} />
      {!isAllDay &&
        <div>
          From: <h2>Add time</h2>
          To: <h2>Add time</h2>

        </div>}
      <DatePicker
        selectsRange={true} // Enable range selection
        startDate={startDate} // Set the start date
        endDate={endDate} // Set the end date
        onChange={(dates: any) => handleDateChange(dates)} // Handle date changes
        dateFormat="dd-MM-yyyy" // Set the date format
      // locale="he" // Set the locale to Hebrew
      /><br/>
      <button onClick={()=>availableCars()}>Search For A Car</button><br/>


      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '.25rem', gridAutoRows: 'minmax(160px, auto)' }}>
        {cars.map(car =>
          <div key={car.id} style={{ borderRadius: '5px', border: '2px solid rgb(0, 0, 0)', padding: '.5rem' }}>

            <div>
              {/* Department: {car.department}<br /> */}
              Maker: {car.make}<br />
              Model: {car.model}<br />
              Color: {car.color}<br />
              Year: {car.year}   <br />
              <img src={`http://127.0.0.1:8000${car.image}`} style={{ width: '150px', height: '100px' }} alt={car.model} /><br />
              <button>Order Car</button>
            </div>


          </div>)}
      </div>

    </div>
  )
}

export default MakeOrder