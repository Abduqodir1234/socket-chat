import { useEffect, useState } from "react"
import { ContactContainer } from "./styles"
import logo from "../../assets/img.png"

export const ContactList = ({contacts,currentUser,changeChat}) => {
    const [currentUsername,setCurrentUsername] = useState(undefined)
    const [currentSelected,setCurrentSelected] = useState(undefined)

    const changeCurrentChat = (index,contact) => {
        setCurrentSelected(index)
        changeChat(contact)
    }

    useEffect(()=>{
        if(currentUser){
            setCurrentUsername(currentUser.username)
        }
    },[])

    return <>
        {
            currentUsername && (
                <ContactContainer>
                    <div className="brand">
                        <img src={logo} alt="logo" className="logo" />
                        <h3>Snappy</h3>
                    </div>
                    <div className="contacts">
                        
                        {
                            contacts.map((contact,index)=>{
                                return (
                                    <div className={`contact ${index=== currentSelected ? 'selected' : ""}`} key={index} onClick={()=> changeCurrentChat(index,contact) }>
                                        <div className="avatar">
                                            <img 
                                                src="https://media.istockphoto.com/vectors/creative-vector-illustration-of-default-avatar-profile-placeholder-vector-id1008484130?k=20&m=1008484130&s=612x612&w=0&h=dzUWn2DtSaPPG0fdYGQrTefGu1IwZa1UZj7OGh0RgrI=" 
                                                alt="logo" 
                                            />
                                        </div>
                                        <div className="username">
                                            <h3>{contact.username}</h3>
                                        </div>
                                    </div>
                                )
                            })
                        }
                       
                    </div>
                    <div className="current-user">
                    <div className="avatar">
                        <img 
                            src="https://media.istockphoto.com/vectors/creative-vector-illustration-of-default-avatar-profile-placeholder-vector-id1008484130?k=20&m=1008484130&s=612x612&w=0&h=dzUWn2DtSaPPG0fdYGQrTefGu1IwZa1UZj7OGh0RgrI=" 
                            alt="logo" 
                        />
                    </div>
                    <div className="username">
                        <h2>{currentUsername}</h2>
                    </div>
                    </div>
                </ContactContainer>
            )
        }
    </>
}