import React from "react";

import './index.css'
import film from '../../resources/300x450.jpg'
import Header from '../../pages/header/Header'
import {useDispatch, useSelector} from "react-redux";
import { authenticate } from "../../store/actions/userActions";

function MainPage() {
    
    const dispatch = useDispatch();

    return (
        <div className="wrapper">
         
         <div className="header">
        <Header/>
        </div>

        
        
        <div className="slider">
            
        </div>

        
        
        <div className="films">
        <div className="container">
        
                <div className="films__header" onClick={() => dispatch(authenticate("sasha@mail.ru","123456"))}>
                    Сегодня в кино:
                </div>
                
                <input type="text" className="films__search" placeholder="Поиск..."/>

                <div className="films__items">
                    
                    <div className="films__items_left">
                        <div className="films__item films__item_start">
                            <div className="films__item_img_start">
                                <img src={film} alt=""/>
                            </div>
                            <div className="film__item_title start">
                                Смешарики и друзья в кино. Выпуск 2  Eveniet, nulla perspiciatis? Ratione beatae repellendus quisquam dolore labore ex quas? Voluptas, quibusdam dolor laborum quis molestias quisquam amet hic nisi! Veniam.
                            </div>
                            <div className="film__item_type">
                                Анимация, Приключения
                            </div>
                        </div>

                        <div className="films__item">
                            <div className="films__item_img">
                                <img src={film} alt=""/>
                            </div>
                            <div className="film__item_title">
                                Смешарики и друзья в кино. Выпуск 2
                            </div>
                            <div className="film__item_type">
                                Анимация, Приключения
                            </div>
                        </div>
                        <div className="films__item">
                            <div className="films__item_img">
                                <img src={film} alt=""/>
                            </div>
                            <div className="film__item_title">
                                Смешарики и друзья в кино. Выпуск 2
                            </div>
                            <div className="film__item_type">
                                Анимация, Приключения
                            </div>
                        </div>
                        <div className="films__item">
                            <div className="films__item_img">
                                <img src={film} alt=""/>
                            </div>
                            <div className="film__item_title">
                                Смешарики и друзья в кино. Выпуск 2
                            </div>
                            <div className="film__item_type">
                                Анимация, Приключения
                            </div>
                        </div>
                        <div className="films__item">
                            <div className="films__item_img">
                                <img src={film} alt=""/>
                            </div>
                            <div className="film__item_title">
                                Смешарики и друзья в кино. Выпуск 2
                            </div>
                            <div className="film__item_type">
                                Анимация, Приключения
                            </div>
                        </div>
                    </div>
                    <div className="films__items_right">
                        <div className="films__item">
                            <div className="films__item_img">
                                <img src={film} alt=""/>
                            </div>
                            <div className="film__item_title">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit obcaecati architecto dolores, labore atque omnis praesentium recusandae modi quasi. Ipsam veritatis laudantium illum nemo sunt ipsum quaerat dolor ex modi.
                            </div>
                            <div className="film__item_type">
                                Анимация, Приключения
                            </div>
                        </div>

                        <div className="films__item">
                            <div className="films__item_img">
                                <img src={film} alt=""/>
                            </div>
                            <div className="film__item_title">
                                Смешарики и друзья в кино. Выпуск 2
                            </div>
                            <div className="film__item_type">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatum et, quae voluptatem enim animi ipsam ullam nisi omnis odit similique molestiae corporis, mollitia soluta dolores consectetur, eveniet eligendi. Suscipit.
                            </div>
                        </div>

                        <div className="films__item">
                            <div className="films__item_img">
                                <img src={film} alt=""/>
                            </div>
                            <div className="film__item_title">
                                Смешарики и друзья в кино. Выпуск 2
                            </div>
                            <div className="film__item_type">
                                Анимация, Приключения
                            </div>
                        </div>

                        <div className="films__item">
                            <div className="films__item_img">
                                <img src={film} alt=""/>
                            </div>
                            <div className="film__item_title">
                                Смешарики и друзья в кино. Выпуск 2
                            </div>
                            <div className="film__item_type">
                                Анимация, Приключения
                            </div>
                        </div>

                        <div className="films__item">
                            <div className="films__item_img">
                                <img src={film} alt=""/>
                            </div>
                            <div className="film__item_title">
                                Смешарики и друзья в кино. Выпуск 2
                            </div>
                            <div className="film__item_type">
                                Анимация, Приключения
                            </div>
                        </div>

                        <div className="films__item">
                            <div className="films__item_img">
                                <img src={film} alt=""/>
                            </div>
                            <div className="film__item_title">
                                Смешарики и друзья в кино. Выпуск 2
                            </div>
                            <div className="film__item_type">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptatem cum sequi quisquam facere repudiandae reprehenderit maxime consequuntur impedit possimus incidunt, laborum enim placeat amet ullam voluptate asperiores consectetur numquam?
                            </div>
                        </div>

                        <div className="films__item">
                            <div className="films__item_img">
                                <img src={film} alt=""/>
                            </div>
                            <div className="film__item_title">
                                Смешарики и друзья в кино. Выпуск 2
                            </div>
                            <div className="film__item_type">
                                Анимация, Приключения
                            </div>
                        </div>

                        <div className="films__item">
                            <div className="films__item_img">
                                <img src={film} alt=""/>
                            </div>
                            <div className="film__item_title">
                                Смешарики и друзья в кино. Выпуск 2
                            </div>
                            <div className="film__item_type">
                                Анимация, Приключения
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        
        
        </div>

        
    </div>
    )
}

export default MainPage;