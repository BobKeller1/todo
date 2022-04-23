import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import TodosReducer from "./reducers/TodosReducer"

const rootReducer = combineReducers({
  TodosReducer
});

export const setupStore = () => configureStore({
  reducer: rootReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;
export type TAppStore = ReturnType<typeof setupStore>;
export type TAppDispatch = TAppStore["dispatch"];
