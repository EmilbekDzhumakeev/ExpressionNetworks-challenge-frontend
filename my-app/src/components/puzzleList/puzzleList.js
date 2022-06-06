
// import  {useState} from 'react'
// import BookedToursList from './allBookedToursList/allBookedToursList'; 
import AllPuzzlesList from './allPuzzlesList/allPuzzlesList'
import './puzzleList.css';

const PuzzlesList = (props) => { 

   return (

   <div className='friends-all-users-list'> 
 <AllPuzzlesList currentUser={props.currentUser} changePuzzle={props.changePuzzle} users={props.users} puzzles={props.puzzles} setPuzzles={props.setPuzzles}  />
  </div>


   )
}

export default PuzzlesList
