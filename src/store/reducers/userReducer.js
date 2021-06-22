const SET_USER = "SET_USER"
const DELETE_USER = "DELETE_USER" 

const defaultState = {
	currentUser: {},
	isAuth: false
}

export const userReducer = (state = defaultState, action) => {

	switch(action.type) {

	case "SET_USER": {
		return {...state, user: action.payload, isAuth: true}
	}

	case "DELETE_USER": {
		return {...state, user: {}, isAuth: false}
	}

	default: return state


	}

}

export const setUser = (user) => ({type: SET_USER, payload: user})
export const deleteUser = () => ({type: DELETE_USER})