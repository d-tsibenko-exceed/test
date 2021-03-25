import React, {useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import './MovieCard.css';
import {CardHeader, IconButton, Typography} from "@material-ui/core";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';


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

const MovieCard = ({ name }) => {
    const exitBtn = useRef(null)
    const onButtonClick = () => {
        alert('clicked')
    }
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Card>
                <CardHeader
                action={
                    <IconButton aria-label="close">
                        <HighlightOffIcon onClick={() => onButtonClick()} ref={exitBtn}  />
                    </IconButton>
                }
                />
                <CardMedia
                    className={classes.media}
                    image="https://cdn.wallpapersafari.com/63/4/74KiN5.jpg"
                    title="Paella dish"
                />
            </Card>
            <div>
                <p className={classes.title}>{name.name}</p>
            </div>
        </div>
    )
}

export default MovieCard;