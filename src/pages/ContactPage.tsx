import { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'' | 'saving' | 'success' | 'error'>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('saving');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="min-h-screen py-20 px-6 md:px-15 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full">
        <div className="mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="label-mono">{t.contact?.label || 'GET IN TOUCH'}</span>
            <div className="h-[1px] w-15 bg-accent/40" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-[clamp(40px,5vw,60px)] font-light leading-tight text-white mb-4"
          >
            {t.contact?.title || 'Let\'s talk about your integration.'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-text-muted text-[16px] leading-relaxed"
          >
            {t.contact?.subtitle || 'Fill out the form below and our engineering team will get back to you within 24 hours.'}
          </motion.p>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.3 }}
           className="bg-bg-secondary p-8 border border-border-hairline relative"
        >
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6 border border-accent/20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
              </div>
              <h3 className="font-serif text-[24px] mb-3 text-white">{t.contact?.successTitle || 'Message Sent'}</h3>
              <p className="text-text-muted">{t.contact?.successMessage || 'We have received your message and will be in touch shortly.'}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* NOTE: Replace the value below with your actual Web3Forms access key */}
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-mono text-[10px] tracking-widest text-text-ghost uppercase">
                    {t.contact?.nameLabel || 'Name'}
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    className="bg-bg border border-border-hairline px-4 py-3 text-[14px] text-white focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-mono text-[10px] tracking-widest text-text-ghost uppercase">
                    {t.contact?.emailLabel || 'Email'}
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    className="bg-bg border border-border-hairline px-4 py-3 text-[14px] text-white focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="font-mono text-[10px] tracking-widest text-text-ghost uppercase">
                  {t.contact?.companyLabel || 'Company'}
                </label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  className="bg-bg border border-border-hairline px-4 py-3 text-[14px] text-white focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-mono text-[10px] tracking-widest text-text-ghost uppercase">
                  {t.contact?.messageLabel || 'Message'}
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5}
                  required
                  className="bg-bg border border-border-hairline px-4 py-3 text-[14px] text-white focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={status === 'saving'}
                  className="w-full md:w-auto inline-flex justify-center items-center px-10 py-4 bg-accent text-bg font-medium text-[13px] tracking-[0.12em] uppercase rounded-xs transition-all duration-300 hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'saving' ? (t.contact?.sendingLabel || 'Sending...') : (t.contact?.sendLabel || 'Send Message')}
                </button>
              </div>

              {status === 'error' && (
                <div className="text-red-500 text-[13px] mt-2">
                  {t.contact?.errorMessage || 'Something went wrong. Please try again later.'}
                </div>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
