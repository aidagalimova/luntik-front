import {React, useEffect} from 'react'
import Header from '../header/Header'
import './cinema_hall.css'
import $ from 'jquery'
import ellipse from '../../resources/Ellipse.png'

export default function Cinema_hall() {

	useEffect(() => {
			
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
	
		
		 
				
			}, []);

	return (
		<div className="wrapper2">
			<div className="seats">
				<div className="container">
					<div className="seats__logo">
						<img src="../../resources/Line 1.png" alt=""/>
					</div>

				<div className="seats__items">
					<div className="seats__item">
						<div className="seats__item__number_start">
							1
						</div>
						<div className="seats__item__places">
						<div className="seats__item_place">
							1
						</div>
						<div className="seats__item_place">
							2
						</div>
						<div className="seats__item_place busy">
							3
						</div>
						<div className="seats__item_place">
							4
						</div>
						<div className="seats__item_place">
							5
						</div>
						<div className="seats__item_place">
							6
						</div>
						<div className="seats__item_place">
							7
						</div>
						<div className="seats__item_place">
							8
						</div>
						<div className="seats__item_place">
							9
						</div>
						<div className="seats__item_place">
							10
						</div>
					</div>
						<div className="seats__item__number_end">
							1
						</div>
					</div>
					<div className="seats__item">
						<div className="seats__item__number_start">
							2
						</div>
						<div className="seats__item__places">
						<div className="seats__item_place">
							1
						</div>
						<div className="seats__item_place">
							2
						</div>
						<div className="seats__item_place busy">
							3
						</div>
						<div className="seats__item_place">
							4
						</div>
						<div className="seats__item_place">
							5
						</div>
						<div className="seats__item_place">
							6
						</div>
						<div className="seats__item_place">
							7
						</div>
						<div className="seats__item_place">
							8
						</div>
						<div className="seats__item_place">
							9
						</div>
						<div className="seats__item_place">
							10
						</div>
					</div>
						<div className="seats__item__number_end">
							2
						</div>
					</div>
					<div className="seats__item">
						<div className="seats__item__number_start">
							3
						</div>
						<div className="seats__item__places">
						<div className="seats__item_place">
							1
						</div>
						<div className="seats__item_place">
							2
						</div>
						<div className="seats__item_place busy">
							3
						</div>
						<div className="seats__item_place">
							4
						</div>
						<div className="seats__item_place">
							5
						</div>
						<div className="seats__item_place">
							6
						</div>
						<div className="seats__item_place">
							7
						</div>
						<div className="seats__item_place">
							8
						</div>
						<div className="seats__item_place">
							9
						</div>
						<div className="seats__item_place">
							10
						</div>
					</div>
						<div className="seats__item__number_end">
							3
						</div>
					</div>
					<div className="seats__item">
						<div className="seats__item__number_start">
							4
						</div>
						<div className="seats__item__places">
						<div className="seats__item_place">
							1
						</div>
						<div className="seats__item_place">
							2
						</div>
						<div className="seats__item_place busy">
							3
						</div>
						<div className="seats__item_place">
							4
						</div>
						<div className="seats__item_place">
							5
						</div>
						<div className="seats__item_place">
							6
						</div>
						<div className="seats__item_place">
							7
						</div>
						<div className="seats__item_place">
							8
						</div>
						<div className="seats__item_place">
							9
						</div>
						<div className="seats__item_place">
							10
						</div>
					</div>
						<div className="seats__item__number_end">
							4
						</div>
					</div>
					<div className="seats__item">
						<div className="seats__item__number_start">
							5
						</div>
						<div className="seats__item__places">
						<div className="seats__item_place">
							1
						</div>
						<div className="seats__item_place">
							2
						</div>
						<div className="seats__item_place busy">
							3
						</div>
						<div className="seats__item_place">
							4
						</div>
						<div className="seats__item_place">
							5
						</div>
						<div className="seats__item_place">
							6
						</div>
						<div className="seats__item_place">
							7
						</div>
						<div className="seats__item_place">
							8
						</div>
						<div className="seats__item_place">
							9
						</div>
						<div className="seats__item_place">
							10
						</div>
					</div>
						<div className="seats__item__number_end">
							5
						</div>
					</div>
					<div className="seats__item">
						<div className="seats__item__number_start">
							6
						</div>
						<div className="seats__item__places">
						<div className="seats__item_place">
							1
						</div>
						<div className="seats__item_place">
							2
						</div>
						<div className="seats__item_place busy">
							3
						</div>
						<div className="seats__item_place">
							4
						</div>
						<div className="seats__item_place">
							5
						</div>
						<div className="seats__item_place">
							6
						</div>
						<div className="seats__item_place">
							7
						</div>
						<div className="seats__item_place">
							8
						</div>
						<div className="seats__item_place">
							9
						</div>
						<div className="seats__item_place">
							10
						</div>
					</div>
						<div className="seats__item__number_end">
							6
						</div>
					</div>
					<div className="seats__item">
						<div className="seats__item__number_start">
							7
						</div>
						<div className="seats__item__places">
						<div className="seats__item_place">
							1
						</div>
						<div className="seats__item_place">
							2
						</div>
						<div className="seats__item_place busy">
							3
						</div>
						<div className="seats__item_place">
							4
						</div>
						<div className="seats__item_place">
							5
						</div>
						<div className="seats__item_place">
							6
						</div>
						<div className="seats__item_place">
							7
						</div>
						<div className="seats__item_place">
							8
						</div>
						<div className="seats__item_place">
							9
						</div>
						<div className="seats__item_place">
							10
						</div>
					</div>
						<div className="seats__item__number_end">
							7
						</div>
					</div>
					<div className="seats__item">
						<div className="seats__item__number_start">
							8
						</div>
						<div className="seats__item__places">
						<div className="seats__item_place">
							1
						</div>
						<div className="seats__item_place">
							2
						</div>
						<div className="seats__item_place busy">
							3
						</div>
						<div className="seats__item_place">
							4
						</div>
						<div className="seats__item_place">
							5
						</div>
						<div className="seats__item_place">
							6
						</div>
						<div className="seats__item_place">
							7
						</div>
						<div className="seats__item_place">
							8
						</div>
						<div className="seats__item_place">
							9
						</div>
						<div className="seats__item_place">
							10
						</div>
					</div>
						<div className="seats__item__number_end">
							8
						</div>
					</div>
					<div className="seats__item">
						<div className="seats__item__number_start">
							9
						</div>
						<div className="seats__item__places">
						<div className="seats__item_place">
							1
						</div>
						<div className="seats__item_place">
							2
						</div>
						<div className="seats__item_place busy">
							3
						</div>
						<div className="seats__item_place">
							4
						</div>
						<div className="seats__item_place">
							5
						</div>
						<div className="seats__item_place">
							6
						</div>
						<div className="seats__item_place">
							7
						</div>
						<div className="seats__item_place">
							8
						</div>
						<div className="seats__item_place">
							9
						</div>
						<div className="seats__item_place">
							10
						</div>
					</div>
						<div className="seats__item__number_end">
							9
						</div>
					</div>
					<div className="seats__item">
						<div className="seats__item__number_start">
							10
						</div>
						<div className="seats__item__places">
						<div className="seats__item_place">
							1
						</div>
						<div className="seats__item_place">
							2
						</div>
						<div className="seats__item_place busy">
							3
						</div>
						<div className="seats__item_place">
							4
						</div>
						<div className="seats__item_place busy">
							5
						</div>
						<div className="seats__item_place">
							6
						</div>
						<div className="seats__item_place">
							7
						</div>
						<div className="seats__item_place">
							8
						</div>
						<div className="seats__item_place">
							9
						</div>
						<div className="seats__item_place">
							10
						</div>
					</div>
						<div className="seats__item__number_end">
							10
						</div>
					</div>
				</div>
					
				<div className="seats__description">
					<div className="description__place">
						???????? 14:00 ?????? 1 ?????????? - 200??
					</div>
					<div className="description__statuses">
						<div className="description__status">	
						<div className="description__status_logo">
							<img src={ellipse} alt=""/>
						</div>

						<div className="description__status_text">
							????????????????
						</div>
					</div>
					<div className="description__status">	
						<div className="description__status_logo">
							<img src={ellipse} className="busy" alt=""/>
						</div>

						<div className="description__status_text">
							????????????
						</div>
					</div>

					</div>
				
				<button className="description__button">??????????????????????????</button>
			</div>
			</div>

			
		</div>

		

		</div>
	)
}
