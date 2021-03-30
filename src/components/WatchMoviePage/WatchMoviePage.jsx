import React from "react"
import "./WatchMoviePage.css"
import { useParams } from "react-router"
import VideoPlayer from "./VideoPlayer/VideoPlayer"

const WatchMoviePage = () => {
  const { id } = useParams()
  // eslint-disable-next-line no-unused-vars

  return (
    <div className="movie__page">
      <div className="movie__page_container">
        <div className="movie__page_title">
          Сериал
          {id} смотреть онлайн
        </div>
        <div className="movie__page_description">
          2020-2021, Россия, Драмы, Исторические, Русские 1 сезон, новые серии
          завтра Актёры:
        </div>
        <div className="movie__page_playerBlock">
          <VideoPlayer />
          <div className="movie__page_player" />
        </div>
      </div>
    </div>
  )
}

export default WatchMoviePage
