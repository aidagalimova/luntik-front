import { setFilm } from "../reducers/filmReducer"


export const searchFilmByCategory = (value, category) => {
	const token = localStorage.getItem('token')
	return async dispatch => {
		try {
			await fetch('https://luntik-film.herokuapp.com/api/Films', {

				method: 'get',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + token
				}

			})
				.then((res) => res.json())
				.then((response) => {
					
					
					dispatch(setFilm(response.filter(item => item.category === category)))	
					
				})
		}
		catch (e) {
			console.log(e)
		}
	}
}