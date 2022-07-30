import { WelcomeContainer } from "./styles";
import robot from "../../assets/robot.gif"

export function Welcome({user}) {
    return (
        <WelcomeContainer>
            <img height={350} src={robot} alt="" />
            <h1>
                Welcome <span>{user.username}</span>
            </h1>
            <h3>Please select chat to start messaging</h3>
        </WelcomeContainer>
    )
}