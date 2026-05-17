import { motion, useMotionValue, useMotionTemplate } from 'motion/react';
import { MouseEvent } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';

export default function CTA() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { t } = useLanguage();

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section 
      id="cta" 
      className="py-40 text-center relative overflow-hidden group"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Hover Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-700 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(27,205,160,0.06) 0%, transparent 70%)`,
        }}
      />

      {/* Centered Glow (Base) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(27,205,160,0.03)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="section-container relative z-10">
        <div className="font-mono text-[10px] tracking-[0.25em] text-text-ghost uppercase mb-8">
          {t.cta.label}
        </div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-[clamp(40px,5vw,72px)] font-light leading-[1.1] max-w-[700px] mx-auto mb-12"
        >
          {t.cta.title}
        </motion.h2>

        <Link 
          to="/contact" 
          className="inline-block px-12 py-4 bg-accent text-bg font-medium text-[13px] tracking-[0.12em] uppercase rounded-xs transition-all duration-300 hover:opacity-85 hover:-translate-y-0.5"
        >
          {t.cta.button}
        </Link>

        <div className="mt-6 text-[12px] text-text-ghost tracking-[0.08em]">
          {t.cta.tag}
        </div>
      </div>
    </section>
  );
}
