import { LeftCircleCard } from '../left-circle-card/leftCircleCard';
import './processSection.css'


export function ProcessSection({title,texts,Cards}) {
  
  return (
    <article className='process'>
        <span className='orangeborder-process'></span>
        <h3 className='process-h3'>{title}</h3>
        <section className='process-colum-flexbox'>
          {Cards.map((card, indx) => (
                  <LeftCircleCard key={indx} company={card[0]} work={card[1]}/>
          ))}
        </section> 
    </article>
    
  )
}