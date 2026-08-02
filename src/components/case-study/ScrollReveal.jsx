import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function ScrollReveal({ as: Component = 'div', className = '', children, delay = 0 }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <Component
      ref={ref}
      className={`cs-reveal ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}
