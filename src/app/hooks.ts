import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Rootstate, appDispatch } from "./store";

export const useAppDispatch: () => appDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<Rootstate> = useSelector;
