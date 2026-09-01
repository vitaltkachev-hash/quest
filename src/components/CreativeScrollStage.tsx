'use client';

import React, { useRef, useState, useEffect } from 'react';
import { ThreeStateController } from './ThreeStateController';

interface CreativeScrollStageProps {
  onProgressUpdate?: (progress: number) => void;
}

export const CreativeScrollStage: React.FC<CreativeScrollStageProps> = ({
  onProgressUpdate,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStateIndex, setActiveStateIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollableHeight = rect.height - window.innerHeight;

      if (totalScrollableHeight <= 0) return;

      // Calculate progress from 0 to 1 as container scrolls
      const currentProgress = Math.max(
        0,
        Math.min(1, -rect.top / totalScrollableHeight)
      );

      setScrollProgress(currentProgress);
      if (onProgressUpdate) {
        onProgressUpdate(currentProgress);
      }

      // Determine active state index (0: IDEA, 1: FORM, 2: REALITY)
      if (currentProgress < 0.35) {
        setActiveStateIndex(0);
      } else if (currentProgress < 0.7) {
        setActiveStateIndex(1);
      } else {
        setActiveStateIndex(2);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [onProgressUpdate]);

  return (
    <section
      ref={containerRef}
      id="states"
      className="relative w-full h-[320vh] bg-transparent"
    >
      {/* Sticky Fullscreen Viewport Scene */}
      <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden">
        <ThreeStateController
          progress={scrollProgress}
          activeStateIndex={activeStateIndex}
        />
      </div>
    </section>
  );
};
