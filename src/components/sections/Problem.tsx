import { motion } from 'motion/react';
import { OctagonAlert, Cloud, TriangleAlert } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Problem() {
  const { t } = useLanguage();

  const problemIcons = [
    <OctagonAlert key="0" size={36} strokeWidth={1.2} className="opacity-60" />,
    <Cloud key="1" size={36} strokeWidth={1.2} className="opacity-60" />,
    <TriangleAlert key="2" size={36} strokeWidth={1.2} className="opacity-60" />
  ];

  return (
    <section id="problem" className="py-[140px]">
      <div className="section-container">
        <div className="flex items-center gap-4 mb-12">
          <span className="label-mono">{t.problem.sectionLabel}</span>
          <div className="h-[1px] w-15 bg-accent/40" />
        </div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-[clamp(36px,4.5vw,58px)] font-light leading-[1.15] max-w-[700px] mb-20"
        >
          {t.problem.title1}<br />
          {t.problem.title2}<br />
          {t.problem.title3}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 bg-border-hairline hairline-border">
          {t.problem.items.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="bg-bg p-12 hover:bg-bg-secondary transition-colors duration-300"
            >
              <div className="mb-7 text-accent/60">
                {problemIcons[i]}
              </div>
              <h3 className="font-serif text-[22px] font-normal leading-tight mb-4 whitespace-pre-line">
                {p.title}
              </h3>
              <p className="text-[14px] text-text-muted leading-relaxed">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
