import CartWidget from "../../CartWidget/CartWidget"

export const Navbar = ()=>{

    return (
       <div style={{display: "flex",justifyContent: "space-between", alignItems: "center", backgroundColor:"red", padding:"10px"}}> 
        <h1>Maldito sistema</h1>
       <ul style= {{listStyle:"none", display:"flex"}}>
            <li style={{margin:"10px"}}>Remeras</li>
        <li style={{margin:"10px"}}>Gorras</li>
        <li style={{margin:"10px"}}>Contacto</li>
        <li style={{margin:"10px"}}>Quienes somos</li>
       </ul> 
       <CartWidget/>
       </div>
    )
}

export default Navbar