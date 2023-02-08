const SaludoUsuario = ({usuario, apellido, edad}) => {
    
    return (
        <div>
            <h2>Hola {usuario} {apellido} </h2>
            <h3>Tenes {edad} años</h3>
            </div>
    )
}
export default SaludoUsuario