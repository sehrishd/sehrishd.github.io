import ChapterLabel from './ChapterLabel';
import EditorialRow from './EditorialRow';
import Figure from './Figure';
import ScrollReveal from './ScrollReveal';
import { hasSolution } from '../../utils/caseStudySections';

const HIGHLIGHTS_LABELS = {
  product: 'Key features',
  space: 'Experience moments',
  experience: 'What stands out',
};

function GalleryItem({ item }) {
  if (item.layout === 'pair') {
    const figures = item.items?.filter((figure) => figure?.src?.trim()) ?? [];
    if (!figures.length) return null;

    return (
      <div className="cs-figure-group cs-figure-group--pair">
        {figures.map((figure) => (
          <Figure key={figure.src} {...figure} layout="half" />
        ))}
      </div>
    );
  }

  if (!item.src?.trim()) return null;
  return <Figure src={item.src} alt={item.alt} caption={item.caption} layout="full" />;
}

function SolutionHighlights({ highlights, highlightsLabel, context = 'product' }) {
  const filtered = highlights?.filter(
    (item) => item?.title?.trim() || item?.description?.trim() || item?.image?.src?.trim()
  );

  if (!filtered?.length) return null;

  const label = highlightsLabel || HIGHLIGHTS_LABELS[context] || HIGHLIGHTS_LABELS.product;

  return (
    <div className="cs-highlights">
      <ScrollReveal>
        <p className="cs-highlights-label">{label}</p>
      </ScrollReveal>

      {filtered.map((highlight, index) => (
        <EditorialRow
          key={highlight.title || index}
          reverse={index % 2 === 1}
          heading={highlight.title}
          paragraphs={highlight.description ? [highlight.description] : []}
          image={highlight.image?.src?.trim() ? highlight.image : null}
        />
      ))}
    </div>
  );
}

export default function Solution({
  id = 'solution',
  label,
  intro,
  context = 'product',
  highlightsLabel,
  heroImage,
  highlights = [],
  gallery = [],
  video,
}) {
  if (!hasSolution({ heroImage, highlights, gallery, video })) return null;

  const hasHeroImage = heroImage?.src?.trim();
  const hasVideo = video?.src?.trim();

  return (
    <section className="cs-section cs-section--visual cs-section--solution" id={id} aria-labelledby={`${id}-heading`}>
      {label ? <ChapterLabel>{label}</ChapterLabel> : null}

      <ScrollReveal>
        <h2 className="cs-section__heading visually-hidden" id={`${id}-heading`}>
          {label || 'The Solution'}
        </h2>
        {intro?.trim() ? <p className="cs-body cs-section__intro">{intro}</p> : null}
      </ScrollReveal>

      {hasHeroImage ? <Figure {...heroImage} layout="full" /> : null}

      {hasVideo ? (
        <ScrollReveal className="cs-video-wrap">
          <video className="cs-video" autoPlay muted loop playsInline aria-label={video.alt ?? ''}>
            <source src={video.src} type={video.type ?? 'video/mp4'} />
          </video>
          {video.caption ? <p className="cs-figure__caption">{video.caption}</p> : null}
        </ScrollReveal>
      ) : null}

      <SolutionHighlights highlights={highlights} highlightsLabel={highlightsLabel} context={context} />

      {gallery.length ? (
        <div className="cs-stack">
          {gallery.map((item, index) => (
            <GalleryItem key={`gallery-${index}`} item={item} />
          ))}
        </div>
      ) : null}
    </section>
  );
}
