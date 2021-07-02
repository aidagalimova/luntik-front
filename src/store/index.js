import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { filmReducer } from "./reducers/filmReducer";
import { seanceReducer } from "./reducers/seanceReducer";
import { ticketReducer } from "./reducers/ticketReducer";
import { userReducer } from "./reducers/userReducer";




const rootReducer = combineReducers({
	user: userReducer,
	ticket: ticketReducer,
	film: filmReducer,
	seance: seanceReducer
})


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


