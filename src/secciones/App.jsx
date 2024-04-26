import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../secciones/App.css'
import Header from '../components/header'
import Footer from '../components/footer'
import Inicio from './inicio/inicio'
import Sobremi from './sobre_mi/sobre_mi'
import Conocimientos from './conocimientos'
import Portafolio from './portafolio'

function App() {
  const [count, setCount] = useState(0)

  window.addEventListener('scroll',function(){
    console.log('hola')
  })

  return (
    <>
    <Header/>
    <Inicio/>
    <Sobremi/>
    <Conocimientos/>
    <Portafolio/>
    <Footer/>
    </>
  )
}

export default App
