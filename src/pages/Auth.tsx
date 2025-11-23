import React, { useState } from 'react'
import { supabase } from '../supabase';

const Auth = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const handleEmailChange = (e : any) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e : any) => {
        setPassword(e.target.value);
    }

    const handleSignUp = async () => {
        
        const {data, error} = await supabase.auth.signUp( {
            email, password
        });

        if (error) alert(error.message);
        else alert('check your mail for confirmation!');
    }

    const handleSignIn = async () => {

        const {data, error} = await supabase.auth.signInWithPassword( {
            email, password
        });

        if (error) alert(error.message);
        else alert("logged in successfully!");
    }

  return (
    <>

    <form >

        <input type="text" value={email} onChange={handleEmailChange} />
        <input type="password" value={password} onChange={handlePasswordChange} />

        <button onClick={handleSignUp} >Sign UP</button>
        <button onClick={handleSignIn} >Sign In</button>

    </form>
    </>
  )
}

export default Auth