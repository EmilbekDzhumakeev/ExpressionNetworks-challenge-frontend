//Module Name: Main
//Date: 6 March 2022
//Programmers Name: Emilbek Dzhumakeev
//Purpose: main serves as distributor it sends state variables as props to thir corresponding components
//Variables Used:

import React from 'react'
import Profile from '../profile/profile'
import Timeline from '../timeline/timeline'
import FriendsAllUsersList from '../friendsAllUsersList/friendsAllUsersList';
import PuzzlesList from '../puzzleList/puzzleList';
import Footer from '../footer/footer';
import './main.css'


const Main = (props) => {
   return (
      <div className='main'>
         <div>
            <div>
               <Profile currentUser={props.currentUser} loggedInUser={props.loggedInUser} editProfile={props.editProfile} handleEditProfileChange={props.handleEditProfileChange} handleEditProfileSubmit={props.handleEditProfileSubmit} />
            </div>

            {props.currentPuzzle.comments && <Timeline postings={props.postings} 
            setPostings={props.setPostings} newPosting={props.newPosting} setNewPosting={props.setNewPosting} 
            handleNewPostingChange={props.handleNewPostingChange} handleNewPostingSubmit={props.handleNewPostingSubmit} 
            currentUser={props.currentUser} loggedInUser={props.loggedInUser} currentPuzzle={props.currentPuzzle} 
            setCurrentPuzzle={props.setCurrentPuzzle}   
            handleLikesClick = {props.handleLikesClick}  handleDisLikesClick = {props.handleDisLikesClick}
               /> }

            <div>
               <FriendsAllUsersList changeUser={props.changeUser} users={props.users} loggedInUser={props.loggedInUser} currentUser={props.currentUser} friends={props.friends} setFriends={props.setFriends}/>

               <div>
            
              <PuzzlesList changePuzzle={props.changePuzzle} users={props.users} loggedInUser={props.loggedInUser} currentUser={props.currentUser} puzzles={props.puzzles} setPuzzles={props.setPuzzles} bookedTours={props.bookedTours} setBookedTours={props.setBookedTours} currentPuzzle={props.currentPuzzle} setCurrentPuzzle={props.setCurrentPuzzle}/> 
              <Footer  handlePuzzleSubmit={props.handlePuzzleSubmit} newPuzzle={props.newPuzzle} registerPuzzle={props.registerPuzzle} handlePuzzleChange={props.handlePuzzleChange} setRegisterPuzzle={props.setRegisterPuzzle} />
                        </div>
            </div>
         </div>
      </div>
   )
}

export default Main
