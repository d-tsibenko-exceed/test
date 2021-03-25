import React from 'react'
import Carousel from 'react-material-ui-carousel';
import {Button, Grid, Paper} from "@material-ui/core";
import './Carousel.css'


const Slider = () => {

    const items = [
        {img: "https://thumbs.dfs.ivi.ru/storage4/contents/5/a/7b42818a246239b38f1441e9b10341.jpg/1600x370/"},
        {img: "https://thumbs.dfs.ivi.ru/storage23/contents/4/f/d6217fe82408576295a306915f4a5f.jpg/1600x370/"}
    ]

    return (
        <Grid justify={"center"} container>
            <Grid item lg={10} md={10}>
                <Carousel className="carousel">
                    {
                        items.map( (item, i) => <Item key={i} item={item} /> )
                    }
                </Carousel>
            </Grid>
        </Grid>

    )
}

function Item(props)
{
    return (
        <Grid item lg={12}>
            <Paper>
                <img className="carousel__img" src={props.item.img} alt="poster"/>
            </Paper>
        </Grid>
    )
}

export default Slider;