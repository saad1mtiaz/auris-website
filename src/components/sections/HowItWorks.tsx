import { motion } from 'motion/react';
import { Mic, Cpu, Activity, Webhook, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function HowItWorks() {
  const { t } = useLanguage();

  const stepIcons = [Mic, Cpu, Activity, Webhook];

  return (
    <section id="how" className="bg-bg-secondary border-y border-border-hairline py-[140px]">
      <div className="section-container">
        <div className="flex items-center gap-4 mb-12">
          <span className="label-mono">{t.how.sectionLabel}</span>
          <div className="h-[1px] w-15 bg-accent/40" />
        </div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-[clamp(36px,4vw,52px)] font-light leading-tight max-w-[600px] mb-20"
        >
          {t.how.title1}<br />
          {t.how.title2}
        </motion.h2>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-4 relative z-10 bg-bg border border-border-hairline rounded-sm overflow-hidden shadow-lg">
            {t.how.steps.map((step, i) => {
              const Icon = stepIcons[i];
              return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="relative p-8 md:p-10 border-b md:border-b-0 md:border-r border-border-hairline last:border-0 hover:bg-bg-secondary transition-colors duration-500 group"
              >
                <div className="w-[88px] h-[88px] rounded-full bg-bg border border-border-hairline flex items-center justify-center mb-10 relative transition-colors duration-500 group-hover:border-accent shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                  <div className="absolute inset-[6px] rounded-full bg-bg-secondary flex items-center justify-center group-hover:bg-accent-dim/30 transition-colors duration-500">
                    <Icon size={24} className="text-accent" strokeWidth={1.5} />
                  </div>
                  {/* Connecting Line (Desktop) attached to circles */}
                  {i < t.how.steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 left-[88px] w-[calc(100%+80px)] h-[1px] bg-gradient-to-r from-accent/40 to-transparent -translate-y-1/2 z-0" />
                  )}
                </div>

                <div className="font-mono text-[10px] tracking-[0.2em] text-accent uppercase mb-4">
                  {t.how.stepLabel} 0{i + 1}
                </div>
                <h3 className="font-serif text-[24px] font-normal tracking-wide mb-2 leading-tight text-text-primary">
                  {step.title}
                </h3>
                <div className="text-[11px] text-text-muted mb-5 font-mono tracking-widest uppercase opacity-60">
                  {step.subtitle}
                </div>
                <p className="text-[14px] text-text-dim leading-relaxed font-light">
                  {step.body}
                </p>
                
                {/* Mobile connector arrow down */}
                {i < t.how.steps.length - 1 && (
                  <div className="md:hidden absolute bottom-[-16px] left-1/2 -translate-x-1/2 z-20 w-8 h-8 rounded-full bg-bg border border-border-hairline flex items-center justify-center text-accent/50">
                    <ArrowRight size={14} className="rotate-90" />
                  </div>
                )}
              </motion.div>
            )})}
          </div>
        </div>
      </div>
    </section>
  );
}
