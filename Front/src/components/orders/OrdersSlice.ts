import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import OrderModel from '../../models/Order';
import { addOrder, getOrders } from './OrdersAPI';

export interface OrderState {
  orders: OrderModel[]
}

const initialState: OrderState = {
  orders: []
};

export const getOrdersAsync = createAsyncThunk(
  'myOrder/getOrders',
  async (token: string) => {
    const response = await getOrders(token);
    return response;
  }
);

export const addOrderAsync = createAsyncThunk(
  'myOrder/addOrder',
  async ({ token, order }: { token: string, order: OrderModel }) => {
    const response = await addOrder(token, order);
    return response;
  }
);

export const myOrderSlice = createSlice({
  name: 'myOrder',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrdersAsync.fulfilled, (state, action) => {
        state.orders = action.payload
      })
      .addCase(addOrderAsync.fulfilled, (state, action) => {
        console.log(action.payload)
      });
  },
});

export const { } = myOrderSlice.actions;
export const ordersSelector = (state: RootState) => state.myOrder.orders;
export default myOrderSlice.reducer;
