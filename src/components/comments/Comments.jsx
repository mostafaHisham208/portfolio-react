import React,{useState} from 'react'
import './comments.css'
function Comments() {
    const[comments,setcomments]=useState(false)
  return (

    <div id='comments' className='comments'>
      <div className="commentscard">
      <h3>Comments</h3>
      {comments?
      <div>
        
         </div>:
         <div>no comments founds 
        <div>enter your comment  </div>
        <input type="text"/>
         </div>}
         </div>
    </div>
  )
}

export default Comments