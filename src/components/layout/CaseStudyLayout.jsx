import SiteFooter from './SiteFooter';
import SiteNav from './SiteNav';
import ReadingProgress from '../case-study/ReadingProgress';
import TableOfContents from '../case-study/TableOfContents';

export default function CaseStudyLayout({ tableOfContents, children }) {
  return (
    <>
      <ReadingProgress />
      <SiteNav />
      <div className="cs-page">
        <div className="cs-page__layout">
          {tableOfContents?.length ? <TableOfContents items={tableOfContents} /> : null}
          <main className="cs-main" id="main-content">
            {children}
          </main>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
