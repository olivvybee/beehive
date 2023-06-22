'use client';

export const BackToTopLink = () => {
  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();

    const useReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: useReducedMotion.matches ? undefined : 'smooth',
    });
  };

  return (
    <a href="#" onClick={onClick}>
      Back to top
    </a>
  );
};
