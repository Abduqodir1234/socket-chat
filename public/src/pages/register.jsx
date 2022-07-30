import React, { useState } from 'react';
import { FormContainer } from '../components/register/styles';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/img.png"
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import axios from 'axios';

const toastOptions = {
  position:"bottom-right",
  autoClose:8000,
  pauseOnHover:true,
  draggable:true,
  theme:"dark",
  delay:0
}

export default  function Register(){
  const navigate = useNavigate()

  const [values,setValues] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(handleValidation(values)){
      try {
        const data = await axios.post("/user/register", values)
        if (data.status === 201){
          toast.success("Registered Successfully", toastOptions)
          localStorage.setItem("user",JSON.stringify(data.data.data))
          navigate("/")
        }
      } catch (e) {
        toast.error(e.response.data.message,toastOptions)
      }
    }
  }

  const handleChange = (e) => {
    setValues({...values,[e.target.name]:e.target.value})

  }

  const handleValidation = (data) => {
    const {email,password,username,confirm_password} = data
    if(confirm_password !== password){
      toast.error("password and confirm password should be same",toastOptions)
      return false;
    }
    else if(username.length < 3){
      toast.error("Username should include more than 3 characters",toastOptions)
      return false;
    }
    else if(password < 8){
      toast.error("Password should include more than 8 characters",toastOptions)
      return false;
    } else if(email === ""){
      toast.error("Email is required",toastOptions)
      return false
    }
    return true
  }

  return<>
    <FormContainer>

    <form onSubmit={handleSubmit}>

      <div className="brand">
        <img src={logo} alt='' srcset='' />
        <h1>Snappy</h1>
      </div>

      <input
        type='text'
        name='username'
        placeholder="Username"
        onChange={(e)=>handleChange(e)}
      />

      <input
        type='text'
        name='email'
        placeholder="Email"
        onChange={(e)=>handleChange(e)}
      />

      <input
        type='password'
        name='password'
        placeholder="Password"
        onChange={(e)=>handleChange(e)}
      />

      <input
        type='password'
        name='confirm_password'
        placeholder="Confirm password"
        onChange={(e)=>handleChange(e)}
      />

      <button type="submit" > Create User </button>

      <span>
        Already have an account?
        <Link to="/login"> Login</Link>
      </span>

    </form>

  </FormContainer>

  <ToastContainer />
  </>
}