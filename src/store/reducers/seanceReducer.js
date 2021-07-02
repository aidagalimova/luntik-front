const SET_SEANCE = "SET_SEANCE"
const DELETE_SEANCE = "DELETE_SEANCE" 

export const defaultState = {
    seances: [],
}

export const seanceReducer = (state = defaultState, action) => {
    switch (action.type) {
		case SET_SEANCE:		
		return {...state, seances: [...state.seances, action.payload]}
		
		case DELETE_SEANCE:
		return {
			...state, 
			seances: [],
		}
	
        default:
            return state
    }
}

export const setSeance = (seances) => ({type: SET_SEANCE, payload: seances})

export const deleteSeance = () => ({type: DELETE_SEANCE})