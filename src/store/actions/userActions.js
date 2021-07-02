import { isNumeric } from "jquery";
import { setUser } from "../reducers/userReducer"
import { notification } from "antd";

export const authenticate = (email, password) => {
	if (email && password !== undefined) {
		return async dispatch => {
			try {
				await fetch('https://luntik-account.herokuapp.com/token?email=' + email + '&password=' + password, {

					method: 'post',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
					}
				})
					.then((res) => {
						return res.json();

					})
					.then((response) => {
						// if (response.status === 200) {
						console.log("Вызван auth")
						localStorage.setItem('token', response.access_token)
						dispatch(currentUser(response.email));
						// } else {
						// 	notification.open({ type: "error", message: "Неправильный логин или пароль!" })
						// }

					})
			}
			catch (e) {
				console.log(e)
			}
		}
	}
}


export const currentUser = (email) => {
	const token = localStorage.getItem('token')
	if (sessionStorage.getItem('user') == undefined) {
		return async dispatch => {
			try {
				await fetch('https://luntik-account.herokuapp.com/api/Users', {

					method: 'get',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
						'Authorization': 'Bearer ' + token
					}

				})
					.then((res) => res.json())
					.then((response) => {
						console.log(response);
						// if (response.status === 200) {
						let user = response.find(item => item.email === email);
						console.log(user)
						dispatch(setUser(response.find(item => item.email == email)))
						let mail = response.find(item => item.email == email);
						sessionStorage['user'] = JSON.stringify(mail);
						// } else {
						// 	notification.open({ type: "error", message: "Неправильный логин или пароль!" })
						// }

					})
			}
			catch (e) {
				console.log(e)
			}
		}
	}
}

export const changeUserInfo = (newName, password) => {
	const token = localStorage.getItem('token')
	let user = sessionStorage.getItem('user');
	user = JSON.parse(user);
	user.firstName = newName;
	const hashpassword = user.hashedPassword;
	user.hashedPassword = password;
	return async dispatch => {
		try {
			await fetch(`https://luntik-account.herokuapp.com/api/Users/${user.id}/${password}`, {
				method: 'put',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + token
				},
				body: JSON.stringify(user)

			})
				.then((res) => {
					if (res.status === 404) {
						notification.open({ type: "error", message: "Неправильный пароль!" })
					}
					else {
						user.hashedPassword = hashpassword;
						sessionStorage['user'] = JSON.stringify(user);
						window.location.reload();
					}
				})
		}
		catch (e) {
			notification.open({ type: "error", message: "Неправильный пароль!" })
			console.log(e)
		}
	}
}

export const changeUserPassword = (oldpassword, newpassword) => {
	const token = localStorage.getItem('token')
	let user = sessionStorage.getItem('user');
	user = JSON.parse(user);
	user.hashedPassword = newpassword;
	return async dispatch => {
		try {
			await fetch(`https://luntik-account.herokuapp.com/api/Users/${user.id}/${oldpassword}`, {

				method: 'put',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + token
				},
				body: JSON.stringify(user)

			})
				.then((res) => {
					if (res.status === 404) {
						notification.open({ type: "error", message: "Неправильный пароль!" })
					}
					else {
						dispatch(currentUser(user.email));
						window.location.reload();
					}
				})
		}
		catch (e) {
			console.log(e)
		}
	}
}


export const register = (email, username, hashedPassword) => {
	console.log(email, username, hashedPassword)
	return async dispatch => {
		try {
			await fetch('https://luntik-account.herokuapp.com/api/Users', {

				method: 'post',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					"email": email,
					"firstName": username,
					"lastName": "XXXXXXX",
					"dateOfBirth": "01.01.1970",
					"phoneNumber": "88984561365",
					"hashedPassword": hashedPassword,
					"isAdmin": true
				})

			})
				.then((res) => {
					console.log(res)
					return res.json()

				})
				.then((response) => {

					//localStorage.setItem('token', response.access_token)
					// dispatch(auth());


				})
		}
		catch (e) {
			console.log(e)
		}
	}
}
