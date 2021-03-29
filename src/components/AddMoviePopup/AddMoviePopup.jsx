import React, {useEffect, useState} from 'react';
import './AddMoviePopup.css';
import {Button, makeStyles, Modal, TextField} from "@material-ui/core";
import axios from "axios";

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: 450,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    input: {

    }
}));

const AddMoviePopup = ({ title, setTitle }) => {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const [img, setImg] = useState('')

    const imageHandler = (e) => {
        e.preventDefault()
        const reader = new FileReader();
        reader.onload = () =>{
            if(reader.readyState === 2){
                setImg(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    };


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function inputTitleHandler(e) {
        setTitle(e.target.value)
        console.log(title.length)
    }

    const addItem = (e) => {
        e.preventDefault()
        if (title.length > 0) {
            axios.post('http://localhost:3001/posts', {
                id: Date.now(),
                title: title,
                author: "typicode",
                img: img
            })
        } else {
            alert('Введите что-нибудь')
        }
    }


    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                +
            </Button>

            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <div className="input">
                        название фильма
                        <form>
                            <TextField value={title} type="text" onChange={(e) => inputTitleHandler(e)} />
                        </form>
                    </div>
                    <div className="input">
                        изображение
                        <form>
                            <TextField type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler}  />
                            <button onClick={(e) => addItem(e) & setTimeout(() => alert(`Файл ${title} добавлен!`), 1000)}>submit</button>
                        </form>
                    </div>



                </div>
            </Modal>
        </div>
    );

}

export default AddMoviePopup;