import React, {useState} from 'react';
import MovieCard from "../MovieCard/MovieCard";
import './MovieBlock.css';
import {Button, Grid, Paper, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import AddMoviePopup from "../AddMoviePopup/AddMoviePopup";
import db from '../../db.json';
import EditMoviePopup from "../EditMoviePopup/EditMoviePopup";



const MovieBlock = () => {
    const [movieId, setMovieId] = useState(null)
    const [togglePopup, setTogglePopup] = useState(false)
    const [title, setTitle] = useState('')


    const showPopup = (id) => {
        setTogglePopup(!togglePopup)
        setMovieId(id)
    }


    const categories = ['Рекомендуем вам посмотреть', 'Фильмы, основанные на реальных событиях',
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

            {togglePopup && <EditMoviePopup
                title={title}
                movieId={movieId} />}
            <div className="movie__block">
                <AddMoviePopup
                    title={title}
                    setTitle={setTitle}
                />


                {categories.map(item => {
                    return <div>
                        <div className={classes.root}>
                            <p className={classes.title}>{item}</p>
                        </div>
                        <Grid container spacing={3}>
                            {db.posts.map(card =>
                                <Grid item>
                                    <div
                                    draggable={true}>
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