import {React, useState, useEffect} from "react";
import './index.css'
import film from '../../resources/300x450.jpg'
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "../../store/actions/userActions";
import { searchFilmByCategory } from "../../store/actions/filmActions";
import Search from "../../components/search";
import { setFilm } from "../../store/reducers/filmReducer";

function MainPage() {

    const dispatch = useDispatch();
    const [films, setFilms] = useState([])

    //здесь получаем все фильмы какой то категории
    dispatch(() => searchFilmByCategory())
    

    
        useEffect(async () => {
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
                            console.log(response)
                            setFilms(response)
                            
                            
                            //return (response.filter(item => item.id === id))	
                            //получаю все сеансы данного пользователя
                        })
                        
                        
                        
                }
                catch (e) {
                    console.log(e)
                }
            
            } , [])

    
    
    //далее надо будет искать по названию, отслеживать изменения в инпуте
    

    return (
        
            <div className="wrapper">
                <div className="films">
                    <div className="container">

                        <div className="films__header">
                            Сегодня в кино:
                        </div>

                        <Search />

                        <div className="films__items">
                             
                            
                            <div className="films__items_left">
                            {films[0] &&
                                <div className="films__item films__item_start">
                                     
                                    <div className="films__item_img_start">
                                        <img src={films[0].poster} alt="" />
                                    </div>
                                    <div className="film__item_title start">
                                        {films[0].name}
                                    </div>
                                    <div className="film__item_type">
                                        {films[0].category}
                                    </div>
                                </div>
                            }

                            </div>
                            {films.map((item, index) => (index < films.length) ? (
                                <div>
                                <div className="films__items_right">
                                <div className="films__item">
                                    <div className="films__item_img">
                                        <img src={item.poster} alt="" />
                                    </div>
                                    <div className="film__item_title">
                                       {item.name}
                                    </div>
                                    <div className="film__item_type">
                                       {item.category}
                                    </div>
                                </div>
                                </div>
                                </div>
                                
                               
                              
                            ) : <div>nothing</div>)} 
                            
                             {/* <div className="films__items_left">
                                <div className="films__item">
                                    <div className="films__item_img">
                                        <img src={item.poster} alt="" />
                                    </div>
                                    <div className="film__item_title">
                                        {item.name}
                                    </div>
                                    <div className="film__item_type">
                                        {item.category}
                                    </div>
                                </div>
                                
                               
                            <div/>
                            </div> 
                             */}
                            
                            
                            
                            
                            
                        
                    </div>
                        
                        
                   </div>
                   </div> 
                    </div>
                    



                


            
        
    )
}

export default MainPage;