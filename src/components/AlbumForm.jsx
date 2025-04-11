import React, { useRef } from 'react';
import CSS from "../styles/AlbumForm.module.css";

export default function AlbumForm({handleAddAlbum}) {
    const inputValue=useRef("");

    const clearInput=()=>{
        inputValue.current.value="";
    }

    const handleCreate=(e)=>{
        e.preventDefault();
        handleAddAlbum(inputValue.current.value);
        clearInput();
    }
  return (
    <div className={CSS.main_body}>
        <form  className={CSS.form_body}>
            <label>Create an Album</label>
            <div className={CSS.formInputs}>
            <input type='text'  placeholder='Album Name' required ref={inputValue}/>
            <button className={CSS.clear_btn} onClick={clearInput}>Clear</button>
            <button className={CSS.create_album_btn} onClick={(e)=>handleCreate(e)}>Create</button>
            </div>
            
        </form>
    </div>
  )
}
