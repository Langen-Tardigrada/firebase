import React from 'react'
import 'bulma/css/bulma.css'
 
function Message(props) {
 
   let date = props.data.timestamp.toDate()
   return (
       <article className="media">
           <figure className="media-left">
               <p className="image is-64x64">
               <img src={props.image} alt="User's" />
               </p>
           </figure>
           <div className="media-content">
               <div className="content">
                   <p>
                       <small>{date.toString()}</small>
                       <br />
                       {props.data.text}
                   </p>
               </div>
           </div>
           <div className="media-right">
               <button className="delete" onClick={props.delete} value={props.id} />
           </div>
       </article>
   )
}
 
export default Message
