import './gridSection.css'

export function GridCatalogo({title,imagenes,id}) {

  return (
    <article className='catalogo' id={id}>
    <h3 className='catalogo-h3'>{title}</h3>
      <section className='catalogo-grid'>
        {imagenes.map((imagen, index) => (
          <section className='catalogo-grid-containerImg' id={imagen[1]} key={index}>
              <img src={`./img/${imagen[0]}`} className={'catalogo-grid-img'}/>
          </section>
        ))}
      </section>
    </article>
  )
}

