import { createStore } from "redux";
import { Reducer } from "./Reducer";
export const ConfigStore = () => {
  const store = createStore(Reducer);
  return store;
};
