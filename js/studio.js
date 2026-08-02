document.documentElement.classList.add('js');

const studioPieces = document.querySelectorAll('.studio-piece');

if (studioPieces.length > 0) {
  const revealPiece = (piece) => piece.classList.add('is-visible');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealPiece(entry.target);
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -5% 0px',
      }
    );

    studioPieces.forEach((piece) => revealObserver.observe(piece));
  } else {
    studioPieces.forEach(revealPiece);
  }

  requestAnimationFrame(() => {
    studioPieces.forEach((piece) => {
      const rect = piece.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) {
        revealPiece(piece);
      }
    });
  });
}
