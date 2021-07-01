import React from 'react'
import './header.css'
import logo from '../../resources/logo.png'
import SignWindow from '../../components/sign-window'
import { Link } from 'react-router-dom';


export default function Header() {
	const isAuth = !!localStorage.getItem('token');
	console.log(isAuth);
	return (

		<div className="header__items">
			<div className="header__logo">
				<a href="/"><img src={logo} alt="" /></a>
			</div>
			<div className="header__name">
				<div className="tarantino">Тарантиновский</div><div className="luntik">ЛУНТИК</div>
			</div>
			<div className="header__cabinet">
				<a className="header__cabinet_logo"></a>

				<div className="header__cabinet_text" >
					{!isAuth ? <SignWindow /> :
						<h1 className="lk-text"><a href='/profile' className="lk-text">Личный кабинет</a></h1>
					}
				</div>
			</div>
		</div>

	)
}
