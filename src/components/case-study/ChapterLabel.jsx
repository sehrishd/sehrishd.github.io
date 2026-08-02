import ScrollReveal from './ScrollReveal';

export default function ChapterLabel({ children }) {
  return (
    <ScrollReveal>
      <p className="cs-label">{children}</p>
    </ScrollReveal>
  );
}
