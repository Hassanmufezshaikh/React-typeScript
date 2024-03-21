import React from 'react'
import {Name} from './personTypes'



type PersonListProps = {
    // nameList: {
    //     first: string
    //     last: string
    // }[]
    names : Name[]

}

 
export const PersonList =(props: PersonListProps) =>{
    
    return(
        <div>
            {
                props.names.map( name =>{
                    return (
                        <h1 key={name.first}> {name.first} {name.last}</h1>
                    )
                })
            }
        
    </div>
    )
}