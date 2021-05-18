import React from 'react'

export function Input(props) {
    return (
        <div className="form-group">
            <input className="form-control" {...props} />
        </div>
    )
}
export function SubmitButton(props) {
    return (
        <button {...props} className="btn submitBtn" style={{backgroundColor: "#048481", color: "white", marginBottom: "10px", marginTop:"5px"}}>Search</button>
    )
}