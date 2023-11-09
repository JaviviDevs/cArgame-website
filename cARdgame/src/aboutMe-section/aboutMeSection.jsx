import React from 'react';
import './aboutMeSection.css'


export function AboutMeSection({title,texts,img}) {
  return (
    <article className='about-me' id='AboutMe'>
      <h3 className='about-me-h3'>{title}</h3>
      <section className='about-me-content'>
        <section className='about-me-content-text'>
          {texts.map((text, indx) => (
              <p className='about-me-p' key={indx}>{text}</p>
          ))}
        </section>
        <section className='about-me-imgContainer'>
          <img src={`./img/${img}`} className='about-me-img'/>
        </section>
      </section>
     
    </article>
    
  )
}