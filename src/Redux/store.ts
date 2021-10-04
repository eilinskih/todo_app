import { combineReducers, createStore } from "redux";
import appReducer from "./appReducer";

const rootRedecer = combineReducers({
    appReducer
});

type RootReducerType = typeof rootRedecer;
export type AppStateType = ReturnType<RootReducerType>
export type AppDispatch = typeof store.dispatch 

const store = createStore(rootRedecer);

export default store;


