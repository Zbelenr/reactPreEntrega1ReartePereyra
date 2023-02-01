import Navbar from "./Navbar";

function App() {

const apellido = "Rearte Pereyra"

const sumar = ()=> {
  console.log( 'Hola Zaira Belén ${apellido}')
}


  return (
    <div className="App">
       <h1>{apellido}</h1>
      <button onClick={sumar}>Sumar</button>
      <Navbar />
    </div>
  );
}

export default App;
