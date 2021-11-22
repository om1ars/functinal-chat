import { combineReducers } from "redux";
import userSlice from "./slices/userSlice";



const reducers = combineReducers({
    user: userSlice
})

export default reducers