import React, {useState} from 'react';
import {Button, makeStyles, Modal, TextField} from "@material-ui/core";

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

const EditMoviePopup = () => {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);

    return (
        <div>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    Edit
                    <div className="input">
                        название фильма
                        <form>
                            <TextField type="text" />
                        </form>
                    </div>
                    <div className="input">
                        изображение
                        <form>
                            <TextField type="file" accept="image/*" name="image-upload" id="input"  />
                            <button>submit</button>
                        </form>
                    </div>



                </div>
            </Modal>
        </div>
    )
}

export default EditMoviePopup;