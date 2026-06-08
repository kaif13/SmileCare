import { images } from '../constants/images'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function Gallery() {
  const gallery = [
    [images.reception, 'A calm, welcoming reception'],
    [images.interior, 'Bright and private treatment spaces'],
    [images.chair, 'Modern dental technology'],
    [images.smile, 'Natural-looking smile results'],
  ]

  return (
    <section className="section gallery">
      <div className="container">
        <SectionHeading eyebrow="Inside our studio" title="Designed to put you at ease" copy="A warm, modern environment with hospital-grade hygiene standards." />
        <div className="gallery-grid">
          {gallery.map(([src, alt], i) => <Reveal className={`gallery-item gallery-${i + 1}`} delay={i * .06} key={src}><img src={src} alt={alt} loading="lazy" /><span>{alt}</span></Reveal>)}
        </div>
      </div>
    </section>
  )
}

export default Gallery
