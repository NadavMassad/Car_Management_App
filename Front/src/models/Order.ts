export default interface OrderModel {
    id?: number
    user: string
    car: string
    carName: string
    orderDate: string
    fromDate:string
    toDate:  string
    fromTime? : string
    toTime? : string
    isAllDay?: boolean
    destination : string
    carImg?:string
    car_model_name: string
}