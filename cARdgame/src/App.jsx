import React from 'react';
import { Header } from './header-simple/header.jsx';
import { AboutMeSection } from './aboutMe-section/aboutMeSection';
import { ProcessSection } from './process-section/processSection.jsx';
import { GridCatalogo } from './grid-section/gridSection.jsx';
import { FooterSection } from './footer-section/footerSection.jsx';
import './App.css'


export function App() {
  const name='cARds game';
  const titleIntro='Introducción';
  const textIntro=['El proyecto consistió en realizar una simulación sobre la creación y venta de una aplicación que usase Realidad Aumentada', 
  'La idea surgida es un juego de cartas en realidad aumentada, desarrollado para la asignatura de Computación Ubicua y Ambiental cuando estaba estudiando en la carrera.',
  'La lógica del juego es simple, es un "piedra, papel o tijeras" donde dependiendo de la posición de la carta en el tablero realiza una acción u otra. Las acciones se pueden ver graficamente pues los modelos de las cartas cambian de postura.',
  'Cuando el tiempo, en forma de barra posicionada en medio  del tablero, finaliza, se muestra quién es el ganador, con una mini-barra encima de la cabeza de cada jugadador: el color verde señala al ganador, el rojo al perdedor, y azul en caso de empate.'];
  const imgIntro='tablero+jugadores.png';

  const titleOrganization='Organización del proyecto';
  const OrganizationCards=[
    ['1º. Motivación para este proyecto','Justificar porqué  se escogió esta idea como proyecto'],
    ['2º. Estudio de mercado','Se realizó un mini-estudio de mercado para ver si la idea era viable'],
    ['3º. Software y Hardware a utilizar','Investigar que software y hardware podía usarse para la creación de nuestra aplicación'],
    ['4º Creación del primer prototipo','Se creó un primer prototipo básico, sin lógica del juego solo mostrando el tablero y algun intento de renderizar un modelo 3D'],
    ['5º. Creación del segundo prototipo','Se añadieron tanto los modelos 3D de las cartas (creado por mi y mi compañero) y la lógica de la aplicación']
  ];

  const titlepr1='Prototipo 1';
  const idpr1='Prototipo1';
  const pr1Img=[['tablero_greenBar-prototipo1.png','pr1f1'],
  ['tablero_redBar-prototipo1.png','pr1f2'],
  ['tablero_3D-prototipo1.png','pr1f3'],
  ['model3D-prototipo1.png','pr1f4']
  ];

  const titlepr2='Prototipo 2';
  const idpr2='Prototipo2';
  const pr2Img=[
  ['jedi_base-prototipo2.png','pr2f1'],
  ['jedi_ataque-prototipo2.png','pr2f2'],
  ['jedi_bloqueo-prototipo2.png','pr2f3'],
  ['steve_base-prototipo2.png','pr2f4'],
  ['steve_ataque-prototipo2.png','pr2f5'],
  ['steve_bloqueo-prototipo2.png','pr2f6'],
  ['funcionamiento1-prototipo2.png','pr2f7'],
  ['funcionamiento2-prototipo2.png','pr2f8'],
  ['funcionamiento3-prototipo2.png','pr2f9'],
  ['funcionamiento4-prototipo2.png','pr2f10']
  ];

  const footerLinks=[
    ['../doc/cARd_game.pdf','IconPDF.png','Memoria del proyecto']
  ];

  return (
  <>
  <section className='margin-flexbox'>
    <Header name={name} />
    <AboutMeSection title={titleIntro} texts={textIntro} img={imgIntro}/>
    <ProcessSection title={titleOrganization} Cards={OrganizationCards}/>
    <GridCatalogo title={titlepr1} imagenes={pr1Img} id={idpr1}/>
    <GridCatalogo title={titlepr2} imagenes={pr2Img} id={idpr2}/>
  </section>
  <section className='flexbox-blue'>
    <FooterSection links={footerLinks}/>
  </section>
 
  </>
 
    
  )
}