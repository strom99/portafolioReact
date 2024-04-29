import './sobre_mi.css'
import foto from '../../assets/foto.png';
import curriculum from '../../assets/pdf/cv_alisson_dev.pdf';
import documental from '../../assets/documental.png'
import cine from '../../assets/cine.png'
import microfono from '../../assets/microfono.png'
import lluviaDeIdeas from '../../assets/lluvia-de-ideas.png'
import adaptable from '../../assets/adaptable.png'
import apoyar from '../../assets/apoyar.png'

function Listado({ titulo, lista }) {
    return (
        <div >
            <h2 className="text-[#276E90] font-bold text-m sm:text-xl">{titulo}</h2>
            <ul className="flex gap-2 flex-col mt-6">
                {
                    lista.map((item, index) => {
                        return (
                            <li key={index} className="flex items-center gap-3">
                            <div className="w-9">
                                <img src={item.img} alt="" />
                            </div>
                            <span>{item.texto}</span>
                        </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default function Sobremi() {

    const aficciones = [
        {
            img : documental,
            texto: 'Documentalista aficionada'
        },
        {
            img: cine,
            texto: 'Cinéfila'
        },
        {
            img: microfono,
            texto: 'Cantar'
        }
    ];
    const habilidades = [
        {
            img: lluviaDeIdeas,
            texto: 'Creatividad'
        },
        {
            img: adaptable,
            texto: 'Adaptabilidad'
        },
        {
            img: apoyar,
            texto: 'Trabajo en equipo'
        }
    ];

    return <>
        <div className="px-4 py-4 sm:px-16 sm:py-16 sm:pt-[130px] pt-[130px]" id="sobremi">
            <section className="about-me flex w-full gap-5 lg:gap-14 justify-center flex-col md:flex-row items-center md:items-start">
                <div className="w-full sm:w-80 md:w-96 sm:pr-10 text-center" data-aos="fade-right">
                    <h1 className="text-[#0A3143] text-[22px] sm:text-[28px] md:text-4xl font-bold pb-6">Sobre mi</h1>
                    <div className="min-w-[200px] max-w-[350px] m-auto">
                        <img src={foto} alt="" />
                    </div>
                </div>
                <div className="grid justify-items-end	 grid-flow-row items-end max-w-2xl">
                    <a
                        href={curriculum}
                        target="_blank"
                        className="btn-general w-min mt-3 md:mb-6 order-[3] md:order-none"
                    >Curriculum</a>
                    <p className="mb-3">
                        Hola soy Laura Alison Choque Copajira, resido en Terrassa - Barcelona ,
                        He terminado mis estudios en Desarrollo de aplicaciones Web, que es un
                        grado superior con duración de dos años. Inicie en el mundo de la
                        programación por recomendación de un amigo, y con mis inicios al
                        aprender HTML y CSS me bastaron para animarme a hacer un Grado. Aun asi
                        continuo formándome en plataformas de cursos , para mantenerme
                        actualizada.
                    </p>
                    <p>
                        Me gustaría poder llegar a abarcar mucho en cuanto a programación, tanto
                        en Backend como Frontend , y en un futuro sobre inteligencia artificial
                        o realidad virtual. Me siento motivada por seguir aprendiendo distintos
                        lenguajes de programación y consolidar más mis conocimientos en una
                        empresa, poner a prueba y ampliar mis conocimientos para ser parte de un
                        gran equipo profesional.
                    </p>
                </div>
            </section>
            <section
                className="hobbies flex-wrap gap-2 sm:gap-0 sm:flex-nowrap flex justify-between md:justify-evenly mt-14"
            >
                <Listado titulo="Habilidades Personales" lista={habilidades} />
                <Listado titulo="Aficciones" lista={aficciones} />
            </section>
        </div>
    </>
}
