import React, { useState, useEffect, useRef } from 'react';

export interface TextSegment {
  text: string;
  highlight?: boolean;
  className?: string;
}

interface TypewriterHeadingProps {
  segments?: TextSegment[];
  text?: string;
  highlightWords?: string[];
  className?: string;
  highlightClassName?: string;
  speedMs?: number;
  delayMs?: number;
}

export const TypewriterHeading: React.FC<TypewriterHeadingProps> = ({
  segments,
  text,
  highlightWords = [],
  className = '',
  highlightClassName = 'text-[#0284C7]',
  speedMs = 26,
  delayMs = 120
}) => {
  // Flatten into an array of characters with their styling
  const fullCharacters = React.useMemo(() => {
    const chars: { char: string; isHighlight: boolean; customClass?: string }[] = [];

    if (segments && segments.length > 0) {
      segments.forEach((seg) => {
        for (const ch of seg.text) {
          chars.push({
            char: ch,
            isHighlight: !!seg.highlight,
            customClass: seg.className
          });
        }
      });
    } else if (text) {
      let remaining = text;
      while (remaining.length > 0) {
        let matched = false;
        for (const hw of highlightWords) {
          if (remaining.toLowerCase().startsWith(hw.toLowerCase())) {
            const actualSegment = remaining.slice(0, hw.length);
            for (const ch of actualSegment) {
              chars.push({ char: ch, isHighlight: true });
            }
            remaining = remaining.slice(hw.length);
            matched = true;
            break;
          }
        }
        if (!matched) {
          chars.push({ char: remaining[0], isHighlight: false });
          remaining = remaining.slice(1);
        }
      }
    }
    return chars;
  }, [segments, text, highlightWords]);

  const [visibleCount, setVisibleCount] = useState<number>(0);
  const [isTypingDone, setIsTypingDone] = useState<boolean>(false);
  const containerRef = useRef<HTMLHeadingElement>(null);
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  // Trigger typing once on mount / intersection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  // Run typing animation once
  useEffect(() => {
    if (!hasStarted || fullCharacters.length === 0 || isTypingDone) return;

    const timeout = setTimeout(() => {
      let current = 0;
      const interval = setInterval(() => {
        current += 1;
        setVisibleCount(current);
        if (current >= fullCharacters.length) {
          clearInterval(interval);
          // Finish immediately so typing stops and doesn't continue lingering
          setIsTypingDone(true);
        }
      }, speedMs);

      return () => clearInterval(interval);
    }, delayMs);

    return () => clearTimeout(timeout);
  }, [hasStarted, fullCharacters, isTypingDone, speedMs, delayMs]);

  // If typing completed, display all full characters directly
  const renderedChars = isTypingDone ? fullCharacters : fullCharacters.slice(0, visibleCount);

  // Group characters into continuous spans to prevent DOM fragmenting
  const renderedGroups: { text: string; isHighlight: boolean; customClass?: string }[] = [];
  renderedChars.forEach((c) => {
    const last = renderedGroups[renderedGroups.length - 1];
    if (last && last.isHighlight === c.isHighlight && last.customClass === c.customClass) {
      last.text += c.char;
    } else {
      renderedGroups.push({ text: c.char, isHighlight: c.isHighlight, customClass: c.customClass });
    }
  });

  return (
    <h1 
      ref={containerRef} 
      className={`relative inline-block font-heading ${className}`}
    >
      {renderedGroups.map((grp, idx) => (
        <span
          key={idx}
          className={`${grp.isHighlight ? highlightClassName : ''} ${grp.customClass || ''}`}
          style={{ whiteSpace: 'pre-wrap' }}
        >
          {grp.text}
        </span>
      ))}
      {/* Sleek typing cursor only visible while actively typing */}
      {!isTypingDone && visibleCount > 0 && (
        <span 
          aria-hidden="true"
          className="inline-block w-[3px] h-[0.8em] bg-[#0284C7] ml-1.5 align-baseline animate-pulse rounded-full shadow-[0_0_8px_rgba(2,132,199,0.8)]"
        />
      )}
    </h1>
  );
};
