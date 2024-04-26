import './header.css'
import logoWeb from '../assets/logo.svg'
import menuImg from '../assets/menu.png'
import { useState } from 'react';



function Navegador(e) {
    return (
        <nav className={`navegador md:border-0  border-l-2 border-b-2 border-[#dddddd] transition-all duration-75 flex gap-6 bg-white z-10 p-5 flex-col text-end top-[68px] absolute md:relative md:flex-row md:text-center md:right-0 md:top-0 ${e.inter ? 'right-[-20px]' : 'right-[-200px]'}`}>
            <a href="#inicio">Inicio</a>
            <a href="#sobremi">Sobre Mi</a>
            <a href="#conocimientos">Conociminetos</a>
            <a href="#proyecto">Proyectos</a>
        </nav>
    )

}

export default function Header() {
    const [toggle, setToggle] = useState(false);

    function navMovil() {
        setToggle(!toggle)
    }

    return (<>
        <header className='mb-3 fixed z-50 w-full bg-white'>
            <div className='flex justify-between m-auto items-center px-5 lg:container'>
                <img className='pb-2  h-[90px]' src={logoWeb} alt="" />
                <div className='relative'>
                    <button onClick={navMovil} className='w-[40px] imgHamburguer md:hidden hover:brightness-150 transition-all'><img className='' src={menuImg} alt="" /></button>
                    <Navegador inter={toggle} />
                </div>
            </div>
            <div className='linea bg-[#8d8d8d] opacity-30 h-[2px] w-full drop-shadow-3xl'></div>
        </header>
    </>);
}