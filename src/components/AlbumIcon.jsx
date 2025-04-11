import React from 'react'
import CSS from "../styles/AlbumIcon.module.css";

export default function AlbumIcon(props) {
    const {albumName}=props.album;
    const {setalbumSelected, setIsAlbumViewer}=props;

    const  handleClick=()=>{
        setalbumSelected(props.album);
        setIsAlbumViewer((prev)=>!prev);
    }
  return (
    <div className={CSS.main_outer_icon} onClick={handleClick}>
        <div className={CSS.image_back}>
        <img src='https://cdn-icons-png.flaticon.com/128/8344/8344917.png' alt='none'/>
        </div>
        <h2 className={CSS.heading}>{albumName}</h2>
    </div>
  )
}
