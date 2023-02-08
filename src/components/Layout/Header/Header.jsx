
import {Navbar} from "../Navbar/Navbar"
import CartWidget from "../../CartWidget/CartWidget"


const Header = ({children})=>{
    return (
        <div style={{display: "flex",justifyContent: "space-between", alignItems: "center", backgroundColor:"red", padding:"10px"}}>
            <h1>Maldito sistema</h1>
            <Navbar/>
            <CartWidget />
           {children}
        </div> 
        
    )
}

export default Header