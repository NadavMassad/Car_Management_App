import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import  myOrderReducer  from '../features/counter/myOrdersSlice';

export const store = configureStore({
  reducer: {
    myOrder: myOrderReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
