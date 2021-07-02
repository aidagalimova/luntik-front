const SET_FILM = "SET_FILM"
const DELETE_FILM = "DELETE_FILM" 

export const defaultState = {
    films: [],
}

export const filmReducer = (state = defaultState, action) => {
    switch (action.type) {
		case SET_FILM:		
		return {...state, tickets: [...state.tickets, action.payload]}
		
		case DELETE_FILM:
		return {
			...state, 
			films: [],
		}
	
        default:
            return state
    }
}

export const setFilm = (films) => ({type: SET_FILM, payload: films})

export const deleteFilm = () => ({type: DELETE_FILM})