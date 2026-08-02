export function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

export function hasParagraphs(paragraphs) {
  return Array.isArray(paragraphs) && paragraphs.some(isNonEmptyString);
}

export function hasHero(hero) {
  if (!hero) return false;
  return isNonEmptyString(hero.impact) || isNonEmptyString(hero.title);
}

export function hasStoryIntroduction(section) {
  if (!section) return false;
  return isNonEmptyString(section.quote?.text) || hasParagraphs(section.paragraphs);
}

export function hasOpportunity(section) {
  if (!section) return false;
  return (
    isNonEmptyString(section.heading) ||
    hasParagraphs(section.paragraphs) ||
    isNonEmptyString(section.insight) ||
    isNonEmptyString(section.visual?.src)
  );
}

export function hasResearch(section) {
  if (!section) return false;
  return Array.isArray(section.blocks) && section.blocks.length > 0;
}

export function hasDesignProcess(section) {
  if (!section) return false;
  return Array.isArray(section.blocks) && section.blocks.length > 0;
}

export function hasSolution(section) {
  if (!section) return false;
  const hasGallery = Array.isArray(section.gallery) && section.gallery.length > 0;
  const hasHeroImage = isNonEmptyString(section.heroImage?.src);
  const hasVideo = isNonEmptyString(section.video?.src);
  const hasHighlights =
    Array.isArray(section.highlights) &&
    section.highlights.some(
      (item) =>
        isNonEmptyString(item?.title) ||
        isNonEmptyString(item?.description) ||
        isNonEmptyString(item?.image?.src)
    );
  return hasGallery || hasHeroImage || hasVideo || hasHighlights;
}

export function hasReflection(section) {
  if (!section) return false;
  return (
    hasParagraphs(section.lessons) ||
    hasParagraphs(section.improvements) ||
    isNonEmptyString(section.growth) ||
    isNonEmptyString(section.credits)
  );
}

export function hasNavigation(navigation) {
  if (!navigation) return false;
  return (
    isNonEmptyString(navigation.next?.href) &&
    (isNonEmptyString(navigation.next?.impact) || isNonEmptyString(navigation.next?.title))
  );
}

const SECTION_REGISTRY = [
  {
    key: 'storyIntroduction',
    id: 'story',
    defaultLabel: 'The Moment',
    isVisible: hasStoryIntroduction,
    getLabel: (section) => section?.label,
  },
  {
    key: 'solution',
    id: 'solution',
    defaultLabel: 'The Solution',
    isVisible: hasSolution,
    getLabel: (section) => section?.label,
  },
  {
    key: 'opportunity',
    id: 'opportunity',
    defaultLabel: 'Why It Mattered',
    isVisible: hasOpportunity,
    getLabel: (section) => section?.label,
  },
  {
    key: 'research',
    id: 'research',
    defaultLabel: 'What We Learned',
    isVisible: hasResearch,
    getLabel: (section) => section?.label,
  },
  {
    key: 'designProcess',
    id: 'process',
    defaultLabel: 'Design Process',
    isVisible: hasDesignProcess,
    getLabel: (section) => section?.label,
  },
  {
    key: 'reflection',
    id: 'reflection',
    defaultLabel: 'Reflection',
    isVisible: hasReflection,
    getLabel: (section) => section?.label,
  },
];

export function buildTableOfContents(content) {
  return SECTION_REGISTRY.filter(({ key, isVisible }) => isVisible(content[key])).map(
    ({ key, id, defaultLabel, getLabel }) => ({
      id,
      label: getLabel(content[key]) || defaultLabel,
    })
  );
}

export function getVisibleSectionKeys(content) {
  return SECTION_REGISTRY.filter(({ key, isVisible }) => isVisible(content[key])).map(
    ({ key }) => key
  );
}
