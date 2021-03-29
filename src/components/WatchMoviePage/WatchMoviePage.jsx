import React from 'react';
import './WatchMoviePage.css';
import ReactPlayer from 'react-player'
import {useParams} from "react-router";

const WatchMoviePage = () => {
    let { id } = useParams();

    console.log(id)
    return (
        <div className="movie__page">
            <div className="movie__page_container">
                <div className="movie__page_title">Сериал {id} смотреть онлайн</div>
                <div className="movie__page_description">
                    2020-2021, Россия, Драмы, Исторические, Русские
                    1 сезон,
                    новые серии завтра
                    Актёры:

                </div>

                <div className="movie__page_playerBlock">
                    <div className="movie__page_player">
                        <ReactPlayer url="https://www.youtube.com/watch?v=5qap5aO4i9A"/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WatchMoviePage;