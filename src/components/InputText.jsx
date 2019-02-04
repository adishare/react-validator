import React from 'react'

const InputText = (props) => {

    const { label , placeholder, id, value, handleChange } = props

    return (
        <>
            <small className="text-muted"> {label} </small>
            <input type="text" className="form-control" id={id} placeholder={placeholder} value={value} onChange={handleChange}  />
        </>
    )
}

export default InputText


