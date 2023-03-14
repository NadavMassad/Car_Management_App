import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { carsSelector, getCarsAsync } from '../cars/carsSlice'
import { userAccess } from '../login/loginSlice';
import { addOrderAsync, getOrdersAsync, ordersSelector } from './OrdersSlice';
import { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';



const MakeOrder = () => {
  const dispatch = useAppDispatch()
  const cars = useAppSelector(carsSelector)
  const token = useAppSelector(userAccess)
  const orders = useAppSelector(ordersSelector)
  const [isAllDay, setisAllDay] = useState(false)
  const [selectedStartDate, setselectedStartDate] = useState<Dayjs | null>(null)
  const [formatedStartDate, setformatedStartDate] = useState("")
  const [startTime, setstartTime] = useState<Dayjs | null>(null)
  const [formatedStartTime, setformatedStartTime] = useState("")
  const [endTime, setendTime] = useState<Dayjs | null>(null)
  const [formatedEndTime, setformatedEndTime] = useState("")

  const handleStartDateChange = (date: Dayjs | null) => {
    setselectedStartDate(date)
    setformatedStartDate(date!.format('DD/MM/YYYY'))
  }

  const handleStartTimeChange = (time: Dayjs | null) => {
    setstartTime(time)
    setformatedStartTime(time!.format('HH:mm:ss'))
  }
  const handleEndTimeChange = (time: Dayjs | null) => {
    if (!(time!.format('HH:mm:ss') < formatedStartTime)) {
      setendTime(time)
      setformatedEndTime(time!.format('HH:mm:ss'))
    }
  }

  useEffect(() => {
    if (formatedStartDate && formatedStartTime && formatedEndTime) {
      // dispatch(addOrderAsync(token))
      dispatch(getCarsAsync(token))
      dispatch(getOrdersAsync(token))
    }
    console.table(cars)
    // dispatch(getCarsAsync(token))
  }, [formatedEndTime, formatedStartDate, formatedStartDate])

  return (
    <div style={{ margin: '10px' }}>
      יום שלם: <input defaultChecked={false} type={'checkbox'} onChange={() => setisAllDay(!isAllDay)} />

      <div style={{ width: '400px', marginRight: '5px' }}>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker', 'MobileTimePicker',]}>
            {/* Start Date */}
            <DemoItem >
              <DatePicker
                format='DD/MM/YYYY'
                value={selectedStartDate}
                onChange={handleStartDateChange} />
            </DemoItem><br /><br />
            <DemoItem >
              {!isAllDay &&
                <div>
                  <div> משעה:</div>
                  <div style={{ direction: "ltr" }}>
                    <MobileTimePicker value={startTime} ampm={false} onChange={handleStartTimeChange} />
                  </div>
                  <div>עד שעה:</div>
                  <div style={{ direction: "ltr" }}>
                    <MobileTimePicker value={endTime} ampm={false} onChange={handleEndTimeChange} />
                  </div>
                </div>}
            </DemoItem>

          </DemoContainer>
        </LocalizationProvider>
      </div>
      <div style={{ marginBottom: '10px' }}>

        {formatedStartDate &&
          <div>
           <b>מתאריך:</b>  <br />
            {formatedStartDate}
          </div>}<br />
        {formatedStartTime &&
          <div>
           <b>משעה:</b> <br />
            {formatedStartTime.slice(0, -3)}
          </div>}
        {formatedEndTime &&
          <div>
            <b>עד שעה:</b> <br />
            {formatedEndTime.slice(0, -3)}
          </div>}
      </div>
      {/* Display The cars */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '.25rem', gridAutoRows: 'minmax(160px, auto)' }}>
        {cars.map(car =>
          <div key={car.id} style={{ borderRadius: '5px', border: '2px solid rgb(0, 0, 0)', padding: '.5rem' }}>

            <div style={{ textAlign: 'center' }}>
              מחלקה: {car.dep_name}<br />
              יצרן: {car.make}<br />
              דגם: {car.model}<br />
              צבע: {car.color}<br />
              שנה: {car.year}   <br />
              <img src={`http://127.0.0.1:8000${car.image}`} style={{ width: '150px', height: '100px' }} alt={car.model} /><br />
              {/* <button>Order Car</button> */}
            </div>


          </div>)}
      </div>

    </div>
  )
}

export default MakeOrder