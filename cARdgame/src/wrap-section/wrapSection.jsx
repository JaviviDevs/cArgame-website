import './wrapSection.css'

export function WrapCatalogo({title,imagenes,id}) {

  return (
    <article className='catalogo' id={id}>
    <h3 className='catalogo-h3'>{title}</h3>
      <section className='catalogo-wrap'>
        {imagenes.map((imagen, index) => (
          <section className='catalogo-grid-containerImg' key={index}>
              <img src={`./img/${imagen}`} className={'catalogo-grid-img'}/>
          </section>
        ))}
      </section>
    </article>
  )
}

