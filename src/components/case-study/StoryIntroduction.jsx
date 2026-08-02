import ChapterLabel from './ChapterLabel';
import ScrollReveal from './ScrollReveal';
import { hasStoryIntroduction } from '../../utils/caseStudySections';

export default function StoryIntroduction({ id = 'story', label, quote, paragraphs = [] }) {
  if (!hasStoryIntroduction({ quote, paragraphs })) return null;

  const hasQuote = quote?.text?.trim();
  const filteredParagraphs = paragraphs.filter((p) => p?.trim());

  return (
    <section className="cs-section cs-section--text" id={id} aria-labelledby={`${id}-heading`}>
      {label ? <ChapterLabel>{label}</ChapterLabel> : null}

      <h2 className="visually-hidden" id={`${id}-heading`}>
        {label || 'Story introduction'}
      </h2>

      {hasQuote ? (
        <ScrollReveal>
          <blockquote className="cs-quote">
            <p>{quote.text}</p>
            {quote.attribution ? <cite>{quote.attribution}</cite> : null}
          </blockquote>
        </ScrollReveal>
      ) : null}

      {filteredParagraphs.length ? (
        <div className="cs-prose">
          {filteredParagraphs.map((paragraph, index) => (
            <ScrollReveal key={paragraph} delay={index * 80}>
              <p className="cs-body">{paragraph}</p>
            </ScrollReveal>
          ))}
        </div>
      ) : null}
    </section>
  );
}
