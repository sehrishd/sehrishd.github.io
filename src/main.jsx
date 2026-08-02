import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import CaseStudyPage from './CaseStudyPage';
import placeholderCaseStudy from './data/placeholderCaseStudy';

import '../css/tokens.css';
import '../css/base.css';
import '../css/typography.css';
import '../css/components.css';
import '../css/case-study.css';

document.documentElement.classList.add('js');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CaseStudyPage content={placeholderCaseStudy} />
  </StrictMode>
);
