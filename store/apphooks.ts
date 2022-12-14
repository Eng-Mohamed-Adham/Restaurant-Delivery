import {
    TypedUseSelectorHook,
    useDispatch,
    useSelector,
  } from 'react-redux';
  import type {
    AppStore,
    AppState,

    AppDispatch,
  } from './index';
  
  // export const useAppDispatch = () => useDispatch<  AppStore>();

  export const useAppDispatch: () => AppDispatch = useDispatch 

  export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;