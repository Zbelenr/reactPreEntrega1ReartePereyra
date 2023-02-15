import Header from "./components/Layout/Header/Header";
import EncabezadoEnvio from "./components/Layout/EncabezadoEnvio";
import Footer from "./components/Layout/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemCount from "./components/ItemCount/ItemCount.jsx"

function App() {
let nombreUsuario = "Zaira Belén"
  return (

      <EncabezadoEnvio>
      <Header/>
      <ItemListContainer usuario={nombreUsuario} apellido= "Rearte Pereyra" edad= {24}/>
      <ItemCount/>
      <Footer/>
      </EncabezadoEnvio>
  );
}

export default App;
