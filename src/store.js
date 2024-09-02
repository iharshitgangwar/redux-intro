import { applyMiddleware, combineReducers, createStore } from "redux"
import { thunk } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit"
import accountReducer from "./features/accounts/accountSlice"
import customerReducer from "./features/customers/customerSlice"
// const rootReducer = combineReducers({
//      account: accountReducer,
//      customer: customerReducer
// })
// by redux ttolkit we don't need thunks or redux-dev-tools all will be setup by thi
const store = configureStore({
     reducer: {
          account: accountReducer,
          customer: customerReducer
     }
})

// here we told our store that we want thunk middleware
// const store = createStore(rootReducer, applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())

export default store