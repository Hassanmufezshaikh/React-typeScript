import { useReducer } from "react";

type CounterState ={
    count : number
}


// follow tgis procedure deiscrementated union 

type UpdateAction ={
    // if we pass string one issue was that it was taking any string but when we pass below particular words that issue wont occur.
    type: 'increment' | 'decrement'
    payload:number
}
type ResetAction ={
    // if we pass string one issue was that it was taking any string but when we pass below particular words that issue wont occur.
    type: 'reset'
}
type CounterAction = UpdateAction | ResetAction
const initialState = { count :0}

const reducer = (state:CounterState, action:CounterAction) => {
    switch (action.type) {
      case "increment":
        return { count : state.count + action.payload}
      case "decrement":
        return { count : state.count - action.payload}
      case "reset":
        return initialState
      default:
        return state;
    }
  }; 

export const Counter =() =>{
    const [state, dispatch] =useReducer(reducer,initialState)
    return(
        <>
        Count: {state.count}
        <button onClick={()=> dispatch({type:'increment',payload:10})}>Increment 10</button>
        <button onClick={()=> dispatch({type:'decrement',payload:10})}>Increment 10</button>
        <button onClick={()=> dispatch({type:'reset'})}>Reset</button>
        </>
    )
}