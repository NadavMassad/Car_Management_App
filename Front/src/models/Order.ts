export default interface OrderModel {
    id?: number
    user: string
    user_name?: string
    car_name?: string
    car?: number
    carName?: string
    orderDate: Date | null | string
    fromDate:Date | null
    toDate:  Date | null
    isAllDay: boolean
    destination? : string
    car_image?: string
}