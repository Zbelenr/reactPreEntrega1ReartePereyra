import doit1 from "../../Img/1.png"
import doit2 from "../../Img/2.png"
import doit3 from "../../Img/3.png"
const ItemListContainer = ({usuario, apellido, edad}) => {
    
    return (
        <>
            <h2>Hola {usuario} {apellido} </h2>
            <h3>Tenes {edad} años</h3>
            <img src={doit1} alt="" />
            <img src={doit2} alt="" />
            <img src={doit3} alt="" />
            </>
    )
}
export default ItemListContainer