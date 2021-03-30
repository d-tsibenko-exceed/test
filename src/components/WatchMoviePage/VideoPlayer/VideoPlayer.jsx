import React, { useRef } from "react"

import "./VideoPlayer.css"

const VideoPlayer = () => {
  const video = useRef()
  const time = useRef()
  const videoTrack = useRef()

  const startVideo = () => {
    video.current.play()
  }
  const stopVideo = () => {
    video.current.pause()
  }

  const rewindVideo = () => {
    video.current.currentTime -= 5
  }

  const forwardVideo = () => {
    video.current.currentTime -= 5
  }

  const track = (e) => {
    const posX = e.clientX - 8
    const timePos = (posX * 100) / 1000
    time.current.style.width = `${timePos}%`
    video.current.currentTime =
      (timePos * Math.round(video.current.duration)) / 100
  }

  return (
    <div className="video__container">
      <video
        id="video"
        src="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4"
        ref={video}
      >
        <track kind="captions" />
      </video>
      <div className="controls">
        <div
          className="video-track"
          ref={videoTrack}
          onClick={(e) => track(e)}
          onKeyPress={() => {}}
          role="button"
          tabIndex={0}
        >
          <div className="timeline" ref={time} />
        </div>
        <div className="buttons">
          <button type="submit" className="play" onClick={startVideo}>
            Play
          </button>
          <button type="submit" className="pause" onClick={stopVideo}>
            Pause
          </button>
          <button type="submit" className="rewind" onClick={rewindVideo}>
            &#60; rewind
          </button>
          <button type="submit" className="forward" onClick={forwardVideo}>
            forward&#62;
          </button>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer
