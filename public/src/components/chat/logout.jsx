import { useNavigate } from "react-router-dom"
import {BiPowerOff} from "react-icons/bi"
import { LogoutButton } from "./styles"

export function Logout() {
    const navigate = useNavigate()
    const handleClick = () => {
        localStorage.clear()
        navigate("/login")
    }

    return <LogoutButton onClick={() => handleClick()}> <BiPowerOff /></LogoutButton>
}