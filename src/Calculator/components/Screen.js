import React from 'react'

const Screen= ({equation, result}) => {
    return (
        <div className = "screen">
            <h1 style={{fontSize:"40px", marginBottom : "3px", marginRight :"2rem"}}>{result}</h1>
            <p style={{fontWeight:'bold', marginRight: "2rem"}}>{equation}</p>
        </div>
    )
}

export default Screen
