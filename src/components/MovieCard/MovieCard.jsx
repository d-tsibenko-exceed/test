import React, {useRef, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import './MovieCard.css';
import {CardHeader, IconButton, Typography} from "@material-ui/core";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import axios from "axios";
import EditMoviePopup from "../EditMoviePopup/EditMoviePopup";
import {Link} from "react-router-dom";
import {Redirect, Route, Switch} from "react-router";
import WatchMoviePage from "../WatchMoviePage/WatchMoviePage";


const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 160,
        minHeight: 245,
    },
    media: {
        minWidth: 160,
        minHeight: 245,

    },
    titleBlock: {
        width: '100%',
    },
    title: {
        color: '#fff',
    },


}));

const MovieCard = ({ image, title, id , togglePopup, setTogglePopup, showPopup}) => {
    const classes = useStyles();
    const deleteItem = (id) => {
        axios.delete(`http://localhost:3001/posts/${id}`)
    }

    return (
        <div className={classes.root}>
            <Card>
                <div>
                    <button onClick={() => showPopup(id)}>edit</button>
                    <button onClick={() => deleteItem(id) & setTimeout(() => alert(`Файл ${title} удалён!`), 1000)}>delete</button>
                </div>
                <Link to={`/movies/${title}`}>
                    <CardMedia
                        className={classes.media}
                        image={image}
                        title="Paella dish"
                        draggable={true}

                    />
                </Link>

                <Switch>
                    <Route path="/movies/:id" children={<WatchMoviePage />} />
                </Switch>
            </Card>
            <div>
                <p className={classes.title}>{title}</p>
            </div>
        </div>
    )
}

export default MovieCard;