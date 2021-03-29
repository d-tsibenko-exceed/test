import React, {useState} from 'react';
import MovieCard from "../MovieCard/MovieCard";
import './MovieBlock.css';
import {Button, Grid, Paper, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import AddMoviePopup from "../AddMoviePopup/AddMoviePopup";
import db from '../../db.json';
import EditMoviePopup from "../EditMoviePopup/EditMoviePopup";


const MovieBlock = () => {
    const [movieId, setMovieId] = useState(null)

    const [togglePopup, setTogglePopup] = useState(true)

    const showPopup = () => {
        setTogglePopup(togglePopup)
    }


    console.log(db.posts)
    const title = ['Рекомендуем вам посмотреть', 'Фильмы, основанные на реальных событиях',
        'Мультфильмы для всех возрастов',
        'Самое интересное',
        'Популярные сериалы',
        'Остросюжетные фильмы',
        'Лучшее семейное кино',
        'Романтические комедии']

    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
        },
        title: {
            color: '#fff',
            fontWeight: 600
        },
    }));

    const classes = useStyles();
    return (
        <div>

            <div className="movie__block">
                <AddMoviePopup />
                {togglePopup && <EditMoviePopup/>}

                {title.map(item => {
                    return <div>
                        <div className={classes.root}>
                            <p className={classes.title}>{item}</p>
                        </div>
                        <Grid container spacing={3}>
                            {db.posts.map(card =>
                                <Grid item>
                                    <div>
                                        <MovieCard
                                            image={card.img}
                                            title={card.title}
                                            id={card.id}
                                        />
                                    </div>
                                </Grid>
                            )}



                        </Grid>

                    </div>
                })}
                }
            </div>
        </div>

    )
}

export default MovieBlock;