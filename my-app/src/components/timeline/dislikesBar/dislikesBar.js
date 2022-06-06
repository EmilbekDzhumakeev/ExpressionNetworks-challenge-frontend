import React from 'react';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import './dislikesBar.css';

const DisLikesBar = (props) => {
   return (
      // <div className='likes-bar' onClick={props.handleLikesClick(props.currentPuzzle)}>
         
      // </div>
      <button className="button-md" onClick={props.handleDisLikesClick(props.currentPuzzle)}><ThumbDownOutlinedIcon /></button>
   )
}

export default DisLikesBar;