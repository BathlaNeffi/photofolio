import React from 'react';
import CSS from "../styles/ImageViewer.module.css";

export default function ImageViewer(props) {
    
    const {seletedImage, setIsImageView}=props;
    const image=seletedImage;
 
    if (!image) return null;

    const handleClose=()=>{
        setIsImageView(false);
    }
  return (
    <>
        <img className={CSS.viewerImage} src={image.url} alt={image.title} />
        <p className={CSS.viewerTitle}>{image.title}</p>
        <button className={CSS.closeButton} onClick={handleClose}>✕</button>
    </>

  );
}
