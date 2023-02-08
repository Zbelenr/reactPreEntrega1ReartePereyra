
import {Navbar} from "../Navbar/Navbar"
import CartWidget from "../CartWidget/CartWidget"


const Header = ()=>{
    return (
        <div style={{display: "flex", width:"100%", height: "20vh", justifyContent: "space-between", alignItems: "center", backgroundColor:"red"}}>
            <h1>Maldito sistema</h1>
            <Navbar/>
            <CartWidget />
        </div>
    )
}

export default Header