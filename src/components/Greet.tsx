import React from "react"

type Greetprops ={
    name: string
    messageCount?: number
    isLoggedIn: boolean

}

export const Greet= ({name,isLoggedIn, messageCount=0 }:Greetprops) =>{
  
    return(
        <div>
        {/* <h1>Hello {props.name}, you have sucessfully wrote typeScript-react program {props.messageCount} times </h1> */}
        <h1>        {
            isLoggedIn ? `Welcome ${name}! You have ${messageCount} unread messages` : `Welcome guest`
        }</h1>

        </div>
    )
}