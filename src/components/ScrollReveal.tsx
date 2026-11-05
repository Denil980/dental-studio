import React, { useRef, useState, useEffect } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  index?: number;
  delayMs?: number;
  className?: string;
}

/**
 * On-scroll animation wrapper.
 * As cards enter the viewport during scrolling, they appear one by one
 * with a staggered smooth cubic-bezier floating entrance.
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  index = 0,
  delayMs,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const computedDelay = delayMs !== undefined ? delayMs : (index % 6) * 110;

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${computedDelay}ms`
      }}
      className={`reveal-on-scroll ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};
