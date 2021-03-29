import React, {useRef, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import './MovieCard.css';
import {CardHeader, IconButton, Typography} from "@material-ui/core";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import axios from "axios";
import EditMoviePopup from "../EditMoviePopup/EditMoviePopup";


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

const MovieCard = ({ image, title, id }) => {
    const classes = useStyles();
    const deleteItem = (id) => {
        axios.delete(`http://localhost:3001/posts/${id}`)
    }

    return (
        <div className={classes.root}>
            <Card>
                <div>
                    <button>edit</button>
                    <button onClick={() => deleteItem(id)}>delete</button>
                </div>
                <CardMedia
                    className={classes.media}
                    image={image}
                    title="Paella dish"
                />
            </Card>
            <div>
                <p className={classes.title}>{title}</p>
            </div>
        </div>
    )
}

export default MovieCard;