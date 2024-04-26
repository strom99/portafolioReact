import github from '../assets/github.svg'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'

export default function Footer(){
    
let social2 = [
    { 
      name: 'linkedin',
      'link': 'https://www.linkedin.com/in/laura-alison',
      'img' : linkedin   
    }, 
    { name: 'github',
      'link': 'https://github.com/strom99',
      'img': github
    } , 
    { name: 'instagram',
      'link': 'https://www.instagram.com/mk_alisson/',
      'img':instagram
    } ];

    return <footer
    className="border-t-2 pt-8 flex-wrap sm:flex-nowrap pb-8 flex justify-center gap-5"
  >
    <h3>©2023 Laura Alison Choque Copajira</h3>
    <ul className="flex gap-4">
      <li className="w-8">
        <a href="https://www.linkedin.com/in/laura-alison/" target="_blank">
          <img
            className="w-full hover:brightness-150 transition-all"
            src={linkedin}
            alt=""
          />
        </a>
      </li>
      <li className="w-8">
        <a href="https://github.com/strom99" target="_blank">
          <img
            className="w-full hover:brightness-150 transition-all"
            src={github}
            alt=""
          />
        </a>
      </li>
      <li className="w-8">
        <a href="https://www.instagram.com/mk_alisson/" target="_blank">
          <img
            className="w-full hover:brightness-150 transition-all"
            src={instagram}
            alt=""
          />
        </a>
      </li>
    </ul>
  </footer>
  
}