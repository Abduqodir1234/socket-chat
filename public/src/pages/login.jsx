import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { FormContainer } from '../components/login/styles';
import logo from '../assets/img.png';

export const toastOptions = {
  position:"bottom-right",
  autoClose:8000,
  pauseOnHover:true,
  draggable:true,
  theme:"dark",
  delay:0
}


export default function Login(){
  const navigate = useNavigate()

  const [values,setValues] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(handleValidation(values)){
      try {
        const data = await axios.post("/user/login", values)
        if (data.status === 200){
          toast.success("Logged in Successfully", toastOptions)
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
    const {password,username} = data
    if(username.length < 3){
      toast.error("Username should include more than 3 characters",toastOptions)
      return false;
    }
    else if(password < 8) {
      toast.error("Password should include more than 8 characters", toastOptions)
      return false;
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
          type='password'
          name='password'
          placeholder="Password"
          onChange={(e)=>handleChange(e)}
        />

        <button type="submit" > Log in </button>

        <span>
        Don't have an account?
        <Link to="/register"> Register</Link>
      </span>

      </form>

    </FormContainer>

    <ToastContainer />
  </>
}