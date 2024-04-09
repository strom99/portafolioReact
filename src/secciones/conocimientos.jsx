
import { useState } from 'react'
import './conocimientos.css'

function Esferas(){
    const [abierto,setAbierto] = useState(false);
    console.log(abierto)
    return (
        <div
        className="menu cursor-pointer relative w-[350px] h-[350px] flex justify-center items-center"
    >
        <div
            onClick={() => setAbierto(!abierto)}
            className="toggle w-[130px] h-[130px] bg-white flex flex-col justify-center items-center z-10 rounded-full shadow-md shadow-slate-500"
        >
            <div className="w-10 icono">
                <img src="../../../assets/img/mas.png" alt="" />
            </div>
            <h3 className="">Frontend</h3>
        </div>
        <li style={{"--i": 0}}>
            <a href="">
                <img src="../../../assets/img/html.png" alt="" />
            </a>
        </li>
        <li style={{'--i': 1}}>
            <a href="">
                <img src="../../../assets/img/css.png" alt="" />
            </a>
        </li>
        <li style={{'--i': 2}}>
            <a href=""  >
                <img src="../../../assets/img/tailwind.png" alt="" />
            </a>
        </li>
        <li style={{'--i': 3}}>
            <a href="">
                <img src="../../../assets/img/js.png" alt="" />
            </a>
        </li>
        <li style={{'--i': 4}}>
            <a href="">
                <img src="../../../assets/img/angular.png" alt="" />
            </a>
        </li>
    </div>
    )
}
export default function Conocimientos() {
    return (
            <div className="flex w-full px-2 md:px-14 flex-col py-6" id="conocimientos">
                <div className="mb-10">
                    <h1 className="text-4xl font-black text-[#0A3143]">Conocimientos</h1>
                    <span className="text-lg font-bold text-[#276E90] mt-1">Mis habilidades en...</span
                    >
                </div>
                <div className="flex justify-evenly mt-5 mb-16 flex-wrap">
                    <Esferas/>
                    {/* <div
                        className="cursor-pointer menu2 relative w-[350px] h-[350px] flex justify-center items-center"
                    >
                        <div
                            className="toggle w-[130px] h-[130px] bg-white flex flex-col justify-center items-center z-10 rounded-full shadow-md shadow-slate-500"
                        >
                            <div className="w-10 icono2">
                                <img src="../../../assets/img/mas.png" alt="" />
                            </div>
                            <h3 className="">Backend</h3>
                        </div>
                        <li style="--i: 0">
                            <a href="">
                                <img src="../../../assets/img/java.png" alt="" />
                            </a>
                        </li>
                        <li style="--i: 1">
                            <a href="">
                                <img src="../../../assets/img/php.png" alt="" />
                            </a>
                        </li>
                        <li style="--i: 2">
                            <a href="">
                                <img src="../../../assets/img/mysql.png" alt="" />
                            </a>
                        </li>
                        <li style="--i: 3">
                            <a href="">
                                <img src="../../../assets/img/symfony.png" alt="" />
                            </a>
                        </li>
                        <li style="--i: 4">
                            <a href="">
                                <img src="../../../assets/img/laravel.png" alt="" />
                            </a>
                        </li>
                    </div>
                    <div
                        className="cursor-pointer menu3 relative w-[350px] h-[350px] flex justify-center items-center"
                    >
                        <div
                            className="toggle w-[130px] h-[130px] bg-white flex flex-col justify-center items-center z-10 rounded-full shadow-md shadow-slate-500"
                        >
                            <div className="w-10 icono3">
                                <img src="../../../assets/img/mas.png" alt="" />
                            </div>
                            <h3 className="">Herramientas</h3>
                        </div>
                        <li style="--i: 0">
                            <a href="">
                                <img src="../../../assets/img/git.png" alt="" />
                            </a>
                        </li>
                        <li style="--i: 1">
                            <a href="">
                                <img src="../../../assets/img/visual.png" alt="" />
                            </a>
                        </li>
                        <li style="--i: 2">
                            <a href="">
                                <img src="../../../assets/img/intellij.png" alt="" />
                            </a>
                        </li>
                        <li style="--i: 3">
                            <a href="">
                                <img src="../../../assets/img/linux.png" alt="" />
                            </a>
                        </li>
                        <li style="--i: 4">
                            <a href="">
                                <img src="../../../assets/img/figma.png" alt="" />
                            </a>
                        </li>
                    </div > */}
                </div >
            </div >
    )
}