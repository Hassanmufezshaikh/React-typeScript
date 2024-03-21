import React from 'react'
import {PersonProps} from './personTypes'


export const Person=(props:PersonProps) => {
    return(
    <div>
        <h3 id="textToCopy">{props.name.first} {props.name.last}</h3>
    </div>
    ) 
}