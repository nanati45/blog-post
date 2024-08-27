import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

export const usePostDispatch = () => useDispatch<AppDispatch>();
export const usePostSelector: TypedUseSelectorHook<RootState> = useSelector;
