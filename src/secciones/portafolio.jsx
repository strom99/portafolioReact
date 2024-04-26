import './portafolio.css'
import proyecto5 from '../assets/proyectos/proyecto5.png'
import proyecto1 from '../assets/proyectos/proyecto1.png'
import proyecto2 from '../assets/proyectos/proyecto2.png'
import proyecto3 from '../assets/proyectos/proyecto3.png'
import { useState } from 'react'
import { atRule } from 'postcss'


function Presentacion({ datos, estado, onClose }) {
    const [estadoAc, setEstadoAc] = useState(estado);


    return datos ?
        <div
            className="fixed bg-slate-100 w-full h-full z-[200] top-0 text-center overflow-auto right-0"
        >
            <header className="bg-[#085072] h-14 flex justify-end items-center pr-7">
                <button onClick={onClose} className="text-cyan-50 text-2xl font-bold" >
                    x
                </button>
            </header>
            <div className="">
                <h2 className="text-4xl font-black text-[#085072] m-6">
                    {datos.titulo}
                </h2>
                <div className="w-11/12 m-auto mt-3 mb-3">
                    <img className='max-w-screen-lg	m-auto' src={datos.img} alt="" />
                </div>
                <div className="w-11/12 block m-auto mt-5 mb-5">
                    <h4 className="text-lg text-start font-bold text-[#085072] mt-1">Caracteristicas</h4 >
                    <p>
                        {datos.descripcion}
                    </p>
                    <span>
                        {datos.ano}
                    </span>
                </div>
            </div>
        </div>
        : ''

}

function CartaImg({ value }) {
    const [adentro, setAdentro] = useState(false);

    console.log(adentro)

    return (<>
        <div
            onMouseEnter={(e) => {
                e.stopPropagation()
                setAdentro(true)
            }} onMouseLeave={() => setAdentro(false)} className={`h-full w-full flex items-center justify-center `}
        >
            <img
            className={` ${adentro ? 'hov' : ''}`}
                src={value.img} alt="" />
            <div
                className={'description absolute max-w-xs text-center z-30  font-bold ' + (adentro ? 'opacity-1' : 'opacity-0')}
            >
                <h2 className="text-2xl text-[#0A3143]">{value.titulo}</h2>
                <span className="text-[#276E90]">{value.tipo}</span>
                <p className="text-base text-slate-700 mt-2">
                    {value.descripcioncorta}
                </p>
                <span className="text-sm text-slate-500">{value.ano}</span>
            </div>
        </div>
    </>)
}


function Tartejas({ proyectos }) {
    const [estadoPresentacion, setEstadoPresentacion] = useState(false)
    const [showPresentacion, setShowPresentacion] = useState(null)
    function seleccionado(index, datos) {
        setShowPresentacion(datos)
    }


    function handleClose() {
        setShowPresentacion(null)

    }

    return <>
        {
            proyectos.map((e, index) => {
                return <button key={index} onClick={() => seleccionado(index, e)}

                    className="proyecto w-96 h-60 flex justify-center items-center cursor-pointer"
                >
                    <CartaImg value={e} />
                </button>
            })

        }
        {
            // estadoPresentacion ? <Presentacion datos={showPresentacion} estado={estadoPresentacion} /> :''

            <Presentacion datos={showPresentacion} onClose={handleClose} />
        }

    </>
}

export default function Portafolio() {

    const proyectos = [
        {
            titulo: 'Mensajes Random',
            tipo: 'Proyecto personal',
            img: proyecto5,
            descripcioncorta: 'Carga de mensajes random de una Api',
            descripcion:
                'Este proyecto fue una iniciativa personal en la que decidí conectarme a una API externa para obtener mensajes aleatorios y mostrarlos en mi sitio web. Para lograr esto, utilicé JavaScript para hacer una solicitud a la API y obtener los datos necesarios. Luego, utilicé HTML y CSS para crear una interfaz de usuario atractiva para mostrar los mensajes.',
            ano: '2021',
        },
        {
            titulo: 'George Prada',
            tipo: 'Stucom proyecto',
            img: proyecto1,
            descripcioncorta: 'Pagina para comprar productos online de gimnasio',
            descripcion:
                'Esta pagina fue un proyecto de primer año con un grupo de 4 compañeros, se decicio la idea de una pagina donde se vendan productos de gimnasio como ropa o cursos de entrenamiento para diferente tipo de objetivo. Se realizo con codigo HTML, CSS, JS, PHP para control de los datos antes de guardarlos en la BBDD y MYSQL para guardar los datos.',
            año: '2022',
        },
        {
            titulo: 'MyBalance',
            tipo: 'Proyecto personal',
            img: proyecto3,
            descripcioncorta:
                'Página para llevar un control de los gastos y ingresos de distintas cuentas',
            descripcion:
                'El proposito de esta pagina es controlar tus finanzas , tus ingresos y gastos , pudiendo crear distintas cuentas como una tarjeta de credito en la que destinas diferentes tipos de cuentas para un proposito, ya sea ahorro y proyecto. Tambien permitiria ver la evolucion de cada cuenta con graficos',
            año: '2022',
        },
        {
            titulo: 'Ouden',
            tipo: 'Stucom proyecto',
            img: proyecto2,
            descripcioncorta: 'Página para vender y buscar casas y planos en venta',
            descripcion:
                'Es un proyecto de ultimo año en mi Grado de DAW, es una pagina para vender y mostrar diseños de casas para construir , que publicarian empresas de construcciones para mas o menos ofrecer una estimacion de cuanto costaria cada construccion, ofreciendo un presupuesto al usuario y su contacto a la empresa.',
            año: '2023',
        },
    ];


    return <div
        className="flex items-center pt-[130px] px-5 sm:px-8 m:pt-0  pt-8 min-h-[90vh] gap-12 justify-between lg:container m-auto"
        id="proyecto"
    >
        <div id="portafolio" className="flex w-full px-4 sm:px-14 flex-col min-h-screen">
            <div className="mb-12">
                <h1 className="text-4xl font-black text-[#085072]">Portafolio</h1>
                <span className="text-lg font-bold text-[#085072c4] mt-1">Algunos de mis proyectos web</span>
                <p>
                    Estos son algunos de mis proyectos web desde que inicie en el mundo de la
                    programacion desde el 2021
                </p>
            </div>
            <div className="w-full flex flex-wrap items-center justify-center gap-14">
                <Tartejas proyectos={proyectos} />
            </div>
        </div >
        <div  >
            {/* <app-proyecto [pro] = "hijo"(close) = "show = false" ></app - proyecto > */}
        </div >
    </div>
}