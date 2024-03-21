import React from "react"

type statusProps ={
    status: 'loading' | 'success' | 'error'
}

export const Status =(props : statusProps) => {
    let message 
    if(props.status === 'loading'){
        message ='Loading...'
    } else if(props.status === 'success'){
        message ='Data fetching Successfully!'
    } else if(props.status === 'error'){
        message ='Error fetching data [status Component]'
    }
    return(
        <div>
            {/* <h2>Loading..</h2>
            <h2>Data fetching successfully!</h2>
            <h2>Error Fetching Data</h2> */}
            <h2>Status - {message}</h2>

        </div>
    )
}