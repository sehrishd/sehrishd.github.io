document.documentElement.classList.add('js');

const viewWorkLink = document.getElementById('view-work-link');
const myWorkSection = document.getElementById('my-work-section');

if (viewWorkLink && myWorkSection) {
  viewWorkLink.addEventListener('click', (event) => {
    event.preventDefault();
    myWorkSection.scrollIntoView({ behavior: 'smooth' });
  });
}

const projectRows = document.querySelectorAll('.project-row');

if (projectRows.length > 0) {
  const revealRow = (row) => row.classList.add('is-visible');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealRow(entry.target);
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -5% 0px',
      }
    );

    projectRows.forEach((row) => revealObserver.observe(row));
  } else {
    projectRows.forEach(revealRow);
  }

  requestAnimationFrame(() => {
    projectRows.forEach((row) => {
      const rect = row.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) {
        revealRow(row);
      }
    });
  });
}
