import { configureStore } from '@reduxjs/toolkit';
import filter from './filter/slice';
import cart from './cart/slice';
import pizza from './pizza/slice';
import lang from './lang/slice';
import { useDispatch, useSelector} from 'react-redux';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizza,
    lang,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();


