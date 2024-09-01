import { combineReducers, createStore } from "redux"

const initialState = {
     fullName: "",
     nationalID: '',
     createdAt: ""
}

const initialCustomer = {
     balance: 0,
     loan: 0,
     loanPurpose: "",
}

function accountReducer(state = initialState, action) {
     switch (action.type) {
          // privoiusly we use ACC_DEPOSIT
          case 'account/deposit': {
               return { ...state, balance: state.balance + action.payload }
          }
          case 'account/withdraw': {
               return { ...state, balance: state.balance - action.payload }
          }
          case 'account/requestLoan': {
               if (state.loan > 0) return state
               return { ...state, loan: action.payload.amount, loanPurpose: action.payload.purpose }
          }
          case 'account/payLoan': {
               return { ...state, loan: 0, loanPurpose: "", balance: state.balance - state.loan }
          }

          default: {
               return state;
          }

     }
}


function customerReducer(state = initialCustomer, action) {
     switch (action.type) {
          case 'customer/createCustomer': {
               return { ...state, fullName: action.payload.fullName, nationalID: action.payload.nationalID, createdAt: action.payload.createdAt }
          }
          case 'customer/updateCustomer':
               return {
                    ...state, fullName: action.payload
               }
          default: return state
     }
}
const rootReducer = combineReducers({
     account: accountReducer,
     customer: customerReducer
})

const store = createStore(rootReducer)



function deposit(amount) {
     return { type: 'account/deposit', payload: amount }
}
function withdraw(amount) {
     return { type: 'account/withdraw', payload: amount }
}

function requestloan(amount, purpose) {
     return {
          type: 'account/requestLoan', payload: {
               amount, purpose
          }
     }
}

function payloan() {
     return { type: 'account/payLoan' }
}

store.dispatch(deposit(500))
store.dispatch(withdraw(100))
store.dispatch(requestloan(200, 'study'))
store.dispatch(payloan())

console.log(store.getState())




function createCustomer(fullName, nationalID) {
     return { type: 'customer/createCustomer', payload: { fullName: fullName, nationalID: nationalID, createdAt: new Date().toISOString() } }
}
function updateName(fullname,) {
     return { type: 'customer/updateName', payload: fullname }
}