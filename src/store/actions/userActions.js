import { setUser } from "../reducers/userReducer"


export const authenticate = (email, password) => {
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
		console.log(res.json())
		return res.json()
		
	})
    .then((response) => {
		
		localStorage.setItem('token', response.access_token)
       // dispatch(auth());


    })
}
    catch (e) {
        console.log(e)
    }
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



export const register = (id, email, firstName, lastName, dateOfBirth, phoneNumber, hashedPassword) => {
	return async dispatch => {
        try {
    await fetch('https://luntik-account.herokuapp.com/api/Users', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
		body: JSON.stringify({
			"id": id,
			"email": email,
			"firstName": firstName,
			"lastName": lastName,
			"dateOfBirth": dateOfBirth,
			"phoneNumber": phoneNumber,
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
