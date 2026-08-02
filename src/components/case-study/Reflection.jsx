import ChapterLabel from './ChapterLabel';
import ScrollReveal from './ScrollReveal';
import { hasReflection } from '../../utils/caseStudySections';

function ReflectionList({ title, items }) {
  const filtered = items?.filter((item) => item?.trim()) ?? [];
  if (!filtered.length) return null;

  return (
    <ScrollReveal className="cs-reflection-block">
      <h3 className="cs-subheading">{title}</h3>
      <ul className="cs-reflection-list">
        {filtered.map((item) => (
          <li key={item} className="cs-body">
            {item}
          </li>
        ))}
      </ul>
    </ScrollReveal>
  );
}

export default function Reflection({ id = 'reflection', label, lessons, improvements, growth, credits }) {
  if (!hasReflection({ lessons, improvements, growth, credits })) return null;

  return (
    <section className="cs-section cs-section--text cs-section--afterword" id={id} aria-labelledby={`${id}-heading`}>
      {label ? <ChapterLabel>{label}</ChapterLabel> : null}

      <ScrollReveal>
        <h2 className="cs-section__heading visually-hidden" id={`${id}-heading`}>
          {label || 'Reflection'}
        </h2>
      </ScrollReveal>

      <ReflectionList title="What I learned" items={lessons} />
      <ReflectionList title="What I would improve" items={improvements} />

      {growth?.trim() ? (
        <ScrollReveal>
          <p className="cs-body cs-reflection-growth">{growth}</p>
        </ScrollReveal>
      ) : null}

      {credits?.trim() ? (
        <ScrollReveal>
          <p className="cs-credits">{credits}</p>
        </ScrollReveal>
      ) : null}
    </section>
  );
}
