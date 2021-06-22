import { setUser } from "../reducers/userReducer"


export const authenticate = async (email, password) => {
	try {
		await fetch('http://some_url_for_creating_token', {
			method: 'get',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				"authorization": {
					"email": "user@example.com",
					"password": "123456"
				}
			})
		})
			.then((res) => res.json())
			.then((response) => {
				localStorage.setItem('token', response.token)
				login(localStorage.getItem('token'))
			})
	}
	catch (e) {
		console.log(e)
	}
}


export const login = (token) => {
	return async dispatch => {
		try {
			await fetch('http://some_url_for_getting_current_user', {

				method: 'get',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + token
				}

			})
				.then((res) => res.json())
				.then((response) => {
					dispatch(setUser(response.user))
				})
		}
		catch (e) {
			console.log(e)
		}
	}
}
