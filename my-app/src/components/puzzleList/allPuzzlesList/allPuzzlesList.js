import React from 'react';
import avatarPlaceholder from '../../../images/avatar-placeholder.png'
import './allPuzzlesList.css';

const AllPuzzlesList = (props) => {
   

  ////////////////////////////////////////////////////////////

   const allPuzzles = props.puzzles.map((puzzle, index) => {
      return (
         <li key={index}>
            {/* <div className="avatar-inline"><img src={user.avatar} alt=''></img></div> */}
            <div className="avatar-inline"><img src={avatarPlaceholder} alt=''></img></div>

         <div onClick={() => { props.changePuzzle(puzzle)}}><div className='user-name'>{puzzle.tTitle}</div></div>
      </li>
      )
   })
   return (
      <div className='all-users-list'>
         <h3>All Puzzles List</h3>
         <ul>
            {allPuzzles} 
         </ul>
      </div>
   )
}

export default AllPuzzlesList;