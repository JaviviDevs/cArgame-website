import { NavBar } from '../navBar/navBar.jsx';
import './header.css'


export function Header({name}) {

  const listLinks=[
                    ['#Prototipo1','Primer prototipo'],
                    ['#Prototipo2','Segundo prototipo']
                  ];

  return (
    <article className='header'>
      <h2 className='header-h2'>{name}</h2>
      <NavBar links={listLinks} />
    </article> 
  )
}