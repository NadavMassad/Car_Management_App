import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { carsSelector, getCarsAsync } from '../cars/carsSlice'
import { userAccess } from '../login/loginSlice';
import { addOrderAsync, avilableCarsSelector, checkOrderDatesAsync, getOrdersAsync, ordersSelector } from './OrdersSlice';
import { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import jwt_decode from "jwt-decode"


const MakeOrder = () => {
  const dispatch = useAppDispatch()
  const cars = useAppSelector(carsSelector)
  const token = useAppSelector(userAccess)
  const availableCars = useAppSelector(avilableCarsSelector)
  const decoded: any = jwt_decode(token)
  const orders = useAppSelector(ordersSelector)
  const [isAllDay, setisAllDay] = useState(false)
  const [selectedStartDate, setselectedStartDate] = useState<Dayjs | null>(null)
  const [formatedStartDate, setformatedStartDate] = useState("")
  const [startTime, setstartTime] = useState<Dayjs | null>(null)
  const [formatedStartTime, setformatedStartTime] = useState("")
  const [endTime, setendTime] = useState<Dayjs | null>(null)
  const [formatedEndTime, setformatedEndTime] = useState("")
  const [fromDate, setfromDate] = useState<Date | null>(null)
  const [toDate, settoDate] = useState<Date | null>(null)
  const [refreshFlag, setrefreshFlag] = useState(false)

  // This function handles the date of the car rent
  const handleStartDateChange = (date: Dayjs | null) => {
    setselectedStartDate(date)
    setformatedStartDate(date!.format('DD-MM-YYYY'))
    setrefreshFlag(!refreshFlag)
  }

  // This functions handles the start time of the order
  const handleStartTimeChange = (time: Dayjs | null) => {
    setstartTime(time)
    setformatedStartTime(time!.format('HH:mm:ss'))
    setrefreshFlag(!refreshFlag)
  }
  // This functions handles the retrun time of the car
  const handleEndTimeChange = (time: Dayjs | null) => {
    if (!(time!.format('HH:mm:ss') < formatedStartTime)) {
      setendTime(time)
      setformatedEndTime(time!.format('HH:mm:ss'))
      setrefreshFlag(!refreshFlag)
    }
  }


  // Keep in mind, the timezone in israel is 2 hours ahead.
  const handleDateTimeVar = () => {
    const [day, month, year] = formatedStartDate.split('-').map(Number);
    const [starthours, startminutes, startseconds] = formatedStartTime.split(':').map(Number);
    const [endhours, endminutes, endseconds] = formatedEndTime.split(':').map(Number);
    if (!isAllDay) {
      const start_date = new Date(year, month - 1, day, starthours + 2, startminutes, startseconds)
      const end_date = new Date(year, month - 1, day, endhours + 2, endminutes, endseconds)
      setfromDate(start_date)
      settoDate(end_date)
    }
    if (isAllDay) {
      const start_date = new Date(year, month - 1, day)
      start_date.setHours(2, 0, 0, 0)
      const end_date = new Date(year, month - 1, day + 1)
      end_date.setHours(1, 59, 0, 0)
      setfromDate(start_date)
      settoDate(end_date)
    }

  }
  // This function is used to manage the calls to the server
  // and handle the variables we send.
  const exeucte = () => {
    handleDateTimeVar()
    // dispatch(checkOrderDatesAsync({token: token, dates: {fromDate: fromDate, toDate: toDate, isAllDay: isAllDay} }))
    // dispatch(getOrdersAsync(token))
  }


  useEffect(() => {
    if (formatedStartDate && formatedStartTime && formatedEndTime ||
      formatedStartDate && isAllDay) {
      exeucte()
    }
  }, [refreshFlag])

  return (
    <div style={{ margin: '10px' }}>
      יום שלם: <input defaultChecked={false} type={'checkbox'} onChange={() => setisAllDay(!isAllDay)} />

      <div style={{ width: '400px', marginRight: '5px' }}>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker', 'MobileTimePicker',]}>
            {/* Start Date */}
            <DemoItem >
              <DatePicker
                format='DD-MM-YYYY'
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
            <b>מתאריך:</b> 
            {formatedStartDate}
          </div>}<br />
        {formatedStartTime &&
          <div>
            <b>משעה:</b>
            {formatedStartTime.slice(0, -3)}
          </div>}
        {formatedEndTime &&
          <div>
            <b>עד שעה:</b>
            {formatedEndTime.slice(0, -3)}
          </div>}
          {isAllDay && 
          <div>
            <b>כל היום</b>
          </div>

          }
      </div>
      <button onClick={() => dispatch(checkOrderDatesAsync({token: token, dates: {fromDate: fromDate, toDate: toDate, isAllDay: isAllDay} }))}>POST Request</button>
      {/* Display The cars */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '.25rem', gridAutoRows: 'minmax(160px, auto)' }}>
        {availableCars.map(car =>
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