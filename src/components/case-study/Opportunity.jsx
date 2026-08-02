import ChapterLabel from './ChapterLabel';
import Figure from './Figure';
import ScrollReveal from './ScrollReveal';
import { hasOpportunity } from '../../utils/caseStudySections';

export default function Opportunity({
  id = 'opportunity',
  label,
  heading,
  paragraphs = [],
  insight,
  visual,
}) {
  if (!hasOpportunity({ heading, paragraphs, insight, visual })) return null;

  const filteredParagraphs = paragraphs.filter((p) => p?.trim());
  const hasVisual = visual?.src?.trim();

  return (
    <section className="cs-section" id={id} aria-labelledby={`${id}-heading`}>
      {label ? <ChapterLabel>{label}</ChapterLabel> : null}

      {heading?.trim() ? (
        <ScrollReveal>
          <h2 className="cs-section__heading" id={`${id}-heading`}>
            {heading}
          </h2>
        </ScrollReveal>
      ) : (
        <h2 className="visually-hidden" id={`${id}-heading`}>
          {label || 'Opportunity'}
        </h2>
      )}

      {filteredParagraphs.length ? (
        <div className="cs-prose">
          {filteredParagraphs.map((paragraph, index) => (
            <ScrollReveal key={paragraph} delay={index * 80}>
              <p className="cs-body">{paragraph}</p>
            </ScrollReveal>
          ))}
        </div>
      ) : null}

      {insight?.trim() ? (
        <ScrollReveal>
          <p className="cs-insight">{insight}</p>
        </ScrollReveal>
      ) : null}

      {hasVisual ? <Figure {...visual} layout="full" /> : null}
    </section>
  );
}
