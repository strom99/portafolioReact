import './inicio.css'
import portada from '../../assets/portada.png';
import linkedinImg from '../../assets/linkedin.svg';
import githubImg from '../../assets/github.svg';
import instagramImg from '../../assets/instagram.svg';
import ButtonLink from '../../components/boton';
import llave from '../../assets/llave.png';
import code from '../../assets/coding.png';

function Banner({imagen,tecnologías,texto}) {
  let separateTexto = texto.split(',');
  return <div className="w-96 flex gap-5">
    <div className="w-20">
      <img src={imagen} alt="" />
    </div>
    <div className="w-full text-center">
      <div className="bg-[#CECFC9] p-4 rounded-t-lg">
        <h2 className="text-[#276E90] font-bold">{separateTexto[0]}</h2>
        <span className="text-[#276E90] font-bold">{separateTexto[1]}</span>
      </div>
      <ul className="bg-[#EFEFEF] p-4 rounded-b-lg">
        {tecnologías.map((tecnología,index) => {
          return <li key={index}>{tecnología}</li>;
        })}
      </ul>
    </div>
  </div>;
}

let social = [
  { 
    name: 'linkedin',
    'link': 'https://www.linkedin.com/in/laura-alison',
    'img' : linkedinImg   
  }, 
  { name: 'github',
    'link': 'https://github.com/strom99',
    'img': githubImg
  } , 
  { name: 'instagram',
    'link': 'https://www.instagram.com/mk_alisson/',
    'img':instagramImg
  } ];

let socialLinks = social.map(function (data) {
  return <li key={data.name} className="w-8">
    <a href={data.link} target="_blank">
      <img
        className="w-full hover:brightness-150 transition-all"
        src={data.img}
        alt=""
      />
    </a>
  </li>;
});

export default function Inicio() {
  return (<>
    <div
      className="flex items-center pt-[100px] px-5 sm:px-8 lg:pt-0  pt-8 min-h-[90vh] gap-12 justify-between lg:container m-auto"
      id="inicio"
    >
      <section data-aos="fade-right" className="content w-full lg:w-2/4">
        <div className="presentation">
          <h1 className="name text-4xl font-black text-[#0A3143]">
            Laura Alison <br />
            Choque Copajira
          </h1>
          <span className="flex text-2xl font-bold text-[#276E90] mt-1"> Programadora Frontend</span>
          <p className="my-4">
            ¡Hola! Soy Laura, una programadora junior apasionado por la tecnología y
            el desarrollo de software. En este portafolio, podrás encontrar algunos
            de mis proyectos en los que he trabajado. ¡Gracias por visitar!
          </p>
        </div>
        <ul className="flex gap-4">
          {socialLinks}
        </ul>
        <div className="mt-14 flex gap-4">
          <ButtonLink text="Sobre mi" ruta="#SobreMi" />
          <ButtonLink text="Portafolio" ruta="#Portafolio" />
        </div>
      </section>
      <section data-aos="fade-left" className="imgbox cover w-full lg:w-[520px] mt-12">
        <img className=" portada" src={portada} alt="" />
      </section>
    </div>
    <div
      className="div-tools    bg-[#0A3143] px-7 py-12 ">
      <div className='lg:container m-auto flex justify-center flex-wrap sm:flex-nowrap gap-10'>
      <Banner imagen={code} tecnologías={['HTML5','CSS3','PHP - MySQL']} texto={'PROGRAMACION , EN...'} />
      <Banner imagen={llave} tecnologías={['CSS','BOOSTRAP','TAILWIND']} texto={'TEGNOLOGIAS , COMPLEMENTARIAS...'} />
      </div>
    </div>

  </>);
}