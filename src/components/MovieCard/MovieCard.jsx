/* eslint-disable no-alert */
/* eslint-disable no-bitwise */
/* eslint-disable react/prop-types */
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import "./MovieCard.css"
import axios from "axios"
import { Link } from "react-router-dom"

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 160,
    minHeight: 245,
  },
  media: {
    minWidth: 160,
    minHeight: 245,
  },
  titleBlock: {
    width: "100%",
  },
  title: {
    color: "#fff",
  },
}))

const MovieCard = ({ image, title, id, showPopup }) => {
  const classes = useStyles()
  const deleteItem = () => {
    axios.delete(`http://localhost:3001/posts/${id}`)
  }

  return (
    <div className={classes.root}>
      <Card>
        <div>
          <button type="submit" onClick={() => showPopup(id)}>
            edit
          </button>
          <button
            type="submit"
            onClick={() =>
              deleteItem(id) &
              setTimeout(() => alert(`Файл ${title} удалён!`), 1000)
            }
          >
            delete
          </button>
        </div>
        <Link to={`/movies/${title}`}>
          <CardMedia
            className={classes.media}
            image={image}
            title="Paella dish"
            draggable
          />
        </Link>
      </Card>
      <div>
        <p className={classes.title}>{title}</p>
      </div>
    </div>
  )
}

export default MovieCard
