import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border-hairline">
      <div className="max-w-7xl mx-auto px-6 md:px-15 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-serif text-[18px] tracking-[0.18em] text-text-muted">
          AUR<span className="text-accent">I</span>S
        </div>
        <div className="text-[12px] text-text-ghost tracking-[0.08em] text-center md:text-right">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
