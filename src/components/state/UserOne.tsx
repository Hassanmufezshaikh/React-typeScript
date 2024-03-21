import {useState} from 'react'

type AuthUser ={
    name : string
    email : string

}
export const UserOne = () => {
    const [User, setUser] = useState<AuthUser>({} as AuthUser)
    const handleLogin = () =>{
        setUser({
            name : 'Hassan Mufez',
            email : 'hassanmufezshaikhhh@gmail.com',
        })
    }

    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <div>User name is {User.name}</div>
            <div>User name is {User.email}</div>
        </div>
    )


}