const SET_USER = "SET_USER"
const DELETE_USER = "DELETE_USER" 

export const defaultState = {
    films: [],
}

export const filmReducer = (state = defaultState, action) => {
    switch (action.type) {
		case SET_USER: 
		return {
			...state, 
			currentUser: action.payload,
			isAuth: true
		
		}
		case DELETE_USER:
		localStorage.removeItem('token')
		return {
			...state, 
			currentUser: {},
			isAuth: false
		}
	
        default:
            return state
    }
}

export const setUser = (user) => ({type: SET_USER, payload: user})

export const deleteUser = () => ({type: DELETE_USER})