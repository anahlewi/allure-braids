import { useEffect } from 'react';

export default function useEscapeKey(active, onEscape) {
  useEffect(() => {
    if (!active) return undefined;
    const handler = (e) => e.key === 'Escape' && onEscape();
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [active, onEscape]);
}
