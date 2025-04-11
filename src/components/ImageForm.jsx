import React, { useRef } from 'react';
import CSS from "../styles/AlbumForm.module.css";

export default function ImageForm(props) {

  const {albumSeleted,handleAddImageToAlbum}=props;
  const titleInput=useRef("");
  const urlInput=useRef("");
  
      const clearInput=()=>{
          titleInput.current.value="";
          urlInput.current.value="";
      }
  
      const handleCreate=(e)=>{
          e.preventDefault();
          let obj={
            url:urlInput.current.value,
            title:titleInput.current.value,
            id:new Date().getTime()
          }
          handleAddImageToAlbum(albumSeleted.albumName,obj);
          clearInput();
      }
    return (
      <div className={CSS.main_body}>
          <form  className={CSS.form_body}>
              <label>Add Images</label>
              <div className={CSS.formInputs}>
              <input type='text'  placeholder='Title' required ref={titleInput}/>
              <input type='text'  placeholder='URL' required ref={urlInput}/>
              <button className={CSS.clear_btn} onClick={clearInput}>Clear</button>
              <button className={CSS.create_album_btn} onClick={(e)=>handleCreate(e)}>Create</button>
              </div>
              
          </form>
      </div>
    )
}
