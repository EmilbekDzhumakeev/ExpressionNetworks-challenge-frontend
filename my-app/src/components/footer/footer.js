import React from 'react' 
import './footer.css';
import '../../components/appLogin/appLogin.css'

const Footer = (props) => { 

 ///////////////////////////////////////////////////////////////////////
    return (
        

                <div className='app-login'>
         <div className='login-form'>

            
            <h3>Create Puzzle</h3>

            <form onSubmit={(event) => { props.handlePuzzleSubmit(event) }}>
               {/* form fields */}
               {props.registerPuzzle && <input type='text' name='tTitle' placeholder='Puzzle Title' onChange={props.handlePuzzleChange} value={ props.newPuzzle.tTitle } />}<br />
               <textarea type='text' name='description' placeholder='Description' required onChange={props.handlePuzzleChange} value={ props.newPuzzle.description } style={{width:'342px', height:'183px'}}
               ></textarea><br />
               <input type='text' name='creator' placeholder='Creator' required onChange={props.handlePuzzleChange} value={props.newPuzzle.creator} />
               
               {/* login action bar */}
               <div className="login-action-bar">
               
                   { props.registerPuzzle && <div><input type='submit' className='button-md' value='Submit' /><input type='submit' className='button-md' value='Cancel' /></div>}
                   {!props.registerPuzzle && <button className="button-md register" onClick={() => { props.setRegisterPuzzle(true) }}>Register</button>} 
                   </div>
            </form>
         </div>
      </div>

                   
        
    )
}

export default Footer
