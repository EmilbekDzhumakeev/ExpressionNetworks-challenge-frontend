import React from 'react';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import './bannerActionBar.css';


const BannerActionBar = (props) => {
   return (
      <div className="banner-action-bar">
         <div className="user-info">Hi, {props.loggedInUser.name.split(' ')[0]}</div>
         <div className='button-md'>
            {/* <div className='request-pending'>{props.loggedInUser.friendRequestIn.length}</div> */}
            <div className='request-text'>Friend Request</div>
            {props.loggedInUser.email !== props.currentUser.email && <div><AddCircleOutlineOutlinedIcon /></div>}
         </div>
             <div className="login"><button className="button-md" onClick={props.handleLoginAvatarClick}>Log Out</button></div>
      </div>
   )
}

export default BannerActionBar;
