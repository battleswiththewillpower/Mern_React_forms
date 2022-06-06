import React from 'react'

export const Display = (props) => {
  return (
    <div>
        <p>Firstname: {props.firstname}</p>
        <p>Lastname: {props.lastname}</p>
        <p>Email: {props.email}</p>
        <p>Password: {props.password}</p>
        <p>Confirm: {props.confirm}</p>
        </div>
  )
}
