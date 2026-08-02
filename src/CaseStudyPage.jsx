import { useEffect, useMemo } from 'react';
import CaseStudyLayout from './components/layout/CaseStudyLayout';
import CaseStudyHero from './components/case-study/CaseStudyHero';
import StoryIntroduction from './components/case-study/StoryIntroduction';
import Opportunity from './components/case-study/Opportunity';
import Research from './components/case-study/Research';
import DesignProcess from './components/case-study/DesignProcess';
import Solution from './components/case-study/Solution';
import Reflection from './components/case-study/Reflection';
import NextProject from './components/case-study/NextProject';
import {
  buildTableOfContents,
  hasHero,
  hasNavigation,
  hasStoryIntroduction,
  hasOpportunity,
  hasResearch,
  hasDesignProcess,
  hasSolution,
  hasReflection,
} from './utils/caseStudySections';

export default function CaseStudyPage({ content }) {
  const tableOfContents = useMemo(() => buildTableOfContents(content), [content]);

  useEffect(() => {
    document.title = content.meta.pageTitle;
    document.querySelector('meta[name="description"]')?.setAttribute('content', content.meta.description);
  }, [content.meta.pageTitle, content.meta.description]);

  return (
    <CaseStudyLayout tableOfContents={tableOfContents}>
      <article className="cs-article">
        {hasHero(content.hero) ? (
          <CaseStudyHero
            {...content.hero}
            backHref={content.navigation?.backHref}
            backLabel={content.navigation?.backLabel}
          />
        ) : null}

        {hasStoryIntroduction(content.storyIntroduction) ? (
          <StoryIntroduction {...content.storyIntroduction} />
        ) : null}

        {hasSolution(content.solution) ? <Solution {...content.solution} /> : null}

        {hasOpportunity(content.opportunity) ? (
          <Opportunity {...content.opportunity} />
        ) : null}

        {hasResearch(content.research) ? <Research {...content.research} /> : null}

        {hasDesignProcess(content.designProcess) ? (
          <DesignProcess {...content.designProcess} />
        ) : null}

        {hasReflection(content.reflection) ? <Reflection {...content.reflection} /> : null}

        {hasNavigation(content.navigation) ? (
          <NextProject {...content.navigation} />
        ) : null}
      </article>
    </CaseStudyLayout>
  );
}
