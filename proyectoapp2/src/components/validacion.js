import PropTypes from 'prop-types'

export default function Validacion(props){
    return <div><h1>Hola: {props.nombre}!</h1></div>
}

Validacion.propTypes = {nombre: PropTypes.string.isRequired}
