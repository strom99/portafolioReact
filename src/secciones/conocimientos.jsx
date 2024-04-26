
import { useState } from 'react'
import './conocimientos.css'
import mas from '../assets/mas.png'
import menos from '../assets/menos.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import tailwind from '../assets/tailwind.png'
import js from '../assets/js.png'
import angular from '../assets/angular.png'
import java from '../assets/java.png'
import php from '../assets/php.png'
import mysql from '../assets/mysql.png'
import symfony from '../assets/symfony.png'
import laravel from '../assets/laravel.png'
import visual from '../assets/visual.png'
import intellij from '../assets/intellij.png'
import git from '../assets/git.png'
import linux from '../assets/linux.png'
import figma from '../assets/figma.png'

function Esferas({name, imagenes }) {
    const [abierto, setAbierto] = useState(true);

    function handleClick(e) {
        const menu = e.target.closest('.menu')
        
        setTimeout(() => {
            setAbierto(!abierto);
        }, 200);
        // setAbierto(!abierto)

        const lis = menu.querySelectorAll('li');
        lis.forEach(li => {
            li.classList.toggle('animacion');
        });
    };

    return (
        <div
            className="menu cursor-pointer relative w-[350px] h-[350px] flex justify-center items-center "
        >
            <div
                onClick={handleClick}
                className="toggle w-[130px] h-[130px] bg-white flex flex-col justify-center items-center z-10 rounded-full shadow-md shadow-slate-500"
            >
                <div className={`w-10 icono ${abierto ? 'active' : ''}`}>
                    <img className='w-[50px] h-[40px] object-contain tran' src={abierto ? mas : menos} alt="" />
                </div>
                <h3 className="">{name}</h3>
            </div>
            <ul className='flex items-center'>
                {
                    imagenes.map((e, index) => {
                        return <li key={index} style={{ "--i": index }}>
                            <a href="">
                                <img src={e} alt="" />
                            </a>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default function Conocimientos() {
    return (
        <div
            className="flex items-center sm:pt-[100px] px-5 sm:px-8  pt-[100px] min-h-[90vh] gap-12 justify-between lg:container m-auto"
            id="conocimientos"
        >
            <div className="flex w-full px-2 md:px-14 flex-col py-6" id="">
                <div className="mb-10">
                    <h1 className="text-4xl font-black text-[#0A3143]">Conocimientos</h1>
                    <span className="text-lg font-bold text-[#085072c4] mt-1">Mis habilidades en...</span
                    >
                </div>
                <div className="flex justify-evenly mt-5 mb-16 flex-wrap">
                    <Esferas name="Frontend" imagenes={[html, css, tailwind, js, angular]} />
                    <Esferas name="Backend" imagenes={[java, php, mysql, symfony, laravel]} />
                    <Esferas name="Herramientas" imagenes={[git, visual, intellij, linux, figma]} />
                </div >
            </div >
        </div>
    )
}