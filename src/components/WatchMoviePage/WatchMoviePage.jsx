import React from 'react';
import './WatchMoviePage.css';
import ReactPlayer from 'react-player'

const WatchMoviePage = () => {
    return (
        <div className="movie__page">
            <div className="movie__page_container">
                <div className="movie__page_title">Сериал name смотреть онлайн</div>
                <div className="movie__page_description">
                    2020-2021, Россия, Драмы, Исторические, Русские
                    1 сезон,
                    новые серии завтра
                    Актёры:

                </div>

                <div className="movie__page_playerBlock">
                    <div className="movie__page_player">

                    </div>
                </div>
            </div>

        </div>
    )
}

export default WatchMoviePage;