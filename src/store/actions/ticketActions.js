import { setTicket } from "../reducers/ticketReducer"

export const getTicketsByIdUser = (id) => {
	const token = localStorage.getItem('token')
	return async dispatch => {
		try {
			await fetch('https://luntik-ticket.herokuapp.com/api/Tickets', {

				method: 'get',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + token
				}

			})
				.then((res) => res.json())
				.then((response) => {
					
					console.log(response)
					dispatch(setTicket(response));
					
					
				})
		}
		catch (e) {
			console.log(e)
		}
	}
}
