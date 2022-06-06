import React from 'react'

import './puzzleComment.css';

const PuzzleComment = (props) => {
   return (
      <div className='user-post'>
         <p>
            <span>{`${props.puzzleComment.author} >>`}&nbsp;&nbsp;</span>{props.puzzleComment.feedback}<i><b>   
                Date Added:{props.puzzleComment.dateAdded}</b></i></p>
       
      </div>
   )
}

export default PuzzleComment;
