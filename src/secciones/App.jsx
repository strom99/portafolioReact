import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../secciones/App.css'
import Header from '../components/header'
import Inicio from './inicio/inicio'
import Sobremi from './sobre_mi/sobre_mi'
import Conocimientos from './conocimientos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Inicio/>
    <Sobremi/>
    <Conocimientos/>
    </>
  )
}

export default App
