import React from 'react'

const Footer = ({children}) => {
  return (
    <div>
        {children}
        <h3 style={{backgroundColor:"black", color:"red"}}>footer</h3>
    </div>
  )
}

export default Footer