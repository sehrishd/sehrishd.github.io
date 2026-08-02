import ScrollReveal from './ScrollReveal';

export default function Figure({ src, alt, caption, layout = 'full' }) {
  return (
    <ScrollReveal className={`cs-figure cs-figure--${layout}`}>
      <figure className="cs-figure__frame">
        <img className="cs-figure__image" src={src} alt={alt} loading="lazy" />
        {caption ? <figcaption className="cs-figure__caption">{caption}</figcaption> : null}
      </figure>
    </ScrollReveal>
  );
}
