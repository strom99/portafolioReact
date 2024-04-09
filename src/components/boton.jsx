import './boton.css'

export default function EnlaceBtn({text,ruta}){
    return (<>
        <a className="btn-general" href={ruta}>{text}</a>
    </>)
}