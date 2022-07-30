import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { ChatContainer } from '../components/chat/chatContainer';
import { ContactList } from '../components/chat/contact';
import { Container } from '../components/chat/styles';
import { Welcome } from '../components/chat/welcome';
import { toastOptions } from './login';
import {io} from "socket.io-client"


export default function Chat (){
  const socket = useRef()
  const navigate = useNavigate()
  const [contacts,setcontacts] = useState([])
  const [currentChat,setCurrentChat] = useState(undefined)
  const [messages,setmessages] = useState([])
  
  useEffect(()=>{
    let currentUser = JSON.parse(localStorage.getItem("user"))
    if(currentUser){
      socket.current = io("http://localhost:5000")
      socket.current.on("received-msg",(data)=>{
        if(data?.receiver === currentUser._id){ 
            setmessages(old=>{
              const isNotExists = old.every(one=>{
                return one._id !== data._id
              })
              if(isNotExists){
                return [...old,...[data]]
              } else{
                return old
              }
            })
        }
      })
    }
  },[])

  useEffect(()=>{
    let user = JSON.parse(localStorage.getItem("user"))
    if(user && currentChat){
      axios.get(`/messages/${user?._id}/${currentChat?._id}`)
      .then(res=>{
        setmessages(res.data.data)
      })
      .catch(e=>null)
    }
  },[currentChat])


  useEffect(() => {
      const userId = JSON.parse(localStorage.getItem("user"))?._id

      if(!userId){
        navigate("/login")
      }
      axios.get(`/user/allusers/${userId}`)
        .then(res=>{
          setcontacts(res.data.data)
        })
        .catch(e=>toast.error("Could fetch contacts",toastOptions))

  },[])


  const handleChatChange = (chat) => {
    setCurrentChat(chat)
  }

  return <Container>
    <div className='container' >
      <ContactList changeChat = {handleChatChange} contacts = {contacts} currentUser = {JSON.parse(localStorage.getItem("user"))} />
      {
        currentChat=== undefined ? 
        <Welcome user={JSON.parse(localStorage.getItem("user"))} /> 
        : 
        <ChatContainer socket={socket} setmessages = {(e)=>setmessages(e)} messages = {messages} currentChat={currentChat}/>
      }
    </div>
  </Container>
}

