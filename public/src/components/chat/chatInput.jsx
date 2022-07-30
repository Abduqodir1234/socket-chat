import {IoMdSend} from "react-icons/io"
import {BsEmojiSmile} from "react-icons/bs"
import { MessageInputContainer } from "./styles"
import { useEffect, useRef, useState } from "react"
import Picker from "emoji-picker-react"
export function ChatInput({currentChat ,handleSendMessage}) {
    const [showEmojiPicker,setShowEmojiPicker] = useState(false);
    const [msg,setMsg] = useState("")
    const inputAutoFocus = useRef()

    useEffect(()=>{
        inputAutoFocus.current.focus()
    },[currentChat])

    const handleEmojiPickerClick = () => {
        setShowEmojiPicker(!showEmojiPicker)
    } 

    const sendMsg = (e) => {
        e.preventDefault()
        if(msg.length > 0){
            handleSendMessage(msg)
            setMsg("")
        }
    }

    const handleEmojiClick = (event,emoji) => {
        let message = msg
        message += emoji.emoji
        setMsg(message)
    }
    return (
        <MessageInputContainer>
            <div className="button-container">
                <div className="emoji">
                    <BsEmojiSmile onClick={()=> handleEmojiPickerClick()} />
                    {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} /> }
                </div>
            </div>

            <form className="input-container" onSubmit={sendMsg}>
                <input ref={inputAutoFocus}  type="text" name="messsage" value={msg} onChange= { (e) => setMsg(e.target.value)} placeholder="Type your message here" id="" />

                <button className="submit">
                    <IoMdSend />
                </button>
            </form>

        </MessageInputContainer>
    )
} 