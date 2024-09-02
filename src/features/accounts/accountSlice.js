import { createSlice } from "@reduxjs/toolkit"

const initialState = {
     balance: 0,
     loan: 0,
     loanPurpose: "",
     isLoading: false
}
// here we are using redux toolkit which is to define slice
const accountSlice = createSlice({
     name: 'account',
     initialState,
     reducers: {
          deposit(state, action) {
               state.balance += action.payload
          },
          withdrow(state, action) {
               state.balance -= action.payload
          },
          requestLoan(state, action) {
               if (state.loan > 0) return
               state.loan = action.payload.amount;
               state.loanPurpose = action.payload.purpose;
               state.balance = state.balance + action.payload.amount;
          },
          payLoan(state, action) {
               state.loan = 0;
               state.loanPurpose = ""
               state.balance -= state.loan
          }
     }

})

export const { deposit, withdrow, requestLoan, payLoan } = accountSlice.actions
export default accountSlice.reducer;
// it will create auto action creators, we don't need switch statement

// export default function accountReducer(state = initialState, action) {
//      switch (action.type) {
//           // privoiusly we use ACC_DEPOSIT
//           case 'account/deposit': {
//                return { ...state, balance: state.balance + action.payload }
//           }
//           case 'account/withdraw': {
//                return { ...state, balance: state.balance - action.payload }
//           }
//           case 'account/requestLoan': {
//                if (state.loan > 0) return state
//                return { ...state, loan: action.payload.amount, loanPurpose: action.payload.purpose }
//           }
//           case 'account/payLoan': {
//                return { ...state, loan: 0, loanPurpose: "", balance: state.balance - state.loan }
//           }

//           default: {
//                return state;
//           }

//      }
// }



// export function deposit(amount, currency) {
//      if (currency === "USD")
//           return { type: 'account/deposit', payload: amount }
//      return async function (dispatch, getState) {
//           const host = 'api.frankfurter.app';
//           const res = await fetch(`https://${host}/latest?amount=${amount}&from=${currency}&to=USD`)
//           const data = await res.json()
//           const converted = data.rates.USD;
//           dispatch({ type: 'account/deposit', payload: converted });
//      }
// }
// export function withdraw(amount) {
//      return { type: 'account/withdraw', payload: amount }
// }

// export function requestloan(amount, purpose) {
//      return {
//           type: 'account/requestLoan', payload: {
//                amount, purpose
//           }
//      }
// }

// export function payloan() {
//      return { type: 'account/payLoan' }
// }
