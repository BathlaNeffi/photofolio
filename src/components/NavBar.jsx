import React from 'react';
import CSS from "../styles/NavBar.module.css"
export default function NavBar() {
  return (
   <>
   <div className={CSS.navBarBody}>
    <div className={CSS.wrapper}>
        <img alt='icon' src='https://cdn-icons-png.flaticon.com/128/1358/1358994.png'/>
        <h2>PhotoFolio</h2>
    </div>
   </div>
   </>
  )
}
