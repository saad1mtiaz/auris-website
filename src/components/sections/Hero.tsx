import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

function RotatingWord() {
  const { t } = useLanguage();
  const words = t.hero.rotatingWords;
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Reset index if languages change
    if (wordIndex >= words.length) {
      setWordIndex(0);
      setText("");
    }
  }, [words, wordIndex]);

  useEffect(() => {
    const currentWord = words[wordIndex] || "";
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, 30);
    } else {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
        if (text.length === currentWord.length) {
          timeout = setTimeout(() => setIsDeleting(true), 2500); 
        }
      }, 60);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words]);

  return (
    <span className="relative inline-block pr-3 text-accent">
      {text}
      <span className="absolute right-0 top-2 bottom-2 w-[3px] bg-accent animate-pulse" />
    </span>
  );
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let w: number, h: number;
    let points: { x: number; y: number; speed: number; amp: number; phase: number }[] = [];
    let t_val = 0;

    const resize = () => {
      w = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      h = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      
      points = Array.from({ length: 120 }, (_, i) => ({
        x: (i / 119) * canvas.offsetWidth,
        y: canvas.offsetHeight / 2,
        speed: 0.3 + Math.random() * 0.4,
        amp: 8 + Math.random() * 24,
        phase: Math.random() * Math.PI * 2
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      t_val += 0.008;
      
      ctx.beginPath();
      points.forEach((p, i) => {
        const y = canvas.offsetHeight / 2 + Math.sin(t_val * p.speed + p.phase) * p.amp * Math.sin((i / 119) * Math.PI);
        if (i === 0) ctx.moveTo(p.x, y);
        else ctx.lineTo(p.x, y);
      });

      const grad = ctx.createLinearGradient(0, 0, canvas.offsetWidth, 0);
      grad.addColorStop(0, 'rgba(27, 205, 160, 0)');
      grad.addColorStop(0.3, 'rgba(27, 205, 160, 0.6)');
      grad.addColorStop(0.7, 'rgba(27, 205, 160, 0.6)');
      grad.addColorStop(1, 'rgba(27, 205, 160, 0)');
      
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      animationFrameId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-[100dvh] md:min-h-0 md:py-[140px] lg:min-h-[100dvh] lg:py-0 flex flex-col justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_60%_at_60%_50%,rgba(27,205,160,0.04)_0%,transparent_70%)]" />

      <div className="section-container relative z-10 w-full">
        <div className="pt-12 md:pt-0 max-w-4xl">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.5 }}
              className="font-serif text-[clamp(40px,6vw,90px)] font-light leading-[0.95] tracking-tight max-w-[920px]"
            >
              {t.hero.title1}<br />
              {t.hero.title2}<em className="text-accent not-italic">{t.hero.title3}</em><br />
              {t.hero.title4} <br />
              <RotatingWord />
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.75 }}
              className="mt-9 text-[16px] text-text-muted max-w-[500px] leading-relaxed"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-[15px] mb-[20px] pl-[1px] flex flex-wrap gap-10"
            >
              {t.hero.keywords.map((keyword) => (
                <span key={keyword} className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.25em] text-text-ghost">
                  <span className="w-5 h-[1px] bg-accent/50" />
                  {keyword}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Waveform */}
      <div className="absolute bottom-0 left-0 right-0 h-[180px] overflow-hidden opacity-18 pointer-events-none z-0">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      {/* Scroll Arrow */}
      <motion.a 
        href="#stats"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' });
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        whileHover={{ opacity: 1, y: 4 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-text-primary z-20 cursor-pointer p-4"
        aria-label="Scroll to stats grid"
      >
        <ChevronDown size={32} strokeWidth={1.5} />
      </motion.a>
    </section>
  );
}
