import React from 'react'
 
function Navbar(props) {
   return (
       <nav className="navbar" role="navigation" aria-label="main navigation">
           <div className="navbar-brand">
               <a className="navbar-item" href="/">
                   Firebase App
               </a>
           </div>
           <div id="navbarBasicExample" className="navbar-menu">
               <div className="navbar-start">
               </div>
               <div className="navbar-end">
                   <div className="navbar-item">
                       <div className="buttons">
                           <h3 className="navbar-item">
                               {props.username}
                           </h3>
                           <button className="button is-light" onClick={props.logout}>
                               Logout
                           </button>
                           {/* <button className="button is-light" onClick={() => {props.testFunction('tttt')}}>
                               test
                           </button> */}
                       </div>
                   </div>
               </div>
           </div>
       </nav>
 
   )
}
 
export default Navbar
