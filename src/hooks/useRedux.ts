import {useDispatch, useSelector} from 'react-redux';
import type {RootState, AppDispatch} from 'services/store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector = <StateType>(
  reducer: keyof RootState,
  key?: string,
): StateType => {
  const data = useSelector((state: RootState) => state[reducer]);

  if (key) {
    return (data as any)[key];
  }

  return data as StateType;
};
