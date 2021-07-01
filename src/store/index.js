import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { filmReducer } from "./reducers/filmReducer";
import { ticketReducer } from "./reducers/ticketReducer";
import { userReducer } from "./reducers/userReducer";




const rootReducer = combineReducers({
	user: userReducer,
	ticket: ticketReducer,
	film: filmReducer
})


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


