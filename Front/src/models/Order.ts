export default class OrderModel {
    id?: number
    user: string = ""
    car: string = ""
    orderDate: string = ""
    fromDate:string = ""
    toDate:  string = ""
    fromTime? : string
    toTime? : string
    isAllDay?: boolean
    destination : string = ""
    carImg?:string
}