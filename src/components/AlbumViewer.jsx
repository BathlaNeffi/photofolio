import React, { useState } from 'react';
import CSS from "../styles/AlbumViewer.module.css";
import ImageForm from './ImageForm';
import ImageIcon from './ImageIcon';
import UpdateImageForm from './UpdateImageForm';
import ImageViewer from './ImageViewer';

export default function AlbumViewer(props) {
    const {albumSeleted, setIsAlbumViewer, handleAddImageToAlbum, handleDeleteImage, handleUpdateImage}=props;
    const [isImageForm, setIsImageForm]=useState(false);
    const [isUpdateImageForm,setIsUpdateImageForm]=useState(false);
    const[seletedImage,setSelectedImage]=useState({});
    const [isImageView, setIsImageView]=useState(false);

  return (
    <>
    <div className={CSS.main_content}>
            {isImageForm?<ImageForm handleAddImageToAlbum={handleAddImageToAlbum} albumSeleted={albumSeleted}/>:null}
            {isUpdateImageForm?<UpdateImageForm seletedImage={seletedImage} albumSeleted={albumSeleted}handleUpdateImage={handleUpdateImage} setIsUpdateImageForm={setIsUpdateImageForm} />:null}
            
            <div className={CSS.main_header}>
    <img className={CSS.back} src="https://cdn-icons-png.flaticon.com/128/7168/7168662.png" alt="back button" onClick={()=>{setIsAlbumViewer((prev)=>!prev )}}/>
                <h2 className={CSS.main_title}>Images in {albumSeleted.albumName}</h2>
                {isUpdateImageForm? <button className={isUpdateImageForm?CSS.cancle_album_btn:CSS.add_album_btn} onClick={()=>setIsUpdateImageForm(!isUpdateImageForm)}>{isUpdateImageForm?"Cancel":"Update Image"}</button>:
                <button className={isImageForm?CSS.cancle_album_btn:CSS.add_album_btn} onClick={()=>setIsImageForm(!isImageForm)}>{isImageForm?"Cancel":"Add Image"}</button>}
            </div>
            <div className={CSS.album_grid}>
                {albumSeleted.images.map((source,i)=><ImageIcon source={source} key={i} 
                handleDeleteImage={handleDeleteImage} 
                albumSeleted={albumSeleted} 
                setIsUpdateImageForm={setIsUpdateImageForm}
                setSelectedImage={setSelectedImage}
                setIsImageView={setIsImageView}
                />)}
            </div>
            <div className={isImageView?CSS.imageViewer:null}>
            {isImageView?<ImageViewer seletedImage={seletedImage}  setIsImageView={setIsImageView}/>:null}
            </div>
        </div>
    </>
  )
}
