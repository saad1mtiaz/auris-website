import { motion } from 'motion/react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function SDK() {
  const { t } = useLanguage();

  return (
    <section id="sdk" className="bg-bg-secondary border-t border-border-hairline py-[140px]">
      <div className="section-container">
        <div className="flex items-center gap-4 mb-12">
          <span className="label-mono">{t.sdk.sectionLabel}</span>
          <div className="h-[1px] w-15 bg-accent/40" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-15">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-[clamp(32px,3.5vw,48px)] font-light leading-[1.15]"
          >
            {t.sdk.title1}<br />{t.sdk.title2}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[15px] text-text-muted leading-relaxed self-center"
          >
            {t.sdk.subtitle}
          </motion.p>
        </div>

        {/* Code Block */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-black/40 hairline-border rounded-[4px] overflow-hidden"
        >
          <div className="px-5 py-3 border-b border-border-hairline flex items-center gap-2">
            {[1, 2, 3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-border-hairline" />)}
            <span className="font-mono text-[10px] text-text-ghost tracking-wider ml-2">{t.sdk.codeTitle}</span>
          </div>
          <div className="p-7 md:p-10 font-mono text-[12px] md:text-[14px] leading-relaxed text-text-muted overflow-x-auto">
            <span className="text-text-ghost">{t.sdk.codeComment}</span><br /><br />
            {'{'}<br />
            &nbsp;&nbsp;<span className="text-code-string">"event"</span>: <span className="text-accent">"fall_detected"</span>,<br />
            &nbsp;&nbsp;<span className="text-code-string">"confidence"</span>: <span className="text-code-key">0.84</span>,<br />
            &nbsp;&nbsp;<span className="text-code-string">"location"</span>: <span className="text-accent">"Room_7"</span>,<br />
            &nbsp;&nbsp;<span className="text-code-string">"timestamp"</span>: <span className="text-accent">"2025-05-16T03:47:12Z"</span>,<br />
            &nbsp;&nbsp;<span className="text-code-string">"audio_stored"</span>: <span className="text-code-key">false</span>,<br />
            &nbsp;&nbsp;<span className="text-code-string">"audio_transmitted"</span>: <span className="text-code-key">false</span><br />
            {'}'}
          </div>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-border-hairline hairline-border mt-10">
          {t.sdk.features.map((f, i) => (
            <div key={i} className="bg-bg-secondary p-8 hover:bg-bg transition-colors duration-300">
              <div className="label-mono text-accent mb-3 tracking-widest">{f.title}</div>
              <p className="text-[13px] text-text-muted leading-relaxed">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
