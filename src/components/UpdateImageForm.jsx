import React, { useEffect, useRef } from 'react';
import CSS from "../styles/AlbumForm.module.css";

export default function UpdateImageForm(props) {
    const {albumSeleted,seletedImage, handleUpdateImage, setIsUpdateImageForm}=props;
      const titleInput=useRef("");
      const urlInput=useRef("");
      useEffect(()=>{
        if(seletedImage){
            titleInput.current.value=seletedImage.title;
            urlInput.current.value=seletedImage.url;
        }
      },[seletedImage])
      
          const clearInput=()=>{
              titleInput.current.value="";
              urlInput.current.value="";
          }
      
          const handleUpdate=(e)=>{
              e.preventDefault();
              let imgDetails={
                id:seletedImage.id,
                title:titleInput.current.value,
                url:urlInput.current.value
              }
              handleUpdateImage(albumSeleted.albumName,imgDetails);
            setIsUpdateImageForm(false);
              clearInput();
          }
        return (
          <div className={CSS.main_body}>
              <form  className={CSS.form_body}>
                  <label>Update {seletedImage.title} Images</label>
                  <div className={CSS.formInputs}>
                  <input type='text'  placeholder='Title' required ref={titleInput}/>
                  <input type='text'  placeholder='URL' required ref={urlInput}/>
                  <button className={CSS.clear_btn} onClick={clearInput}>Clear</button>
                  <button className={CSS.create_album_btn} onClick={handleUpdate} >Update</button>
                  </div>
                  
              </form>
          </div>
        )
}
