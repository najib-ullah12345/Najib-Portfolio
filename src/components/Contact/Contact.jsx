import { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';
import { personalInfo } from '../../data/personalInfo';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState(''); // '' | 'sending' | 'success' | 'error'
  const [ref, visible] = useScrollReveal({ threshold: 0.15 });

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
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: 'fas fa-phone',
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Location',
      value: personalInfo.location,
      href: 'https://maps.app.goo.gl/WHQdMLXZhGUDw5MW8',
    },
  ];

  return (
    <section id="contact" className="section-pad bg-dark relative">
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle
          eyebrow="Get in Touch"
          title="Let's Work Together"
          subtitle="Have a project in mind or want to collaborate? Feel free to reach out."
        />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card p-8">
              <h3 className="text-white font-semibold text-lg mb-6">Contact Information</h3>
              <div className="space-y-5">
                {contactInfo.map(({ icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <i className={`${icon} text-gold text-lg`} />
                    </div>
                    <div>
                      <p className="text-text-muted text-xs mb-0.5">{label}</p>
                      <p className="text-white text-sm font-medium group-hover:text-gold transition-colors">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <p className="text-text-muted text-xs mb-4">Connect with me</p>
                <div className="flex gap-3">
                  {[
                    { icon: 'fab fa-github', href: personalInfo.github },
                    { icon: 'fab fa-linkedin-in', href: personalInfo.linkedin },
                    { icon: 'fab fa-facebook-f', href: personalInfo.facebook },
                    { icon: 'fab fa-whatsapp', href: personalInfo.whatsapp },
                  ].map(({ icon, href }) => (
                    <a
                      key={icon}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-text-muted hover:text-gold hover:bg-gold/10 transition-all"
                    >
                      <i className={icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="card p-6 border-green-500/20">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-50" />
                </div>
                <p className="text-white font-medium text-sm">{personalInfo.availability}</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="card p-8">
              <h3 className="text-white font-semibold text-lg mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-text-muted text-xs mb-2 font-medium">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Najib Ullah Khan"
                      required
                      className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-gold/50 transition-colors placeholder:text-white/20"
                    />
                  </div>
                  <div>
                    <label className="block text-text-muted text-xs mb-2 font-medium">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="najibullah0048@gmail.com"
                      required
                      className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-gold/50 transition-colors placeholder:text-white/20"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-text-muted text-xs mb-2 font-medium">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+92 344 658 0048"
                      required
                      className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-gold/50 transition-colors placeholder:text-white/20"
                    />
                  </div>
                  <div>
                    <label className="block text-text-muted text-xs mb-2 font-medium">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-gold/50 transition-colors placeholder:text-white/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-text-muted text-xs mb-2 font-medium">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows="5"
                    required
                    className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-gold/50 transition-colors placeholder:text-white/20 resize-none"
                  />
                </div>

                {status === 'success' && (
                  <p className="text-green-400 text-sm font-medium text-center">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-red-400 text-sm font-medium text-center">
                    ✗ Something went wrong. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full justify-center text-base py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <i className="fas fa-spinner fa-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane" />
                      Send Message
                    </>
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
