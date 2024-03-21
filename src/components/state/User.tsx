import {useState} from 'react'

type AuthUser ={
    name : string
    email : string

}
export const User = () => {
    const [User, setUser] = useState<AuthUser | null>(null)
    const handleLogin = () =>{
        setUser({
            name : 'Hassan Mufez',
            email : 'hassanmufezshaikhhh@gmail.com',
        })
    }
    const handleLogout = () =>{
        setUser(null)

    }

    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {User?.name}</div>
            <div>User name is {User?.email}</div>
        </div>
    )


}