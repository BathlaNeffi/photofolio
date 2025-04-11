import React, { useState } from 'react'
import AlbumIcon from './AlbumIcon';
import CSS from "../styles/Album.module.css";
import AlbumForm from './AlbumForm';
import AlbumViewer from './AlbumViewer';

export default function Album() {

    const[isAlbumForm,setIsAlbumForm]=useState(false);
    const [albums, setAlbums]=useState([{albumName:"Test",images:[{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLat8bZvhXD3ChSXyzGsFVh6qgplm1KhYPKA&s",title:"eyes",id:1},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLat8bZvhXD3ChSXyzGsFVh6qgplm1KhYPKA&s",title:"eyes", id:2}]}, 
                                        {albumName:"Coding Ninja",images:[{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLat8bZvhXD3ChSXyzGsFVh6qgplm1KhYPKA&s",title:"eyes", id:3}]},
                                        {albumName:"abcd",images:[{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLat8bZvhXD3ChSXyzGsFVh6qgplm1KhYPKA&s",title:"eyes", id:4}]}]);
    const[isAlbumViewer, setIsAlbumViewer]=useState(false);

    const[albumSeleted, setalbumSelected]=useState({});
    const handleAddAlbum=(newalbum)=>{
        let obj={albumName:newalbum,images:[]}
        setAlbums([...albums,obj]);
    }

    const handleAddImageToAlbum=(name,imageDetails)=>{
      const updatedAlbum= albums.map((album)=>{
        if(album.albumName===name){
          return {
            ...album,
            images:[...album.images,imageDetails]
          }
        }
        return album
       })
       setAlbums(updatedAlbum);
       const updatedSelected = updatedAlbum.find((album) => album.albumName === name);
       setalbumSelected(updatedSelected);
    }

    const handleDeleteImage=(name,delId)=>{
      const updatedAlbum=albums.map((album)=>{
        if(album.albumName===name){
          let pos=album.images.findIndex((ima)=>ima.id===delId);
          if(pos!==-1){
            album.images.splice(pos,1);
          }
          return album;
        }
        return album;
      });
      setAlbums(updatedAlbum);
      const updatedSelected=updatedAlbum.find((album)=> album.albumName===name);
      setalbumSelected(updatedSelected);

    }


    const handleUpdateImage=(name,imageDetails)=>{
      const updatedAlbum=albums.map((album)=>{
        if(album.albumName===name){
          let pos=album.images.findIndex((img)=> img.id===imageDetails.id);
          if(pos!==-1){
            album.images[pos]=imageDetails;
            return album;
          }
        }
        return album;
      });

      setAlbums(updatedAlbum);
      const updatedSelected=updatedAlbum.find((album)=> album.albumName===name);
      setalbumSelected(updatedSelected);
    }
  return (
    <>{
        isAlbumViewer?<AlbumViewer albumSeleted ={albumSeleted} 
        handleAddImageToAlbum={handleAddImageToAlbum} 
        handleDeleteImage={handleDeleteImage} 
        setIsAlbumViewer={setIsAlbumViewer}
        handleUpdateImage={handleUpdateImage}/>:
        <div className={CSS.main_content}>
        {isAlbumForm?<AlbumForm handleAddAlbum={handleAddAlbum}/>:null}
        
        <div className={CSS.main_header}>
            <h2 className={CSS.main_title}>Your albums</h2>
            <button className={isAlbumForm?CSS.cancle_album_btn:CSS.add_album_btn} onClick={()=>setIsAlbumForm(!isAlbumForm)}>{isAlbumForm?"Cancel":"Add Album"}</button>
        </div>
        <div className={CSS.album_grid}>
            {albums.map((album,i)=><AlbumIcon setalbumSelected={setalbumSelected}
                                    setIsAlbumViewer={setIsAlbumViewer}
                                     album={album} key={i}/>)}
            
        </div>

    </div>
    }
    
    </>
  )
}
