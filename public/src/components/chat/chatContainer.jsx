import axios from "axios";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { toastOptions } from "../../pages/login";
import { ChatInput } from "./chatInput";
import { Logout } from "./logout";
import { ChatBoxContainer } from "./styles";
export function ChatContainer({currentChat,messages,socket,setmessages}) {

    const scrollRef = useRef()

    const currentUser = JSON.parse(localStorage.getItem("user"))

    useEffect(()=>{
        scrollRef.current?.scrollIntoView({behavior:"smooth"})
    },[messages])

    const handleSendMessage = async (msg) => {
        try{
            const formData = {
                sender:currentUser._id,
                receiver:currentChat._id,
                message:msg
            }
            const data = await axios.post("/messages/add",formData)
            const msgs = [...messages]
            msgs.push(formData)
            setmessages(msgs)
            socket.current.emit("send-msg",formData)
        } catch(e){
            return toast.error(e.response.data.message,toastOptions)
        }
    }

    return (
        <ChatBoxContainer>
            <div className="chat-header">
                <div className="user-details">
                    <div className="avatar">
                        <img 
                            src="https://media.istockphoto.com/vectors/creative-vector-illustration-of-default-avatar-profile-placeholder-vector-id1008484130?k=20&m=1008484130&s=612x612&w=0&h=dzUWn2DtSaPPG0fdYGQrTefGu1IwZa1UZj7OGh0RgrI=" 
                            alt="avatar" 
                        />
                    </div>
                    <div className="username">
                        <h3>{currentChat.username}</h3>
                    </div>
                    <Logout />
                </div>
            </div>
            <div className="chat-messages">
                {messages?.map((message,index)=>{
                    return(
                        <div key={index} ref={scrollRef}>
                            <div className={`message ${message.sender === currentUser._id ? "sended" : "received"}`} >
                                <div className="content">
                                    <p>
                                        {message.message}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )   
                })}
            </div>
            <ChatInput currentChat={currentChat} handleSendMessage = {handleSendMessage} />
        </ChatBoxContainer>
    )
}