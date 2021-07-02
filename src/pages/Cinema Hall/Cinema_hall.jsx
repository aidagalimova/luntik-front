import {React, useEffect, useState} from 'react'
import Header from '../header/Header'
import './cinema_hall.css'
import $ from 'jquery'
import ellipse from '../../resources/Ellipse.png'
import { setTicket } from '../../store/reducers/ticketReducer'

export default function Cinema_hall(props) {

	const [tickets, setTickets] = useState([])
	var obj = JSON.parse(sessionStorage.getItem('user'));
	const [film, setFilm] = useState([])
	const [seance, setSeance] = useState([])
	const [added, setAdded] = useState([])

	useEffect(async () => {
		document.querySelector('.wrapper').addEventListener('click', function(e){ // Вешаем обработчик клика на UL, не LI
			setAdded(e.target.id); // Получили ID, т.к. в e.target содержится элемент по которому кликнули
			addTicket(e.target.id)
	  });
	} , [])
			
			//document.querySelector(".seats__item_place").addEventListener("click", handleClick)

			useEffect(async () => {

				$(document).ready(function(){
					$('.seats__item_place').click(function () {
					  var numItems2 = $('.active').length;
					  if (!$(this).hasClass("busy")) {
						  $(this).toggleClass('active');
					   var numItems = $('.active').length;
					   if (numItems == 0 || numItems2 == 0){
					   $('.description__button').toggleClass('vis');
					 }
					  }
					  
					  
					  });
					});
				} , [])

					
					useEffect(async () => {
					const token = localStorage.getItem('token')

					try {
						
						await fetch('https://luntik-ticket.herokuapp.com/api/Tickets', {
			
							method: 'get',
							headers: {
								'Accept': 'application/json',
								'Content-Type': 'application/json',
								'Authorization': 'Bearer' + token
							}
			
						})
							.then((res) => res.json())
							.then((response) => {
								setTickets(response.filter(item => item.seanceId == props.match.params.id))
								
							})
							
							
							
					}
					catch (e) {
						console.log(e)
					}


					
						
						var ticks = [];
							try {
								await fetch('https://luntik-seance.herokuapp.com/api/Seances', {
					
									method: 'get',
									headers: {
										'Accept': 'application/json',
										'Content-Type': 'application/json',
										'Authorization': 'Bearer' + token
									}
									
					
								})
									.then((res) => res.json())
									.then((response) => {
										console.log(response)
										console.log(props.match.params.id)
										setSeance(response.filter(item => item.id == props.match.params.id))
										getFilmById(seance[0].filmId)
										
										
									})
									
									
	
									
							}
							catch (e) {
								console.log(e)
							}
						
				
				} , [])


				// useEffect(async () => {
					async function addTicket(id) {
					const token = localStorage.getItem('token')
					console.log('token ' + token)
					var ticks = [];
						try {
							await fetch('https://luntik-ticket.herokuapp.com/book?Id=365&UserID=4', {
				
								method: 'put',
								headers: {
									'Accept': 'application/json',
									'Content-Type': 'application/json',
									'Authorization': 'Bearer ' + token
								}
								// body: JSON.stringify(
								// {
								// 	"id": place,
								// 	"userId": obj.id
								// })
								
				
							})
								.then((res) => res.json())
								.then((response) => {
									console.log(response)
									// console.log(props.match.params.id)
									// setTicket(response.filter(item => item.seanceId == props.match.params.id))
									
									
									//return (response.filter(item => item.id === id))	
									//получаю все сеансы данного пользователя
								})
								
								//setTickets(ticks)

								
						}
						catch (e) {
							console.log(e)
						}
					}


						async function getFilmById(id) {
							const token = localStorage.getItem('token')
							var ticks = [];
								try {
									await fetch('https://luntik-film.herokuapp.com/api/Films', {
						
										method: 'get',
										headers: {
											'Accept': 'application/json',
											'Content-Type': 'application/json',
											'Authorization': 'Bearer' + token
										}
										
						
									})
										.then((res) => res.json())
										.then((response) => {
											
											setFilm(response.filter(item => item.id == id))
											
											
											//return (response.filter(item => item.id === id))	
											//получаю все сеансы данного пользователя
										})
										
										//setTickets(ticks)
		
										
								}
								catch (e) {
									console.log(e)
								}
							}
					
					// } , [tickets])
	

				
				console.log(tickets)
				
				tickets.sort(function (a, b) {
					if (a.place > b.place) {
					  return 1;
					}
					if (a.place < b.place) {
					  return -1;
					}
					// a должно быть равным b
					return 0;
				  });
				const SIZE = 10;

				const res = tickets.reduce((p,c)=>{
				if(p[p.length-1].length == SIZE){
    								p.push([]);
  									}
  
  									p[p.length-1].push(c);
  									return p;
									}, [[]]);

									

									console.log(res);

					const bus = tickets.filter(i => i.userId !== null)


					console.log(bus)

				const handleClick = event => {
					const place = event.target.id
					if (place) {
					  addTicket(place);
					}
				}


				

			console.log(added)
			

	return (

		

		<div className="wrapper">
			
			

			<div className="seats">
				<div className="container">
					<div className="seats__logo">
						<img src="../../resources/Line 1.png" alt=""/>
					</div>
					
					<div className="seats__items">
					{tickets[0] &&
					<div>
					{res.map((item, index) =>
					
					<div className="seats__item">
						
						<div className="seats__item__number_start">
							{item[index].place.slice(4, 6)}
						</div>
						<div className="seats__item__places">
						{item.map((it) => (
							bus.indexOf(it) != -1 ? (
							<div className='seats__item_place busy' id={it}>

							
							{(Number.parseInt(it.place.slice(4, 7)) - 1) * 10 + Number.parseInt(it.place.slice(11, 14))}
							
							
						</div>) : ( <div className='seats__item_place' id={it}>

						{(Number.parseInt(it.place.slice(4, 7)) - 1) * 10 + Number.parseInt(it.place.slice(11, 14))}
						</div>) 
						) 
						) 
						}
						</div>
						<div className="seats__item__number_end">
							{item[index].place.slice(4, 6)}
						</div>
						 </div>
						)}
						
						
						
						</div>
						
					}
					</div>
						
				

				 
				
				{seance.map((item =>	  
					<div>
				<div className="seats__description">
					
					<div className="description__place">
						{item.name} Зал 1 место - 500р  
						
					</div>
					<div className="description__statuses">
						<div className="description__status">	
						<div className="description__status_logo">
							<img src={ellipse} alt=""/>
						</div>

						<div className="description__status_text">
							Свободно
						</div>
					</div>
					<div className="description__status">	
						<div className="description__status_logo">
							<img src={ellipse} className="busy" alt=""/>
						</div>

						<div className="description__status_text">
							Занято
						</div>
					</div>

					</div>
					</div>
				
				<button className="description__button">Забронировать</button>
				</div>
				 ))} 
			
			</div>
			</div>
			
		</div>
		

		

		
	)
}
