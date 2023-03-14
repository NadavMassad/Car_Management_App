export default interface OrderModel {
    id?: number
    user: string
    user_name?: string
    car_name?: string
    car: string
    carName?: string
    orderDate: string
    fromDate:Date
    toDate:  Date
    isAllDay: boolean
    destination : string
    car_image: string
}