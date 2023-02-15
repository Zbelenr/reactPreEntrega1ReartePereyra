
import {Navbar} from "../Navbar/Navbar"



const Header = ({children})=>{
    return (
        <div>
            <Navbar/>
           {children}
        </div> 
        
    )
}

export default Header