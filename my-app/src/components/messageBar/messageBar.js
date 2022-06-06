import React from 'react';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import './messageBar.css'

const MessageBar = (props) => {
   return (
      <div className='message-bar'>
         <div className='message-text'>{props.messageText}</div><div className='cancel-icon' onClick={props.handleCloseMessageBar}><CancelRoundedIcon fontSize='large' /></div>
      </div>
   )
}

export default MessageBar;
