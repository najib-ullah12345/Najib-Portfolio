import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { personalInfo } from '../../data/personalInfo';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState('');
  const [ref, visible] = useScrollReveal({ threshold: 0.1 });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/mrgnwngl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          UserName: form.name,
          Email: form.email,
          'Phone Number': form.phone,
          Subject: form.subject,
          Message: form.message,
        }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      } else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  const contactRows = [
    { icon: 'fa-envelope', label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: 'fa-phone', label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: 'fa-map-marker-alt', label: 'Location', value: personalInfo.location, href: 'https://maps.app.goo.gl/WHQdMLXZhGUDw5MW8' },
  ];

  const socials = [
    { icon: 'fab fa-github', href: personalInfo.github },
    { icon: 'fab fa-linkedin-in', href: personalInfo.linkedin },
    { icon: 'fab fa-facebook-f', href: personalInfo.facebook },
    { icon: 'fab fa-whatsapp', href: personalInfo.whatsapp },
  ];

  return (
    <section id="contact" className="section bg-[#111117] relative">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-8">
        {/* Header */}
        <div ref={ref} className={`text-center mb-16 reveal ${visible ? 'visible' : ''}`}>
          <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-3">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Contact Me</h2>
          <div className="divider divider-center" />
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* ── LEFT: Info ── */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-8">
              <h3 className="text-white font-bold text-base mb-6">Contact Information</h3>
              <div className="space-y-5">
                {contactRows.map(({ icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-gold/[0.08] flex items-center justify-center flex-shrink-0 group-hover:bg-gold/[0.14] transition-colors">
                      <i className={`fas ${icon} text-gold text-base`} />
                    </div>
                    <div>
                      <p className="text-[#4a4a5c] text-[10px] uppercase tracking-wider mb-0.5">{label}</p>
                      <p className="text-white text-sm font-medium group-hover:text-gold transition-colors">{value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social */}
              <div className="mt-8 pt-6 border-t border-white/[0.05]">
                <p className="text-[#4a4a5c] text-[10px] uppercase tracking-wider mb-4">Follow Me</p>
                <div className="flex gap-3">
                  {socials.map(({ icon, href }) => (
                    <a
                      key={icon}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center text-[#7a7a8c] hover:text-gold hover:bg-gold/[0.08] transition-all"
                    >
                      <i className={`${icon} text-sm`} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Available badge */}
            <div className="glass-card p-5 flex items-center gap-4">
              <div className="relative flex-shrink-0">
                <span className="w-3 h-3 rounded-full bg-green-400 block" />
                <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60" />
              </div>
              <p className="text-white text-sm font-medium">{personalInfo.availability}</p>
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div className="lg:col-span-3">
            <div className="glass-card p-8 md:p-10">
              <h3 className="text-white font-bold text-base mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#4a4a5c] text-[10px] uppercase tracking-wider font-medium mb-2">Your Name</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Najib Ullah Khan" required
                      className="w-full bg-[#18181f] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-gold/40 transition-colors placeholder:text-[#3a3a4c]" />
                  </div>
                  <div>
                    <label className="block text-[#4a4a5c] text-[10px] uppercase tracking-wider font-medium mb-2">Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="najibullah0048@gmail.com" required
                      className="w-full bg-[#18181f] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-gold/40 transition-colors placeholder:text-[#3a3a4c]" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#4a4a5c] text-[10px] uppercase tracking-wider font-medium mb-2">Phone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+92 344 658 0048" required
                      className="w-full bg-[#18181f] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-gold/40 transition-colors placeholder:text-[#3a3a4c]" />
                  </div>
                  <div>
                    <label className="block text-[#4a4a5c] text-[10px] uppercase tracking-wider font-medium mb-2">Subject</label>
                    <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Project Inquiry"
                      className="w-full bg-[#18181f] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-gold/40 transition-colors placeholder:text-[#3a3a4c]" />
                  </div>
                </div>
                <div>
                  <label className="block text-[#4a4a5c] text-[10px] uppercase tracking-wider font-medium mb-2">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project..." rows="5" required
                    className="w-full bg-[#18181f] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-gold/40 transition-colors placeholder:text-[#3a3a4c] resize-none" />
                </div>

                {status === 'success' && (
                  <p className="text-green-400 text-sm font-medium text-center">✓ Message sent! I'll get back to you soon.</p>
                )}
                {status === 'error' && (
                  <p className="text-red-400 text-sm font-medium text-center">✗ Something went wrong. Please try again.</p>
                )}

                <button type="submit" disabled={status === 'sending'}
                  className="btn-gold w-full justify-center text-sm py-3.5 disabled:opacity-60 disabled:cursor-not-allowed">
                  {status === 'sending' ? (
                    <><i className="fas fa-spinner fa-spin" /> Sending...</>
                  ) : (
                    <><i className="fas fa-paper-plane" /> Send Message</>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
