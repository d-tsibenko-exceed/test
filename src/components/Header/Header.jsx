import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import PersonIcon from '@material-ui/icons/Person';
import {Link} from "react-router-dom";


const Header = () => {

    const categories = ['Главная', 'Фильмы','Сериалы','Мультфильмы','TV','Спорт']
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__left_side">
                    <div className="titles__left_side">
                        <div className="logo">logo</div>
                        <Link to="/">
                            <li className="title">Главная</li>
                        </Link>
                        <li className="title">Фильмы</li>
                        <li className="title">Сериалы</li>
                        <li className="title">Мультфильмы</li>
                        <li className="title">TV</li>
                        <li className="title">Спорт</li>
                    </div>
                </div>
                <div className="header__right_side">
                    <div className="titles__right_side">
                        <li style={{color: "#fff"}} className="icon"><SearchIcon/>Search</li>
                        <li className="icon"><NotificationsNoneIcon /></li>
                        <li className="icon"><PersonIcon/></li>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;