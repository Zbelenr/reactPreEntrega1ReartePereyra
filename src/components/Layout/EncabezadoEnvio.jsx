import React from 'react'
import IconoEnvio from '../IconoEnvio/IconoEnvio'

const EncabezadoEnvio = ({children}) => {
    
  return (
    <div>
        
        <h5 style={{backgroundColor:"black", color:"white", margin:"0", padding:"5px", textAlign:"center", display:"flex", justifyContent:"center"}}>Envío gratis en compras a partir de $10000 <IconoEnvio/></h5>
        
        {children}
    </div>
  )
}

export default EncabezadoEnvio