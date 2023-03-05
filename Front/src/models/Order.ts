export default interface OrderModel {
    id?: number
    user_name: string
    car_name: string
    car: string
    carName: string
    orderDate: string
    fromDate:string
    toDate:  string
    fromTime? : string
    toTime? : string
    isAllDay?: boolean
    destination : string
    car_image: string
}