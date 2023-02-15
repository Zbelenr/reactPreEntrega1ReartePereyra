import { useState } from 'react'

const ItemCount = () => {

const [ contador, setContador ] = useState(0)
 const[ mostrar, setMostrar] = useState(false)


const sumar = () => {
  setContador ( contador + 1 )
}
const restar =() => {
  setContador ( contador - 1)
}

const cambiarEstado = () => {
  setMostrar (!mostrar)

}
    return (
    <div>
      <h1>El contador esta en {contador}</h1>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      <button onClick={cambiarEstado}>Mostrar</button>
    </div>
  )
    }

export default ItemCount