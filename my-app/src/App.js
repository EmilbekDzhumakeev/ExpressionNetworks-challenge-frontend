import React, { useState, useEffect } from 'react'
import Header from './components/header/header'
import Main from './components/main/main';
import AppLogin from './components/appLogin/appLogin';
import MessageBar from './components/messageBar/messageBar';
import axios from 'axios';
import './App.css'

/**************************************************** */
// // Remove after production state is created (For demo)
import myFriends from './_demoData/friends.js'
import myPuzzle from './_demoData/myPuzzle.js'
/**************************************************** */

const App = () => {
   const [friends, setFriends] = useState(myFriends);
   const [users, setUsers] = useState(null);
   const [newUser, setNewUser] = useState({
      name: '',
      email: '',
      password: '',
   })

   const [loggedInUser, setLoggedInUser] = useState(null);
   const [currentUser, setCurrentUser] = useState(null);
   const [newUserData, setNewUserData] = useState(null);
   const [logonData, setlogonData] = useState(null);
   const [loggedIn, setLoggedIn] = useState(false);
   const [register, setRegister] = useState(false);

   const [messageText, setMessageText] = useState('');
   const [showMessageBar, setShowMessageBar] = useState(false);

   const [newPosting, setNewPosting] = useState('');
   const [postings, setPostings] = useState([]);

   const [editProfile, setEditProfile] = useState({ name: '', aboutMe: '' });
   ////////////////////////////////////////////////////////////////////////////////////////////////////
   const [newPuzzle, setNewPuzzle] = useState({
       
      creator: '',
      tTitle: '',
      description: ''
      
   })
   const [registerPuzzle,setRegisterPuzzle] = useState(false); 
   const [newPuzzleData, setNewPuzzleData] = useState(null);

   const [puzzles, setPuzzles] = useState(null);
   // const [bookedPuzzles, setBookedPuzzles] = useState(null);
   const [currentPuzzle, setCurrentPuzzle] = useState(myPuzzle);


   /**********************************************************
    *  API ROUTES
    **********************************************************/
   const apiPath = 'http://localhost:8000/api/users';
   const apiPuzzlePath = 'http://localhost:8000/api/puzzles';

   const getAllUsers = async () => {
      await axios.get(apiPath).then((res) => { setUsers(res.data); console.log(res.data); }).catch((err) => console.log(err));
   }


   const postNewUser = async (newUser) => {
      await axios.post(apiPath, newUser).then((res) => { console.log(res.data); }).catch(err => {
         if (err.response.status === 400) {
            console.log(err.response.data)
            setMessageText(err.response.data)
            setShowMessageBar(true);
         }
      })
   }


   const postUserLogin = async (email) => {
      await axios.post(`${apiPath}/login`, email).then((res) => { setLoggedInUser(res.data); setCurrentUser(res.data); }).catch((err) => { console.log(err); });
   }
   const getPostings = async (currentPuzzle) => {
      await axios.get(`${apiPuzzlePath}/${currentPuzzle._id}/comments`).then((res) => { setPostings(res.data) }).catch((err) => { console.log(err); });
   }
// get all friends for current user ????????????????????????????????????????????
   const getFriends = async (currentUser) => {
      await axios.get(`${apiPath}/${currentUser}/friends`).then((res) => { setFriends(res.data) }).catch((err) => { console.log(err); });
}
  //add New Posting
  const postNewPosting = async (currentPuzzle, data) => {
   await axios.post(`${apiPuzzlePath}/${currentPuzzle._id}/comment`, data).then((res) => (res.data)).catch((err) => console.log(err));
}
////////////////likes? 
const putLikes = async (currentPuzzle) => {
   await axios.put(`${apiPuzzlePath}/${currentPuzzle._id}/likes`).then((res) => (res.data)).catch((err) => console.log(err));
}
////////////////likes? 
const putDisLikes = async (currentPuzzle) => {
   await axios.put(`${apiPuzzlePath}/${currentPuzzle._id}/dislikes`).then((res) => (res.data)).catch((err) => console.log(err));
}

   /////////////get all puzzles
  const getPuzzles = async (currentUser) => {
      await axios.get(apiPuzzlePath).then((res) => { setPuzzles(res.data) }).catch((err) => { console.log(err); });
} 
   const postNewPuzzle = async ( data) => {
      await axios.post(`${apiPuzzlePath}/newPuzzle`, data).then((res) => { console.log(res.data); }).catch(err => {
         if (err.response.status === 400) {   
          console.log(err.response.data)
         
         }
      })
   }


   /**********************************************************
    *  USE EFFECTS
    **********************************************************/
   useEffect(() => {
      getAllUsers();
   }, [currentUser])


   useEffect(() => {
      postNewUser(newUserData);
   }, [newUserData])


   useEffect(() => {
      postUserLogin(logonData);
   }, [logonData])

   // get User Posting Feed 
   useEffect(() => {
      getPostings(currentUser);
      console.log('getPostings');
   }, [currentUser])
 /////////////// get User Friens ??????????????????????
   useEffect(() => {
      getFriends(currentUser); 
      console.log('getFriends')
   }, [currentUser]) 

   useEffect(() => {
      getPuzzles(currentUser); 
      console.log('getPuzzles')
   }, [currentUser]) 

      ///////////////////////////////////////////////////////////////////////useEffect for footer
useEffect(() => {
   postNewPuzzle(newPuzzleData);
}, [newPuzzleData])

   /**********************************************************
   *  EVENT HANDLERS
   ***********************************************************/
   const handleLikesClick = (currentPuzzle) => {
      putLikes(currentPuzzle);
   }

   const handleDisLikesClick = (currentPuzzle) => {
      putDisLikes(currentPuzzle);
   }
   
   const handleLoginAvatarClick = () => {    // Banner component
      //alert('avatar click');
      setLoggedIn(false);
      setCurrentUser(null);
      setLoggedInUser(null);
   }


   const handleCloseMessageBar = () => {     // MessageBar component
      setShowMessageBar(false);
      setMessageText('');
   }


   const handleUserChange = (event) => {     // AppLogin
      event.persist();
      setNewUser(prevNewUser => ({ ...prevNewUser, [event.target.name]: event.target.value }));
      console.log(newUser);
   }


   const handleUserSubmit = (event) => {     // AppLogin
      event.preventDefault();
      if (register) {
         setNewUserData(newUser);   // change triggers post new user actions
         setRegister(false);        // end registration mode
         setNewUser({
            name: '',
            email: '',
            password: '',
         });
      } else {
         setlogonData({ email: newUser.email })   // change triggers user login actions
         setLoggedIn(true);
         setNewUser({
            name: '',
            email: '',
            password: '',
         });
         document.getElementById('app').style.backgroundColor = '#999999';
         //alert('submit form');
      }
   }
   const changeUser = (user) => {
      setCurrentUser(user)
      console.log('tempUser', currentUser)
   }

   ///////////////////////handle new posting 
   const handleNewPostingSubmit = (event) => {
      event.preventDefault();
      const posting = {
        author: loggedInUser.name,
         feedback: newPosting,
      }
      postNewPosting(currentPuzzle, posting);
      // console.log('New Post:', posting);
      // console.log('CurrentTour:', currentTour)
      // console.log('user id', loggedInUser._id)

      const newCurrentPuzzle = { ...currentPuzzle };
      newCurrentPuzzle.comments.push(posting);
      setCurrentPuzzle(newCurrentPuzzle);
      setNewPosting('');
   }

   //handle new posting change 
   const handleNewPostingChange = (event) => {
      setNewPosting(event.target.value);
   }


   const handleEditProfileChange = (event) => {
      event.persist();
      setEditProfile(prevEditProfile => ({ ...prevEditProfile, [event.target.name]: event.target.value }));

   }


   const handleEditProfileSubmit = (event) => {
      event.preventDefault();

      setEditProfile({
         name: '',
         aboutMe: ''
      });
   }
   const changePuzzle = (tour) => {
      setCurrentPuzzle(tour)
      console.log('tempPuzzle', currentPuzzle)
   }

////////////////////////////////////////////////////////// New Puzzle Handler 
const handlePuzzleChange = (event) => {     // AppLogin
   event.persist();    // calling event.persis allows references to the event occur asyncronously
   setNewPuzzle(prevNewPuzzle => ({ ...prevNewPuzzle, [event.target.name]: event.target.value }));
   console.log(newPuzzle);
}
///////////////////////
const handlePuzzleSubmit = (event) => {     // AppLogin
   event.preventDefault();
   if (registerPuzzle) {
      setNewPuzzleData(newPuzzle);   // change triggers post new user actions
      setRegisterPuzzle(false);        // end registration mode
      setNewPuzzle({
       tTitle: '',
       description: '', 
       creator:''
      });
   } else {
     
      setNewPuzzle({
         tTitle: '',
         description: '', 
         creator:''
      });
      document.getElementById('app').style.backgroundColor = '#999999';
      //alert('submit form');
   }
}


   /////////////// CONSOLE.LOGS /////////////////
   console.log('allusers: ',users);
   console.log('friends: ',friends);
   console.log('current user: ', currentUser);
   console.log('loggedInUser: ', loggedInUser);


   return (
      <div id='app' className='App'>
         <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser} currentUser={currentUser} handleLoginAvatarClick={handleLoginAvatarClick} loggedInUser={loggedInUser} />
         {showMessageBar && <MessageBar messageText={messageText} setShowMessageBar={setShowMessageBar} handleCloseMessageBar={handleCloseMessageBar} />}
         <div className='content'>
            {!loggedIn && <AppLogin newUser={newUser} handleUserChange={handleUserChange} handleUserSubmit={handleUserSubmit}
               register={register} setRegister={setRegister} setLoggedIn={setLoggedIn} />}

            {(loggedIn && currentUser) && <Main changeUser={changeUser} users={users} loggedInUser={loggedInUser} 
            currentUser={currentUser} friends={friends} editProfile={editProfile} handleEditProfileChange={handleEditProfileChange} 
            handleEditProfileSubmit={handleEditProfileSubmit} handleNewPostingChange={handleNewPostingChange} handleNewPostingSubmit={handleNewPostingSubmit}
             newPosting={newPosting} setNewPosting={setNewPosting} postings={postings} setPostings={setPostings} setFriends={setFriends} 
             
             changePuzzle={changePuzzle} puzzles={puzzles} setPuzzles = {setPuzzles}  
             currentPuzzle={currentPuzzle} setCurrentPuzzle={setCurrentPuzzle}
             
             newPuzzle={newPuzzle} registerPuzzle={registerPuzzle} handlePuzzleChange={handlePuzzleChange} setRegisterPuzzle={setRegisterPuzzle} 
             handlePuzzleSubmit={handlePuzzleSubmit} 
             handleLikesClick = {handleLikesClick}    handleDisLikesClick = {handleDisLikesClick}
             />}
         </div>
         {/* <Footer /> */}
      </div>
   )
}


export default App;
