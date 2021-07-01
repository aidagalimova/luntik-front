const SET_TICKET = "SET_TICKET"
const DELETE_TICKET = "DELETE_TICKET" 

export const defaultState = {
    tickets: [],
}

export const ticketReducer = (state = defaultState, action) => {
    switch (action.type) {
		case SET_TICKET:		
		return {...state, tickets: [...state.tickets, action.payload]}
		
		case DELETE_TICKET:
		return {
			...state, 
			tickets: [],
		}
	
        default:
            return state
    }
}

export const setTicket = (tickets) => ({type: SET_TICKET, payload: tickets})

export const deleteTicket = () => ({type: DELETE_TICKET})