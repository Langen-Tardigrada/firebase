import React from 'react'
import 'bulma/css/bulma.css'
import Message from './Message'
import Comment from './Comment'
 
function MessageList(props) {
   return (
       <section className="section container">
           <Comment image={props.image} onChange={props.onChange} post={props.post} />
           {
               (() => {
                   let result = []
                   props.messages.forEach((element) => {
                       result.push(<Message image={props.image} key={element.id} id={element.id} data={element.data()} delete={props.delete} />)
                   })
                   return result
               })()
           }
       </section>
   )
 
}
 
export default MessageList
