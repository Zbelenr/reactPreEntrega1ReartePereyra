import Header from "./components/Layout/Header/Header";
import EncabezadoEnvio from "./components/Layout/EncabezadoEnvio";
import Footer from "./components/Layout/Footer/Footer";
import SaludoUsuario from "./components/Saludousuario/SaludoUsuario";

function App() {
let nombreUsuario = "Zaira Belén"
  return (
    <div className="App">
      <EncabezadoEnvio>
     <Footer>
      <Header>
      </Header>
      <SaludoUsuario usuario={nombreUsuario} apellido= "Rearte Pereyra" edad= {24}/>
      
      </Footer>
      </EncabezadoEnvio>
    </div>
  );
}

export default App;
