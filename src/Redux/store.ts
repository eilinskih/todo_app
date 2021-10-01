import { combineReducers, createStore } from "redux";
import appReducer from "./appReducer";

const rootRedecer = combineReducers({
    appReducer
});

type RootReducerType = typeof rootRedecer;
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootRedecer);

export default store;


