import ChapterLabel from './ChapterLabel';
import EditorialRow from './EditorialRow';
import Figure from './Figure';
import ScrollReveal from './ScrollReveal';
import { hasDesignProcess } from '../../utils/caseStudySections';

function ProcessBlock({ block }) {
  switch (block.type) {
    case 'row':
      if (!block.heading?.trim() && !block.paragraphs?.some((p) => p?.trim()) && !block.image?.src?.trim()) {
        return null;
      }
      return (
        <EditorialRow
          reverse={block.reverse}
          heading={block.heading}
          paragraphs={block.paragraphs?.filter(Boolean) ?? []}
          image={block.image?.src?.trim() ? block.image : null}
        />
      );

    case 'figure':
      if (!block.src?.trim()) return null;
      return <Figure src={block.src} alt={block.alt} caption={block.caption} layout={block.layout ?? 'full'} />;

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

    default:
      return null;
  }
}

export default function DesignProcess({ id = 'process', label, intro, blocks = [] }) {
  if (!hasDesignProcess({ blocks })) return null;

  return (
    <section className="cs-section" id={id} aria-labelledby={`${id}-heading`}>
      {label ? <ChapterLabel>{label}</ChapterLabel> : null}

      <ScrollReveal>
        <h2 className="cs-section__heading visually-hidden" id={`${id}-heading`}>
          {label || 'Design process'}
        </h2>
        {intro?.trim() ? <p className="cs-body cs-section__intro">{intro}</p> : null}
      </ScrollReveal>

      <div className="cs-stack cs-stack--spacious">
        {blocks.map((block, index) => (
          <ProcessBlock key={`${block.type}-${index}`} block={block} />
        ))}
      </div>
    </section>
  );
}
