import React, {useState} from 'react';
import MovieCard from "../MovieCard/MovieCard";
import './MovieBlock.css';
import {Button, Grid, Paper, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";


const MovieBlock = () => {
    const [popup, setPopup] = useState(false);
    const addMoviePopup = () => {
        setPopup(!popup)
    }
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies.movies)
    console.log(movies)

    const addMovie = (name) => {
        const movie = {
            name,
            id: Date.now()
        }
        dispatch({
            type: 'ADD_MOVIE',
            payload: movie
        })
    }

    const removeMovie = (movie) => {
        dispatch({
            type: 'REMOVE_MOVIE',
            payload: movie.id
        })
    }

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
        <div className="movie__block">
                {title.map(item => {
                    return <div>
                        <div className={classes.root}>
                            <p className={classes.title}>{item}</p>
                            <Button onClick={() => addMovie(prompt())} variant="contained">+</Button>


                        </div>
                        <Grid container spacing={3}>
                            {movies.length > 0
                                ? movies.map(movie => {
                                    return <Grid item >
                                        <div>
                                            <Link to="/movies">
                                                <MovieCard name={movie} />
                                            </Link>
                                        </div>

                                    </Grid>

                                })
                                : 'Nothing here'
                            }

                        </Grid>

                    </div>
                })}
            }
        </div>
    )
}

export default MovieBlock;