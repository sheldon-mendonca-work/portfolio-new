import { useEffect, useState, useCallback } from "react";

interface InteractiveGridProps {
  className?: string;
}

const InteractiveGrid: React.FC<InteractiveGridProps> = ({ className = "" }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
    if (!isVisible) setIsVisible(true);
  }, [isVisible]);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  // Calculate grid cell size
  const cellSize = 50;
  const glowRadius = 150;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Base grid */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: `${cellSize}px ${cellSize}px`
        }}
      />
      
      {/* Interactive glow effect */}
      {isVisible && (
        <div
          className="absolute rounded-full pointer-events-none transition-opacity duration-300"
          style={{
            left: mousePos.x - glowRadius,
            top: mousePos.y - glowRadius,
            width: glowRadius * 2,
            height: glowRadius * 2,
            background: `
              radial-gradient(
                circle at center,
                rgba(59, 130, 246, 0.4) 0%,
                rgba(59, 130, 246, 0.2) 30%,
                rgba(59, 130, 246, 0.05) 60%,
                transparent 100%
              )
            `,
            filter: 'blur(20px)'
          }}
        />
      )}
      
      {/* Grid lines that glow near cursor */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: `${cellSize}px ${cellSize}px`,
          maskImage: isVisible ? `radial-gradient(circle ${glowRadius}px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)` : 'none',
          WebkitMaskImage: isVisible ? `radial-gradient(circle ${glowRadius}px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)` : 'none',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
      />
      
      {/* Bright intersection points */}
      {isVisible && (
        <div
          className="absolute pointer-events-none"
          style={{
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              radial-gradient(circle at ${mousePos.x % cellSize}px ${mousePos.y % cellSize}px, 
                rgba(59, 130, 246, 0.8) 0%, 
                rgba(59, 130, 246, 0.4) 2px, 
                transparent 3px
              )
            `,
            backgroundSize: `${cellSize}px ${cellSize}px`,
            opacity: 0.6
          }}
        />
      )}
    </div>
  );
};

export default InteractiveGrid;