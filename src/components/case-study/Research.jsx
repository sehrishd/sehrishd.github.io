import ChapterLabel from './ChapterLabel';
import Figure from './Figure';
import ScrollReveal from './ScrollReveal';
import { hasResearch } from '../../utils/caseStudySections';

function ResearchBlock({ block }) {
  switch (block.type) {
    case 'text':
      if (!block.heading?.trim() && !block.paragraphs?.some((p) => p?.trim())) return null;
      return (
        <ScrollReveal className="cs-prose">
          {block.heading ? <h3 className="cs-subheading">{block.heading}</h3> : null}
          {block.paragraphs?.filter(Boolean).map((paragraph) => (
            <p key={paragraph} className="cs-body">
              {paragraph}
            </p>
          ))}
        </ScrollReveal>
      );

    case 'quote':
      if (!block.text?.trim()) return null;
      return (
        <ScrollReveal>
          <blockquote className="cs-quote cs-quote--inline">
            <p>{block.text}</p>
            {block.attribution ? <cite>{block.attribution}</cite> : null}
          </blockquote>
        </ScrollReveal>
      );

    case 'figure':
      if (!block.src?.trim()) return null;
      return <Figure src={block.src} alt={block.alt} caption={block.caption} layout={block.layout ?? 'full'} />;

    case 'figures':
      if (!block.items?.length) return null;
      return (
        <div className={`cs-figure-group cs-figure-group--${block.layout ?? 'pair'}`}>
          {block.items
            .filter((item) => item?.src?.trim())
            .map((item) => (
              <Figure key={item.src} {...item} layout="half" />
            ))}
        </div>
      );

    default:
      return null;
  }
}

export default function Research({ id = 'research', label, intro, blocks = [] }) {
  if (!hasResearch({ blocks })) return null;

  return (
    <section className="cs-section" id={id} aria-labelledby={`${id}-heading`}>
      {label ? <ChapterLabel>{label}</ChapterLabel> : null}

      <ScrollReveal>
        <h2 className="cs-section__heading visually-hidden" id={`${id}-heading`}>
          {label || 'Research'}
        </h2>
        {intro?.trim() ? <p className="cs-body cs-section__intro">{intro}</p> : null}
      </ScrollReveal>

      <div className="cs-stack">
        {blocks.map((block, index) => (
          <ResearchBlock key={`${block.type}-${index}`} block={block} />
        ))}
      </div>
    </section>
  );
}
