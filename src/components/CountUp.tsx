import React, { useState, useEffect, useRef } from 'react';

interface CountUpProps {
  value: string | number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
}

/**
 * Parses numbers and formatting from strings like:
 * "20+", "10,000+", "4.9/5", "100%", "98.5%", "15+"
 */
export const CountUp: React.FC<CountUpProps> = ({
  value,
  duration = 2000,
  className = '',
  suffix = '',
  prefix = ''
}) => {
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const rawStr = String(value).trim();
    
    // Check if the value is purely non-numeric (e.g. "DentMatrix")
    const match = rawStr.match(/^([^0-9.]*)([0-9,.]+)(.*)$/);
    if (!match) {
      setDisplayValue(rawStr);
      return;
    }

    const pre = prefix || match[1];
    const numPart = match[2].replace(/,/g, '');
    const post = suffix || match[3];
    const targetNumber = parseFloat(numPart);

    if (isNaN(targetNumber)) {
      setDisplayValue(rawStr);
      return;
    }

    const isDecimal = numPart.includes('.');
    const decimalPlaces = isDecimal ? numPart.split('.')[1].length : 0;
    const hasCommas = match[2].includes(',');

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let startTime: number | null = null;

          const step = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            // Ease out expo formula for a smooth premium slowdown at the end
            const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const currentNum = targetNumber * easeOut;

            let formatted = isDecimal 
              ? currentNum.toFixed(decimalPlaces) 
              : Math.floor(currentNum).toString();

            if (hasCommas) {
              const parts = formatted.split('.');
              parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
              formatted = parts.join('.');
            }

            setDisplayValue(`${pre}${formatted}${post}`);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              // Ensure exact target formatting on finish
              let finalFormatted = isDecimal 
                ? targetNumber.toFixed(decimalPlaces) 
                : targetNumber.toString();
              if (hasCommas) {
                const parts = finalFormatted.split('.');
                parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                finalFormatted = parts.join('.');
              }
              setDisplayValue(`${pre}${finalFormatted}${post}`);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [value, duration, suffix, prefix, hasAnimated]);

  return (
    <span ref={elementRef} className={`inline-block tabular-nums ${className}`}>
      {displayValue}
    </span>
  );
};
