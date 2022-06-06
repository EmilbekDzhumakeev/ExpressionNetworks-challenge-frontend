import React from 'react';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import './likesBar.css';

const LikesBar = (props) => {
   return (
    


      <button className="button-md" onClick={props.handleLikesClick(props.currentPuzzle)}><ThumbUpOutlinedIcon  /></button> 
      
   )
}

export default LikesBar;
