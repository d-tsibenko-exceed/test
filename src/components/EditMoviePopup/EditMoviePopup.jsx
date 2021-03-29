import React, {useState} from 'react';
import './EditMoviePopup.css'
import axios from "axios";

const EditMoviePopup = ({ movieId, title }) => {
    const [editTitle, setEditTitle] = useState('')
    const [editImg, setEditImg] = useState('')
    console.log(title)
    const editImageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () =>{
            if(reader.readyState === 2){
                setEditImg(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    const inputEditTitleHandler = (e) => {
        setEditTitle(e.target.value)
    }

    const editItem = () => {
        axios.patch(`http://localhost:3001/posts/${movieId}`, {
            title: editTitle,
            img: editImg
        })
    }

    return (
        <div className="popup">
            <h1>Редактирование</h1>
            <div className="inputs">
                <input type="text" value={editTitle} onChange={inputEditTitleHandler} />
                <input type="file" accept="image/*" name="image-upload" id="input" onChange={editImageHandler}  />
                <button onClick={() => editItem(editTitle) & setTimeout(() => alert(`Файл изменён на ${editTitle}!`), 1000)} type="submit">submit</button>
            </div>

        </div>
    )
}

export default EditMoviePopup;