import ScrollReveal from './ScrollReveal';
import { hasHero } from '../../utils/caseStudySections';

function MetaItem({ label, value }) {
  if (!value?.trim()) return null;

  return (
    <div className="cs-hero__meta-item">
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

export default function CaseStudyHero({ impact, title, image, metadata, backHref, backLabel }) {
  if (!hasHero({ impact, title })) return null;

  const hasMeta =
    metadata &&
    (metadata.role?.trim() || metadata.timeline?.trim() || metadata.team?.trim());
  const hasImage = image?.src?.trim();

  return (
    <header className="cs-hero" id="top">
      {backHref && backLabel ? (
        <ScrollReveal>
          <a className="cs-back-link" href={backHref}>
            ← {backLabel}
          </a>
        </ScrollReveal>
      ) : null}

      {impact?.trim() ? (
        <ScrollReveal delay={80}>
          <p className="cs-hero__impact">{impact}</p>
        </ScrollReveal>
      ) : null}

      {title?.trim() ? (
        <ScrollReveal delay={140}>
          <h1 className="cs-hero__title">{title}</h1>
        </ScrollReveal>
      ) : null}

      {hasMeta ? (
        <ScrollReveal delay={200}>
          <dl className="cs-hero__meta">
            <MetaItem label="Role" value={metadata.role} />
            <MetaItem label="Timeline" value={metadata.timeline} />
            <MetaItem label="Team" value={metadata.team} />
          </dl>
        </ScrollReveal>
      ) : null}

      {hasImage ? (
        <ScrollReveal delay={260} className="cs-hero__media-wrap">
          <figure className="cs-hero__media">
            <img className="cs-hero__image" src={image.src} alt={image.alt ?? ''} loading="eager" />
          </figure>
        </ScrollReveal>
      ) : null}
    </header>
  );
}
