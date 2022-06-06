// 1.use state
// 2. check for each input

import React, {useState} from 'react'
import { Display } from './Display'

    const Form = () => {
        // 2. check for each input
        const [firstname, setFirstname] = useState("")
        
        const [lastname, setLastname] = useState("")
        
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
        const [confirm, setConfirm] = useState("")
        const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

        const createUser = (e) => {
            e.preventDefault();
            const newUser = {firstname, lastname};
            alert("Welcome", newUser);
            setHasBeenSubmitted( true );
        };

  return (
    <div>
        <h1> Forms </h1>
        <form onSubmit={ createUser }>
            {
                hasBeenSubmitted ? 
                <h3>Thank you for submitting!</h3> :
                <h3>Please submit the form!</h3>
            }

            <div>
                <label htmlFor="">Firstname</label> <br />
                <input type="text" name='firstname' value={firstname}
                onChange={(e)=>setFirstname(e.target.value)}/> <br />
                {
                    firstname.length < 2?
                    <span style={{color:'blueviolet'}}>At least two characters for firstname!</span> :
                    ''
                }
            </div>
            <div>
                <label htmlFor="">Lastname</label> <br />
                <input type="text" name='lastname' value={lastname}
                onChange={(e)=>setLastname(e.target.value)}/> <br />
                {
                    lastname.length < 2?
                    <span style={{color:'blueviolet'}}>At least two characters lastname!</span> :
                    ''
                }
            </div>
            <div>
                <label htmlFor="">Email</label> <br />
                <input type="text" name='email' value={email}
                onChange={(e)=>setEmail(e.target.value)}/> <br />
                {
                    email.length < 2?
                    <span style={{color:'blueviolet'}}>Vaild email!</span> :
                    ''
                }
            </div>
            <div>
                <label htmlFor="">Password</label> <br />
                <input type="text" name='password' value={password}
                onChange={(e)=>setPassword(e.target.value)}/> <br />
                {
                    password && password.length < 8 &&
                    <span style={{color:'blueviolet'}}>At least two characters for your password!</span> 
                    
                }
            </div>
            <div>
                <label htmlFor="">Confirm Password</label> <br />
                <input type="text" name='confirm' value={confirm}
                onChange={(e)=>setConfirm(e.target.value)}/> <br />
                {
                    confirm && confirm.length !== password &&
                    <span style={{color:'blueviolet'}}>Must match password!</span>
                    
                }
            </div>


            <input type="submit" value="Create User" />

        </form>
        <Display firstname={firstname} lastname={lastname} email={email} password={password} confirm={confirm} />
    </div>
  )
}

export default Form