import React from 'react';
import CSS from "../styles/ImageIcon.module.css";

export default function ImageIcon(props) {
    const {source, 
        handleDeleteImage,
         albumSeleted, 
         setIsUpdateImageForm, 
         setSelectedImage,
         setIsImageView
        }=props;

    const handleDeleteClick=()=>{
        handleDeleteImage(albumSeleted.albumName,source.id);
    }
    const handleUpdate=()=>{
        setSelectedImage(source);
        setIsUpdateImageForm((prev)=>!prev);
    }

    const handleClickOnImage=()=>{
        setIsImageView(true);

        setSelectedImage(source);
        console.log("source",source);
    }

  return (
        <div className={CSS.imageCard}>
            <div className={CSS.cardActions}>
            <img src="https://cdn-icons-png.flaticon.com/128/10336/10336582.png" alt="Edit" onClick={handleUpdate} />
            <img src="https://cdn-icons-png.flaticon.com/128/5028/5028066.png" alt="Delete" onClick={handleDeleteClick} />
            </div>
            <img className={CSS.cardImage} src={source.url} alt={source.title} 
            onClick={handleClickOnImage}
            onError={(e) => {
                e.target.onerror = null; // prevent infinite loop if default also fails
                e.target.src = "https://www.shutterstock.com/image-vector/flat-design-404-error-page-260nw-2489201787.jpg"; // fallback image
              }}
            />
            <p className={CSS.cardTitle}>{source.title}</p>
        </div>
  )
}
