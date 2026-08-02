/**
 * Case study page interactions — scroll reveal, reading progress, table of contents
 */
document.documentElement.classList.add('js');

/* ——— Reading progress ——— */
const progressBar = document.querySelector('.cs-progress__bar');

if (progressBar) {
  const updateProgress = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const scrollable = scrollHeight - clientHeight;
    const progress = scrollable <= 0 ? 0 : Math.min(100, Math.max(0, (scrollTop / scrollable) * 100));
    progressBar.style.transform = `scaleX(${progress / 100})`;
  };

  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
}

/* ——— Scroll reveal ——— */
const revealElements = document.querySelectorAll('.cs-reveal');

if (revealElements.length > 0) {
  const reveal = (el) => el.classList.add('is-visible');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -5% 0px' }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    revealElements.forEach(reveal);
  }

  requestAnimationFrame(() => {
    revealElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) reveal(el);
    });
  });
}

/* ——— Table of contents ——— */
const tocLinks = document.querySelectorAll('.cs-toc__link');
const tocSections = Array.from(tocLinks)
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

if (tocSections.length > 1 && 'IntersectionObserver' in window) {
  const setActive = (id) => {
    tocLinks.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
    });
  };

  const tocObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible[0]?.target?.id) setActive(visible[0].target.id);
    },
    { rootMargin: '-20% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] }
  );

  tocSections.forEach((section) => tocObserver.observe(section));
}
