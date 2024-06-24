import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Hijo from './components/hijo';
import Validacion from './components/validacion';

function App() {

  const mensaje ="Hola hijo"
  const nombre = "Luis Lopez"

  useEffect(() => {
    console.log("Componente ha sido montado")
    return() => {
      console.log("Componente desmontado")
    }
  }, [])
  
  
  return (
    <div className="App">
      
      <body>
        <Hijo mensaje ={mensaje} nombre = {nombre}>
       
        </Hijo>

        
      </body>
    </div>
  );
}

export default App;
