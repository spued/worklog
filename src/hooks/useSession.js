import { useContext } from "react"
import { AuthContext } from "../contextes/AuthContext"

export const useSession = () => {
    const { user } = useContext(AuthContext)
    return user
}