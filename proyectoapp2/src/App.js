import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Hijo from './components/hijo';
import Validacion from './components/validacion';

function App() {

  const mensaje ="Hola hijo"

  useEffect(() => {
    console.log("Componente ha sido montado")
    return() => {
      console.log("Componente desmontado")
    }
  }, [])
  
  
  return (
    <div className="App">
      
      <body>
        <Hijo mensaje ={mensaje}>
        <Validacion nombre="Luis Lopez" />
        </Hijo>

        
      </body>
    </div>
  );
}

export default App;
