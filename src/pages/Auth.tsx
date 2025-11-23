import React, { useState } from "react";
import { supabase } from "../supabase";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) alert(error.message);
    else alert("check your mail for confirmation!");
  };

  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) alert(error.message);
    else alert("logged in successfully!");
  };

  return (
    <>
      <div className="flex justify-center items-center bg-blue-100 p-2 h-screen">
        <form className="flex flex-col gap-2 justify-center items-center bg-white p-4 rounded shadow">
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            placeholder="example@gmail.com"
          />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="password"
          />

          <button type="button" onClick={handleSignUp}>
            Sign UP
          </button>
          <button type="button" onClick={handleSignIn}>
            Sign In
          </button>
        </form>
      </div>
    </>
  );
};

export default Auth;
