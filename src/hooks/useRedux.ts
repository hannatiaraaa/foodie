import {useDispatch, useSelector} from 'react-redux';
import type {TypedUseSelectorHook} from 'react-redux';
import type {RootState, AppDispatch} from 'services/store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector = (
  reducer: keyof RootState,
  key?: keyof TypedUseSelectorHook<RootState>,
) => {
  const data = useSelector((state: RootState) => state[reducer]);

  if (data && key) {
    return data[key];
  }

  return data;
};
