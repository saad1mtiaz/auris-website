import { motion } from 'motion/react';
import { Lock, FileJson, Activity, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Privacy() {
  const { t } = useLanguage();

  return (
    <section id="privacy" className="py-[140px]">
      <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-25 items-center">
        <div className="privacy-content">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-10">
            <span className="label-mono">{t.privacy.sectionLabel}</span>
            <div className="h-[1px] w-15 bg-accent/40" />
          </div>

          <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] font-light leading-[1.15] mb-7">
            {t.privacy.title}
          </h2>
          
          <p className="text-[15px] text-text-muted leading-relaxed mb-10">
            {t.privacy.subtitle}
          </p>

          <div className="flex flex-col gap-4">
            {t.privacy.points.map((point, i) => (
              <div key={i} className="flex items-start gap-4 text-[13px] text-text-muted leading-tight">
                <div className="mt-1 w-[18px] h-[18px] border border-accent rounded-full flex-shrink-0 flex items-center justify-center bg-accent-dim">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                </div>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
        <div className="relative w-full bg-bg-secondary border border-border-hairline rounded-[4px] p-6 md:p-8 flex flex-col shadow-[0_0_50px_rgba(27,205,160,0.03)] overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-start mb-8 relative z-10">
            <div className="flex items-start gap-3">
               <Activity size={16} className="text-accent mt-0.5" />
               <div className="font-mono text-[9px] tracking-widest text-text-muted uppercase leading-[1.6]">
                 {t.privacy.patientSafety}
               </div>
            </div>
            <div className="flex items-center gap-2">
               <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
               <span className="font-mono text-[10px] uppercase tracking-widest text-accent">{t.privacy.live}</span>
            </div>
          </div>

          {/* Illustration Area */}
          <div className="relative h-[160px] mb-8 border border-border-hairline rounded-[4px] overflow-hidden bg-bg flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 140" fill="none" preserveAspectRatio="none">
              {/* Grid Background (optional for medical feel) */}
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" className="stroke-border-hairline" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="300" height="140" fill="url(#grid)" />

              {/* Bed Graphic */}
              <g className="stroke-text-ghost fill-bg" strokeWidth="1.5">
                {/* Bed Base */}
                <rect x="50" y="90" width="120" height="15" rx="2" className="fill-bg-secondary stroke-border-hairline" />
                {/* Headboard */}
                <line x1="50" y1="60" x2="50" y2="105" className="stroke-border-hairline" />
                {/* Patient Head */}
                <circle cx="75" cy="70" r="8" className="fill-bg stroke-border-hairline" />
                {/* Blanket */}
                <path d="M 90 90 L 90 75 L 160 75 L 160 90" strokeLinejoin="round" className="stroke-border-hairline" />
                {/* IV Pole */}
                <line x1="190" y1="30" x2="190" y2="105" className="stroke-border-hairline" />
                {/* IV Bag */}
                <rect x="183" y="40" width="14" height="20" rx="3" className="fill-bg stroke-border-hairline" />
              </g>

              {/* The Pulse Line - using path overlay */}
              <motion.path
                d="M 0 85 L 100 85 L 110 50 L 120 110 L 130 70 L 135 85 L 205 85 L 210 50 L 220 110 L 230 70 L 235 85 L 300 85"
                className="stroke-accent drop-shadow-[0_0_5px_rgba(27,205,160,0.5)]"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </svg>
          </div>

          <h3 className="font-serif text-text-primary text-[24px] mb-2 tracking-wide font-normal">{t.privacy.healthcare}</h3>
          <p className="text-text-muted text-[14px] leading-relaxed mb-8 font-light">
            {t.privacy.healthcareDesc}
          </p>

          <div className="font-mono text-[10px] tracking-[0.2em] text-text-ghost uppercase mb-4">
            {t.privacy.detectedEvents}
          </div>
          
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center group">
               <span className="font-mono text-[11px] text-accent border border-accent/20 bg-accent-dim/20 px-2.5 py-1.5 rounded-[2px] flex items-center gap-2">
                 <AlertTriangle size={12} strokeWidth={1.5} /> patient_distress
               </span>
               <span className="font-mono text-[11px] text-text-muted">92ms</span>
            </div>
            
            <div className="flex justify-between items-center opacity-70">
               <span className="font-mono text-[11px] text-accent px-2.5 py-1.5">
                 fall_detected
               </span>
               <span className="font-mono text-[11px] text-text-muted">110ms</span>
            </div>
            
            <div className="flex justify-between items-center opacity-70">
               <span className="font-mono text-[11px] text-text-primary px-2.5 py-1.5 opacity-80">
                 call_button
               </span>
               <span className="font-mono text-[11px] text-text-muted">60ms</span>
            </div>
          </div>
        </div>
    </div>
    </section>
  );
}
