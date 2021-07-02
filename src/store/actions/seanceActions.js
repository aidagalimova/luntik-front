import { setSeance } from "../reducers/seanceReducer"

export const getFilmsByIdSeance = (id) => {
	const token = localStorage.getItem('token')
	return async dispatch => {
		try {
			await fetch('https://luntik-seance.herokuapp.com/api/Seances', {

				method: 'get',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + token
				}

			})
				.then((res) => res.json())
				.then((response) => {
					
					dispatch(response.filter(item => item.id === id))
					//return (response.filter(item => item.id === id))	
					//получаю все сеансы данного пользователя
				})
		}
		catch (e) {
			console.log(e)
		}
	}
}