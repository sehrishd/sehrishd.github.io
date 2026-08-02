import { useReadingProgress } from '../../hooks/useReadingProgress';

export default function ReadingProgress() {
  const progress = useReadingProgress();

  return (
    <div className="cs-progress" aria-hidden="true">
      <div className="cs-progress__bar" style={{ transform: `scaleX(${progress / 100})` }} />
    </div>
  );
}
