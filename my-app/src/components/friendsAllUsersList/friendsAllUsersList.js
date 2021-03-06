//Module Name: friendsAllUserList
//Date: 27 February 2022
//Programmers Name: Emilbek Dzhumakeev
//Purpose: R – 5.1 all user component will contain button that toggles between all users and friends
//Variables Used:

import  {useState} from 'react'
import FriendsList from './friendsList/friendsList'; 
import AllUsersList from './allUsersList/allUsersList'
import './friendsAllUsersList.css';

const FriendsAllUsersList = (props) => { 
   const [toggle, setToggle] = useState(true);
   
   const changeDisplay = () => {
      setToggle (!toggle)
      console.log(toggle)
   }
   const buttonText = toggle ? 'All Users' : 'Friends';  // change button text on toggle
   
   return (
      <div className='friends-all-users-list'> 
      <button className="button-md toggle-button" onClick={() => { changeDisplay()}}>{buttonText}</button>
        {toggle && <FriendsList currentUser={props.currentUser} setFriends={props.setFriends} changeUser={props.changeUser} friends={props.friends} />}
        {!toggle && <AllUsersList currentUser={props.currentUser} changeUser={props.changeUser} users={props.users} />}
       
      </div>
   )
}

export default FriendsAllUsersList