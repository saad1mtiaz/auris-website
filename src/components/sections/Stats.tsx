import { motion, useInView, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

function Counter({ value, direction = "up" }: { value: number; direction?: "up" | "down" }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView) {
      const node = nodeRef.current;
      if (!node) return;

      const controls = animate(0, value, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = Math.floor(value).toString();
        },
      });

      return () => controls.stop();
    }
  }, [value, isInView]);

  return <span ref={nodeRef}>0</span>;
}

export default function Stats() {
  const { t } = useLanguage();

  return (
    <section id="stats" className="bg-bg-secondary w-full py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-15">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-border-hairline">
        {t.stats.map((stat, index) => (
          <div 
            key={index}
            className="relative bg-bg p-12 md:p-16 flex flex-col border-r border-border-hairline last:border-r-0"
          >
            {/* Mint highlight line */}
            <div className="absolute top-8 bottom-8 left-0 w-[2px] bg-accent" />
            
            <div className="font-serif text-[72px] md:text-[84px] font-light italic leading-none mb-8 flex items-baseline">
              {stat.prefix && <span className="text-text-ghost mr-2 not-italic">{stat.prefix}</span>}
              <span className="text-accent">
                <Counter value={stat.number} />
              </span>
              {stat.suffix && <span className="text-text-ghost ml-1 not-italic">{stat.suffix}</span>}
            </div>
            
            <p className="text-[14px] text-text-muted leading-relaxed max-w-[240px] mb-10 flex-grow font-light">
              {stat.label}
            </p>
            
            <div className="font-mono text-[10px] tracking-[0.2em] text-text-ghost uppercase">
              {stat.note}
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
