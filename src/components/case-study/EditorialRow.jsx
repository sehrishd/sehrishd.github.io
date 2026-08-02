import ScrollReveal from './ScrollReveal';

export default function EditorialRow({ reverse = false, heading, paragraphs = [], image }) {
  return (
    <ScrollReveal className={`cs-row ${reverse ? 'cs-row--reverse' : ''}`}>
      <div className="cs-row__content">
        {heading ? <h3 className="cs-row__heading">{heading}</h3> : null}
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="cs-body">
            {paragraph}
          </p>
        ))}
      </div>
      {image ? (
        <figure className="cs-row__media">
          <img className="cs-row__image" src={image.src} alt={image.alt} loading="lazy" />
          {image.caption ? <figcaption className="cs-figure__caption">{image.caption}</figcaption> : null}
        </figure>
      ) : null}
    </ScrollReveal>
  );
}
