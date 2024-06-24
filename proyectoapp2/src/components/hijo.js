import Validacion from "./validacion";

export default function Hijo(props){
    return(
        <div>
            <h1>Mensaje desde el padre: {props.mensaje}</h1>
            <Validacion nombre={props.nombre}/>
        </div>
    )
}