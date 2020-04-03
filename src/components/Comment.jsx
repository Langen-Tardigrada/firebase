import React from 'react'
 
function Comment(props) {
   return (
       <article className="media">
           <figure className="media-left">
               <p className="image is-64x64">
                   <img src={props.image} alt="user" />
               </p>
           </figure>
           <div className="media-content">
               <div className="field">
                   <p className="control">
                       <textarea className="textarea" name="comment" placeholder="Add a comment..." defaultValue={""} onChange={props.onChange} />
                   </p>
                </div>
               <nav className="level-right">
                   <div className="level-left">
                       <div className="level-item">
                           <button className="button is-info" onClick={props.post}>Submit</button>
                       </div>
                   </div>
               </nav>
           </div>
       </article>
   )
}
export default Comment
