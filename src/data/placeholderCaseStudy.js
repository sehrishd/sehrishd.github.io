/**
 * Placeholder content for the reusable case study template.
 * Copy this file per project and replace values — layout stays the same.
 *
 * OPTIONAL SECTIONS
 * Omit any section by setting it to null or removing the key entirely.
 * The page will reflow with no empty gaps; the table of contents updates automatically.
 *
 * Examples:
 *   research: null,
 *   designProcess: null,
 *   navigation: { backHref: '../index.html', backLabel: 'Selected Work' }, // no next project
 *
 * Within sections, individual fields are also optional (hero image, metadata, quote, etc.).
 */
const placeholderCaseStudy = {
  meta: {
    pageTitle: 'Project Name — Sehrish Daud',
    description: 'A case study about designing thoughtful experiences for everyday life.',
  },

  hero: {
    impact: 'Helping people navigate a meaningful everyday moment.',
    title: 'Project Name',
    metadata: {
      role: 'Lead Designer',
      timeline: 'Month Year – Month Year',
      team: 'Name, Name, Name',
    },
  },

  storyIntroduction: {
    label: 'The Moment',
    quote: {
      text: 'A real quote from a participant that captures the human tension in everyday life.',
      attribution: 'Participant role or context',
    },
    paragraphs: [
      'Open with a narrative scene — where someone is, what they are trying to do, and what feels harder than it should. Avoid jumping straight into design language.',
      'Close this section with a sentence that reframes the situation. The reader should feel the problem before they analyze it.',
    ],
  },

  solution: {
    label: 'The Solution',
    // context: 'product' | 'space' | 'experience' — sets default highlights label
    context: 'product',
    // highlightsLabel: override default — e.g. 'Key features', 'Experience moments'
    intro:
      'Introduce the design immediately after the problem — show what you made and why it matters before diving into process.',
    heroImage: {
      src: '../assets/images/Minder/Minder-Hero.png',
      alt: 'Hero visual — product mockup, physical prototype, or space photography',
      caption: 'Optional caption describing the solution in human terms.',
    },
    highlights: [
      {
        title: 'Experience moment, not feature name',
        description:
          'Describe one capability or design decision that makes the product stand out — what it enables people to do or feel.',
        image: {
          src: '../assets/images/Minder/hifi-group1.png',
          alt: 'Placeholder feature or moment visual',
          caption: 'Optional caption.',
        },
      },
      {
        title: 'Another defining detail',
        description:
          'A second feature, spatial moment, or interaction that shows intentional design. For space projects, describe the experience rather than a UI screen.',
        image: {
          src: '../assets/images/Minder/hifi-group2.png',
          alt: 'Placeholder second highlight',
          caption: 'Optional caption.',
        },
      },
    ],
    gallery: [],
    video: null,
  },

  opportunity: {
    label: 'Why It Mattered',
    heading: 'What was really at stake for people navigating this moment.',
    paragraphs: [
      'Explain why this problem deserved attention — not in business terms, but in human terms. What everyday experience was being shaped? What felt normal that was actually creating friction?',
    ],
    insight: 'One clear insight line that captures the opportunity in plain language.',
    visual: {
      src: '../assets/images/Minder/minder-mid-fi.png',
      alt: 'Placeholder contextual visual — diagram, photo, or artifact',
      caption: 'Optional caption explaining what this visual reveals.',
    },
  },

  research: {
    label: 'What We Learned',
    intro: 'Share understanding as a story — not a methods dump. Focus on what changed how you thought.',
    blocks: [
      {
        type: 'text',
        heading: 'Behavioral pattern',
        paragraphs: [
          'Describe a recurring behavior, workaround, or tension you observed across participants.',
        ],
      },
      {
        type: 'quote',
        text: 'A second voice from research that deepens empathy or reveals nuance.',
        attribution: 'Research participant',
      },
      {
        type: 'figure',
        layout: 'full',
        src: '../assets/images/Minder/minder-low-fi.png',
        alt: 'Placeholder research artifact — journey map, notes, or affinity diagram',
        caption: 'What this artifact helped the team understand.',
      },
      {
        type: 'figures',
        layout: 'pair',
        items: [
          {
            src: '../assets/images/Minder/hifi-group1.png',
            alt: 'Placeholder research image one',
            caption: 'Caption for first artifact.',
          },
          {
            src: '../assets/images/Minder/hifi-group2.png',
            alt: 'Placeholder research image two',
            caption: 'Caption for second artifact.',
          },
        ],
      },
    ],
  },

  designProcess: {
    label: 'Design Process',
    intro: 'Walk through how the work evolved — sketches, wireframes, prototypes, and the decisions behind them.',
    blocks: [
      {
        type: 'row',
        reverse: false,
        heading: 'Experience moment, not feature name',
        paragraphs: [
          'Explain one design decision: what you tried, what you rejected, and why this direction honored the insight above.',
        ],
        image: {
          src: '../assets/images/Minder/minder-mid-fi.png',
          alt: 'Placeholder process image — sketch or wireframe',
          caption: 'Optional caption.',
        },
      },
      {
        type: 'row',
        reverse: true,
        heading: 'Another iteration or decision point',
        paragraphs: [
          'Describe a pivot, constraint, or tradeoff. Keep the focus on intention, not output volume.',
        ],
        image: {
          src: '../assets/images/Minder/minder-low-fi.png',
          alt: 'Placeholder iteration image',
          caption: 'Optional caption.',
        },
      },
      {
        type: 'figure',
        layout: 'full',
        src: '../assets/images/Minder/hifi-group1.png',
        alt: 'Placeholder prototype or testing image',
        caption: 'How you validated the direction with people.',
      },
    ],
  },

  reflection: {
    label: 'Reflection',
    lessons: [
      'What this project taught you about designing for everyday behavior.',
      'What surprised you — a research finding, a decision, or a collaboration moment.',
    ],
    improvements: [
      'What you would explore further or do differently with more time.',
    ],
    growth: 'One honest sentence about how this work shaped you as a designer.',
    credits: 'Team, course, or acknowledgments — keep brief and human.',
  },

  navigation: {
    backLabel: 'Selected Work',
    backHref: '../index.html',
    next: {
      label: 'Next project',
      impact: 'Helping households become more mindful of water.',
      title: 'Glow Tap',
      href: './project-template.html',
    },
  },
};

export default placeholderCaseStudy;
