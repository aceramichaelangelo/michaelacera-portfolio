import { useCallback } from 'react';

export function useScrollTo() {
  const scrollTo = useCallback((id: string) => {
    if (typeof window === 'undefined') return;

    const element = document.getElementById(id);
    if (!element) return;

    const navbarOffset = 80; // Height of our navbar
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - navbarOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }, []);

  return scrollTo;
}
