//Module Name: Time line
//Date: 13 March 2022
//Programmers Name: Emilbek Dzhumakeev
//Purpose: R – 4.1 news feed component will display global feed of all puzzles created
//         R – 4.2 each puzzle will have buttons for like/dislike where users can vote
//         R – 4.3 Like/dislike button will contain counter
//Variables Used:


import React from 'react';
import PuzzleComment from './userPost/puzzleComment';
import CreatePost from './createPost/createPost';
import LikesBar from './likesBar/likesBar'; 
import DisLikesBar from './dislikesBar/dislikesBar';
import './timeline.css';
//import axios from 'axios'; 

const Timeline = (props) => {

   const allPosts = props.currentPuzzle.comments.map((post)=> {
      return (<li><PuzzleComment puzzleComment={post} /></li>
      )
   })

   return (
      <div className='timeline'>
         <h3>Comments</h3>
         <h2>Puzzle Title: {props.currentPuzzle.tTitle}</h2> 
         <p2>Description: {props.currentPuzzle.description}</p2>     &nbsp;&nbsp;
         <p2>Likes: {props.currentPuzzle.likes}  </p2>     &nbsp;&nbsp;
         
         <p2>Dislikes: {props.currentPuzzle.dislikes}</p2>  
          <div>
            <LikesBar currentPuzzle={props.currentPuzzle} handleLikesClick = {props.handleLikesClick} />
            <DisLikesBar currentPuzzle={props.currentPuzzle} handleDisLikesClick = {props.handleDisLikesClick} />
         </div> 

         <div>
            <CreatePost newPosting={props.newPosting} setNewPosting={props.setNewPosting} postings={props.postings} setPostings={props.setPostings} handleNewPostingChange={props.handleNewPostingChange} handleNewPostingSubmit={props.handleNewPostingSubmit} />
         </div>
         <div>
            <ul>
               {allPosts}
            </ul>
         </div>
      </div>
   )
}

export default Timeline;