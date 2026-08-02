import ScrollReveal from './ScrollReveal';
import { hasNavigation } from '../../utils/caseStudySections';

export default function NextProject({ next }) {
  if (!hasNavigation({ next })) return null;

  return (
    <nav className="cs-next" aria-label="Continue reading">
      <ScrollReveal>
        <a className="cs-next__project" href={next.href}>
          <span className="cs-next__eyebrow">Continue reading</span>
          {next.impact?.trim() ? <span className="cs-next__impact">{next.impact}</span> : null}
          {next.title?.trim() ? <span className="cs-next__title">{next.title}</span> : null}
        </a>
      </ScrollReveal>
    </nav>
  );
}
