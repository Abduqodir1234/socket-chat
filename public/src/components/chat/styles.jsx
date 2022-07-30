import styled from "styled-components";

export const Container = styled.div`
 height: 100vh;
 width: 100vw;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 gap: 1rem;
 background-color: #131324;
 

 .container{
  height: 85vh;
  width: 85vw;
  background-color: #00000076;
  display: grid;
  border-radius: 25px;
  grid-template-columns: 25% 75%;
  @media screen and (min-width: 720px) and (max-width:1080px) {
    grid-template-columns: 35% 65%;
  }
 }
`;

export const ContactContainer = styled.div`
    display: grid;
    grid-template-rows: 10% 75% 15%;
    overflow: hidden;
    background-color: #080420;
    height: 100%;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    height: 570px;
    .brand {
        display: flex;
        align-items: center;
        justify-content: center;
        gap:1rem;

        img {
            height: 50px;
        }

        h3 {
            color: white;
            text-transform: uppercase;

        }
    }

    .contacts {
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: auto;
        gap: 0.8rem;

        &::-webkit-scrollbar{
            width: 0.2rem;
            &-thumb {
                background-color: #ffffff39;
                width: 0.1rem;
                border-radius:1rem;
            }
        }

        .contact {
            background-color: #ffffff39;
            min-height: 5rem;
            width: 90%;
            cursor: pointer;
            border-radius: 0.2 rem;
            padding: 1rem;
            gap: 1rem;
            align-items: center;
            display: flex;
            transition: 0.5ms ease-in-out;
            border-radius: 5px;


            .avatar {
                img {
                    height: 2rem;
                    border-radius: 15px;
                }
            }

            .username {
                h3 {
                    color: white;
                }
            }
        }
        .selected {
            background-color: #9186f3;
        }
    }

    .current-user{
        background-color: #0d0d30;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        .avatar {
            img {
                height: 4rem;
                max-inline-size: 100%;
                border-radius: 35px;
            }
        }
        .username {
            h2 {
                color: white;
            }
        }

        @media screen and (min-width: 720px) and (max-width: 1080px) {
            gap: 0.5rem;
            .username {
                h2 {
                    font-size: 1rem;
                }
            }
        }
    }
`;

export const WelcomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color:white;


    img {
        height: 20rem;
    }

    span {
        color: #4e00ff
    }

`;

export const ChatBoxContainer = styled.div`
    padding-top:1rem;
    height: 570px;
    .chat-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.2rem;
        .user-details{
            position: relative;
            display: flex;
            align-items: center;
            width: 100%;
            gap: 1rem;
            
            .avatar {
                img {
                    
                    height: 3rem;
                    border-radius: 25px;
                }
            }

            .username {
                h3 {
                    color: white;
                }
            }
        }
    }

    .chat-messages {
        display: flex;
        flex-direction: column;
        overflow: auto;
        overflow: auto;
        padding: 1rem 2rem;
        gap: 1rem;
        height: 77%;

        &::-webkit-scrollbar{
            background-color: #080420;
            width: 5px;

            &-thumb{
                background-color: #9a86f3;
            }
        }
        .message{
            display: flex;
            align-items: center;
            .content{
                max-width: 40%;
                overflow-wrap: break-word;
                padding: 1rem;
                font-size: 1.1rem;
                border-radius: 1rem;
                color: #d1d1d1;
            }
        }
        .sended {
            justify-content: flex-end;
            .content{
                background-color: #4f04ff21;
            }
        }

        .received {
            justify-content: flex-start;
            .content{
                background-color: #9900ff20;
            }
        }


    }
`

export const LogoutButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background-color: #9a86f3;
    border: none;
    cursor: pointer;
    position: absolute;
    right: 15px;
    svg {
        font-size: 1.3rem;
        color: #ebe7ff
    }
`;

export const MessageInputContainer = styled.div`
    display: grid;
    grid-template-columns: 5% 95%;
    align-items: center;
    background-color: #080420;
    padding: 0 2rem;
    padding-bottom: 0.3rem;
    border-bottom-right-radius: 25px;
    .button-container {
        display: flex;
        align-items: center;
        color:white;
        gap:1rem;
        .emoji {
            position: relative;
            svg {
                font-size: 1.5rem;
                color:#ffff00c7;
                cursor: pointer;

            }

            .emoji-picker-react {
                position: absolute;
                top: -350px;
                background-color: #080420;
                box-shadow: 0 5px 10px #9a86f3;
                border-color: #9a86f3;

                

                .emoji-scroll-wrapper::-webkit-scrollbar{
                    background-color: #080420;
                    width: 5px;

                    &-thumb{
                        background-color: #9a86f3;
                    }
                }
                .emoji-categories {
                    button {
                        filter: contrast(0);
                    }
                    
                }

                .emoji-search{
                    background: transparent;
                    border-color: #9186f3;

                }

                .emoji-group:before {
                    background-color: #080420;
                }


            }
        }

    }
    .input-container{
        width: 100%;
        border-radius: 2rem;
        display: flex;
        align-items: center;
        gap: 2rem;
        background-color: #ffffff34;
        input{
            width: 90%;
            height: 60%;
            background-color: transparent;
            color:white;
            border: none;
            padding-left: 1rem;
            font-size:1.2rem;

            &::selection{
                background-color: 9186f3;
            }

            &:focus{
                outline: none;
            }


        }

        button {
            padding: 1rem 2.5rem 1rem;
            border-radius: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #9a86f3;
            border: none;

            border: none;
            svg {
                font-size: 2rem;
                color:white;

            }
        }
    }
`;

export const MessagesContainer = styled.div`
    height: 80%;
`;