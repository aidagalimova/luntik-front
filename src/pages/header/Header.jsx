import React from 'react'
import './header.css'
import logo from '../../resources/logo.png'

export default function Header() {
	return (
		
				<div className="header__items">
					<div className="header__logo">
						<a href=""><img src={logo}alt=""/></a> 
					</div>
					<div className="header__name">
						<div className="tarantino">Тарантиновский</div><div className="luntik">ЛУНТИК</div> 
					</div>
					<div className="header__cabinet">
						<a className="header__cabinet_logo"></a>
						<a className="header__cabinet_text" href="">Личный кабинет</a>
					</div>		
					</div>
		
	)
}
