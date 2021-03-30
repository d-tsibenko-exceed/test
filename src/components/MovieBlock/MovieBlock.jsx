import React, { useState } from "react"
import "./MovieBlock.css"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import MovieCard from "../MovieCard/MovieCard"
import AddMoviePopup from "../AddMoviePopup/AddMoviePopup"
import db from "../../db.json"
import EditMoviePopup from "../EditMoviePopup/EditMoviePopup"

const MovieBlock = () => {
  const [movieId, setMovieId] = useState(null)
  const [togglePopup, setTogglePopup] = useState(false)
  const [title, setTitle] = useState("")

  const [cardList, setCardList] = useState(db.posts)
  const showPopup = (id) => {
    setTogglePopup(!togglePopup)
    setMovieId(id)
  }

  const categories = [
    "Рекомендуем вам посмотреть",
    "Фильмы, основанные на реальных событиях",
    "Мультфильмы для всех возрастов",
    "Самое интересное",
    "Популярные сериалы",
    "Остросюжетные фильмы",
    "Лучшее семейное кино",
    "Романтические комедии",
  ]

  const useStyles = makeStyles(() => ({
    root: {
      width: "100%",
    },
    title: {
      color: "#fff",
      fontWeight: 600,
    },
  }))

  const [currentCard, setCurrentCard] = useState(null)

  const dragStartHandler = (e, card) => {
    setCurrentCard(card)
  }

  const dragOverHandler = (e) => {
    e.preventDefault()
  }

  const dropHandler = (e, card) => {
    e.preventDefault()
    setCardList(
      cardList.map((c) => {
        if (c.id === card.id) {
          return { ...c, order: currentCard.order }
        }
        if (c.id === currentCard.id) {
          return { ...c, order: card.order }
        }
        return c
      })
    )
  }

  const sortCards = (a, b) => {
    if (a.order > b.order) {
      return 1
    }
    return -1
  }

  const classes = useStyles()
  return (
    <div>
      {togglePopup && <EditMoviePopup title={title} movieId={movieId} />}
      <div className="movie__block">
        <AddMoviePopup title={title} setTitle={setTitle} />

        {categories.map((item) => (
          <div>
            <div className={classes.root}>
              <p className={classes.title}>{item}</p>
            </div>
            <Grid container spacing={3}>
              {cardList.sort(sortCards).map((card) => (
                <Grid item>
                  <div
                    draggable
                    onDragStart={(e) => dragStartHandler(e, card)}
                    onDragOver={(e) => dragOverHandler(e)}
                    onDrop={(e) => dropHandler(e, card)}
                  >
                    <MovieCard
                      image={card.img}
                      title={card.title}
                      id={card.id}
                      togglePopup={togglePopup}
                      setTogglePopup={setTogglePopup}
                      showPopup={showPopup}
                    />
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieBlock
