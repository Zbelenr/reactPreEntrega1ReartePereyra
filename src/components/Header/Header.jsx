
import {Navbar} from "../Navbar/Navbar"
import CartWidget from "../CartWidget/CartWidget"


const Header = ()=>{
    return (
        <div style={{display: "flex", width:"100%", height: "20vh", justifyContent: "space-between", alignItems: "center"}}>
            <h2>envío gratis a partir de $10000</h2>
            <Navbar/>
            <CartWidget />
        </div>
    )
}

export default Header