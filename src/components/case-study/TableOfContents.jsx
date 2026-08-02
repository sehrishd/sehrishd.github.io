import { useEffect, useState } from 'react';

export default function TableOfContents({ items }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '');

  useEffect(() => {
    if (!items.length) return undefined;

    setActiveId(items[0].id);

    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length || !('IntersectionObserver' in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0, 0.25, 0.5, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [items]);

  if (items.length < 2) return null;

  return (
    <aside className="cs-toc" aria-label="Table of contents">
      <p className="cs-toc__label">On this page</p>
      <ol className="cs-toc__list">
        {items.map((item) => (
          <li key={item.id}>
            <a
              className={`cs-toc__link ${activeId === item.id ? 'is-active' : ''}`}
              href={`#${item.id}`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </aside>
  );
}
