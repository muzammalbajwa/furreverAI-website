import React from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';

function R({ children, className = '', delay = '', as: Tag = 'div' }) {
  const ref = useReveal();
  return <Tag ref={ref} className={`reveal ${delay} ${className}`}>{children}</Tag>;
}

const TEAM = [
  { av: '👩‍💻', bg: 'linear-gradient(135deg,#FFE0B2,#FFCC80)', name: 'Aisha Rahman', role: 'Co-Founder & CEO', pet: '🐕 Golden Retriever mom' },
  { av: '👨‍💻', bg: 'linear-gradient(135deg,#B2DFDB,#80CBC4)', name: 'James Park', role: 'Co-Founder & CTO', pet: '🐈 Two rescue cats' },
  { av: '👩‍⚕️', bg: 'linear-gradient(135deg,#E1BEE7,#CE93D8)', name: 'Dr. Priya Mehta', role: 'Head of Veterinary', pet: '🐇 Rabbit enthusiast' },
  { av: '👨‍🎨', bg: 'linear-gradient(135deg,#BBDEFB,#90CAF9)', name: 'Carlos Rivera', role: 'Lead Designer', pet: '🐕 Labrador dad' },
];

const VALUES = [
  { ico: '💛', cls: 'a', title: 'Pet-First Thinking', desc: "Every decision starts with: does this make life better for pets? If the answer isn't a clear yes, we go back to the drawing board." },
  { ico: '🔬', cls: 't', title: 'Science-Backed', desc: 'We partner with licensed veterinarians to ensure every insight is grounded in real science — not guesswork.' },
  { ico: '🔒', cls: 'p', title: 'Privacy by Design', desc: "Your pet's data belongs to you — always. We never sell, share, or monetize health information. Period." },
  { ico: '🤝', cls: 't', title: 'Community First', desc: "We're building the most supportive community of pet lovers anywhere. No one should navigate pet parenthood alone." },
  { ico: '✨', cls: 'a', title: 'Radical Simplicity', desc: "Powerful tools shouldn't require a manual. We obsess over design so Furrever feels effortless from day one." },
  { ico: '🌱', cls: 'p', title: 'Always Improving', desc: "We ship updates every two weeks driven entirely by user feedback. Your voice shapes Furrever's future." },
];

const TL = [
  { ico: '💡', cls: 'amb', year: '2022 — Q1', title: 'The idea is born', desc: "After spending 3 hours searching for Max's vaccination records, Aisha decides there has to be a better way." },
  { ico: '🛠️', cls: 'tel', year: '2022 — Q3', title: 'First prototype launches', desc: 'A basic iOS app with pet profiles and vet tracking. 50 beta users sign up within the first weekend.' },
  { ico: '🤖', cls: 'amb', year: '2023 — Q2', title: 'AI Assistant launches', desc: "Powered by the latest language models and reviewed by our veterinary team, the AI chatbot answers pet health questions 24/7." },
  { ico: '🌍', cls: 'tel', year: '2024 — Q1', title: 'Community goes live', desc: 'The social feed launches. Within 30 days, 10,000 posts are shared. The community becomes our most-loved feature.' },
  { ico: '🚀', cls: 'amb', year: '2025 — Today', title: '50,000+ happy pet parents', desc: 'Available on iOS & Android worldwide — sleep tracking, activity monitoring, diet management, AI assistant, and community.' },
];

export default function About() {
  return (
    <>
      {/* HERO */}
      <section style={{ minHeight: '72vh', background: 'linear-gradient(155deg,#FFF8EC 0%,#FFFDF9 45%,#F0FEFA 100%)', display: 'flex', alignItems: 'center', padding: '140px 24px 88px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: 560, height: 560, borderRadius: '50%', background: 'radial-gradient(circle,rgba(245,166,35,.13) 0%,transparent 70%)', top: -120, right: -120, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle,rgba(43,191,174,.1) 0%,transparent 70%)', bottom: -80, left: -80, pointerEvents: 'none' }} />
        <div className="si" style={{ width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }} className="about-hero-grid">
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#FFF3DC', border: '1px solid rgba(245,166,35,.3)', borderRadius: 50, padding: '8px 16px', fontSize: 13, fontWeight: 600, color: '#E8890A', marginBottom: 22 }}>
                <span style={{ width: 8, height: 8, background: '#F5A623', borderRadius: '50%', animation: 'pulse 2s infinite', display: 'inline-block' }} />
                🐾 Our Story
              </div>
              <h1 style={{ fontSize: 'clamp(36px,5vw,62px)', fontWeight: 800, color: '#1A1F3C', lineHeight: 1.08, marginBottom: 22 }}>Built by pet lovers,<br /><span className="grad">for pet lovers</span></h1>
              <p style={{ fontSize: 17, lineHeight: 1.72, color: '#6B7280', marginBottom: 36, maxWidth: 480 }}>Furrever AI was born from a simple frustration: caring for pets was scattered across sticky notes, random reminders, and pure guesswork. We decided to fix that.</p>
              <div style={{ display: 'flex', gap: 36, flexWrap: 'wrap' }}>
                {[['2022', 'Founded'], ['50K+', 'Pet Parents'], ['4.9★', 'App Rating'], ['12', 'Team Members']].map(([v, l]) => (
                  <div key={l}>
                    <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 30, fontWeight: 800, color: '#1A1F3C', lineHeight: 1 }}>{v}</div>
                    <div style={{ fontSize: 12, color: '#6B7280', marginTop: 4 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <R className="d2" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 380 }}>
              <div style={{ position: 'absolute', top: -10, right: -20, background: '#fff', borderRadius: 18, boxShadow: '0 24px 80px rgba(26,31,60,.14)', padding: '14px 16px', zIndex: 5, animation: 'floatY 4s ease-in-out infinite' }}>
                <div style={{ fontSize: 20, marginBottom: 4 }}>🐕</div>
                <div style={{ fontSize: 9, color: '#9CA3AF', marginBottom: 2 }}>Pets helped</div>
                <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 18, fontWeight: 800, color: '#1A1F3C' }}>120K+</div>
                <div style={{ fontSize: 9, color: '#2BBFAE', fontWeight: 600, marginTop: 2 }}>and growing 🎉</div>
              </div>
              <div style={{ position: 'absolute', bottom: 10, left: -30, background: '#fff', borderRadius: 18, boxShadow: '0 24px 80px rgba(26,31,60,.14)', padding: '14px 16px', zIndex: 5, animation: 'floatCard 3.5s 1.2s ease-in-out infinite' }}>
                <div style={{ fontSize: 20, marginBottom: 4 }}>⭐</div>
                <div style={{ fontSize: 9, color: '#9CA3AF', marginBottom: 2 }}>App Store rating</div>
                <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 18, fontWeight: 800, color: '#1A1F3C' }}>4.9 / 5</div>
                <div style={{ fontSize: 9, color: '#2BBFAE', fontWeight: 600, marginTop: 2 }}>★★★★★</div>
              </div>
              <div style={{ background: 'linear-gradient(135deg,#F5A623,#E8890A)', borderRadius: 28, padding: 32, color: '#fff', width: 280, boxShadow: '0 32px 80px rgba(245,166,35,.28)', position: 'relative', zIndex: 2 }}>
                <div style={{ fontSize: 56, marginBottom: 16 }}>🐾</div>
                <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>Our mission</h3>
                <p style={{ fontSize: 13, opacity: .85, lineHeight: 1.6 }}>Give every pet on Earth the smart, loving care they deserve — powered by AI and community.</p>
              </div>
            </R>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section style={{ background: '#F9F7F4', padding: '88px 24px' }}>
        <div className="si">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }} className="about-hero-grid">
            <R>
              <div style={{ background: 'linear-gradient(145deg,#FFF3DC,#FFE0B2)', borderRadius: 28, height: 440, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 110, position: 'relative', overflow: 'hidden' }}>
                🐾
                <div style={{ position: 'absolute', bottom: 24, left: 24, background: '#fff', borderRadius: 18, padding: '14px 18px', boxShadow: 'var(--sh-md)', display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ fontSize: 28 }}>❤️</div>
                  <div>
                    <div style={{ fontSize: 10, color: '#6B7280', fontWeight: 600, textTransform: 'uppercase', letterSpacing: .5 }}>Pets cared for</div>
                    <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 20, fontWeight: 800, color: '#1A1F3C' }}>120,000+</div>
                    <div style={{ fontSize: 11, color: '#2BBFAE', fontWeight: 600 }}>↑ growing every day</div>
                  </div>
                </div>
              </div>
            </R>
            <R className="d2">
              <div className="s-label">Our Mission</div>
              <h2 className="s-h2">Every pet deserves<br /><span className="grad">the best possible life</span></h2>
              <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 18 }}>
                {[['💡', 'Informed parents make better caregivers', "By putting powerful AI and beautiful design in your pocket, we help you understand your pet on a deeper level."],
                  ['🔬', 'Science-backed, vet-reviewed', 'Every insight is grounded in peer-reviewed veterinary research, reviewed by our team of licensed vets.'],
                  ['🌍', 'Community at the core', "Pet parenting can be isolating. We're building the most supportive, knowledgeable community of pet lovers on the planet."]
                ].map(([ico, title, desc]) => (
                  <div key={title} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                    <div style={{ width: 38, height: 38, borderRadius: 12, background: '#FFF3DC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0, marginTop: 2 }}>{ico}</div>
                    <div><h4 style={{ fontSize: 15, fontWeight: 700, color: '#1A1F3C', marginBottom: 4 }}>{title}</h4><p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.55 }}>{desc}</p></div>
                  </div>
                ))}
              </div>
            </R>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div style={{ background: 'linear-gradient(135deg,#F5A623,#E8890A)', padding: '72px 24px' }}>
        <div className="si" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 32, textAlign: 'center' }} className="stats-resp">
          {[['2022', 'Year Founded'], ['50K+', 'Active Users'], ['120K+', 'Pets on Platform'], ['4.9★', 'App Store Rating']].map(([v, l]) => (
            <R key={l}><div style={{ fontFamily: "'Sora',sans-serif", fontSize: 'clamp(36px,5vw,56px)', fontWeight: 800, color: '#fff', lineHeight: 1 }}>{v}</div><div style={{ fontSize: 14, color: 'rgba(255,255,255,.75)', marginTop: 8 }}>{l}</div></R>
          ))}
        </div>
      </div>

      {/* VALUES */}
      <section style={{ padding: '88px 24px' }}>
        <div className="si">
          <R className="tc">
            <div className="s-label">Our Values</div>
            <h2 className="s-h2">What drives everything we do</h2>
            <p className="s-sub">Six principles that shape every feature, every design decision, and every line of code.</p>
          </R>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22, marginTop: 56 }} className="values-grid">
            {VALUES.map((v, i) => (
              <R key={v.title} className="vc" delay={`d${(i % 3) + 1}`} style={{ background: '#fff', borderRadius: 22, padding: '30px 26px', border: '1px solid #E8E5E0', transition: 'transform .3s,box-shadow .3s', position: 'relative', overflow: 'hidden' }}>
                <div style={{ width: 52, height: 52, borderRadius: 16, background: v.cls === 'a' ? '#FFF3DC' : v.cls === 't' ? '#E0FAF7' : '#F0EEFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, marginBottom: 20 }}>{v.ico}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1A1F3C', marginBottom: 9 }}>{v.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.62 }}>{v.desc}</p>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ background: 'linear-gradient(145deg,#1A1F3C,#2D3561)', padding: '88px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle,rgba(245,166,35,.1) 0%,transparent 60%)', top: -200, right: -200, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(43,191,174,.08) 0%,transparent 60%)', bottom: -100, left: -100, pointerEvents: 'none' }} />
        <div className="si">
          <R className="tc">
            <div className="s-label" style={{ color: '#2BBFAE' }}>Our Journey</div>
            <h2 className="s-h2" style={{ color: '#fff' }}>How we got here</h2>
            <p className="s-sub" style={{ color: 'rgba(255,255,255,.6)' }}>From a frustrating vet visit to 50,000 happy pet parents.</p>
          </R>
          <div style={{ maxWidth: 800, margin: '56px auto 0', position: 'relative', zIndex: 1 }}>
            <div style={{ position: 'absolute', left: 22, top: 0, bottom: 0, width: 2, background: 'rgba(255,255,255,.12)' }} />
            {TL.map((t, i) => (
              <R key={t.title} delay={`d${(i % 4) + 1}`} style={{ display: 'flex', gap: 32, marginBottom: 32 }}>
                <div style={{ width: 46, height: 46, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0, position: 'relative', zIndex: 1, background: t.cls === 'amb' ? 'linear-gradient(135deg,#F5A623,#E8890A)' : 'linear-gradient(135deg,#2BBFAE,#1DA89A)', boxShadow: t.cls === 'amb' ? '0 4px 16px rgba(245,166,35,.4)' : '0 4px 16px rgba(43,191,174,.4)' }}>{t.ico}</div>
                <div style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 20, padding: '22px 24px', flex: 1, backdropFilter: 'blur(10px)' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#F5A623', letterSpacing: .6, textTransform: 'uppercase', marginBottom: 6 }}>{t.year}</div>
                  <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{t.title}</div>
                  <div style={{ fontSize: 14, color: 'rgba(255,255,255,.55)', lineHeight: 1.65 }}>{t.desc}</div>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section style={{ padding: '88px 24px' }}>
        <div className="si">
          <R className="tc">
            <div className="s-label">The Team</div>
            <h2 className="s-h2">Passionate humans behind<br /><span className="grad">the paws</span></h2>
            <p className="s-sub">A small, remote-first team of engineers, designers, vets, and devoted pet parents.</p>
          </R>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 22, marginTop: 56 }} className="team-grid">
            {TEAM.map((t, i) => (
              <R key={t.name} delay={`d${i + 1}`} style={{ background: '#fff', borderRadius: 22, padding: 28, border: '1px solid #E8E5E0', textAlign: 'center', transition: 'transform .3s,box-shadow .3s' }}>
                <div style={{ width: 76, height: 76, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 34, margin: '0 auto 16px', background: t.bg, boxShadow: '0 8px 24px rgba(0,0,0,.1)' }}>{t.av}</div>
                <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 16, fontWeight: 700, color: '#1A1F3C', marginBottom: 4 }}>{t.name}</div>
                <div style={{ fontSize: 13, color: '#6B7280', marginBottom: 14 }}>{t.role}</div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 12, background: '#F9F7F4', borderRadius: 50, padding: '5px 12px', color: '#1A1F3C', border: '1px solid #E8E5E0' }}>{t.pet}</div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-strip">
        <div className="cta-strip-glow" />
        <h2>Join the Furrever family 🐾</h2>
        <p>Give your pet the smart, loving care they deserve. Free to download, always.</p>
        <div className="cta-strip-btns">
          <Link to="/#download" className="store-btn dark"><span className="store-btn-icon">🍎</span><span><span className="store-btn-label">Download on the</span><span className="store-btn-name">App Store</span></span></Link>
          <Link to="/#download" className="store-btn light"><span className="store-btn-icon">▶</span><span><span className="store-btn-label">Get it on</span><span className="store-btn-name">Google Play</span></span></Link>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){.about-hero-grid{grid-template-columns:1fr!important;gap:36px!important}}
        @media(max-width:900px){.values-grid{grid-template-columns:1fr 1fr!important}}
        @media(max-width:900px){.team-grid{grid-template-columns:1fr 1fr!important}}
        @media(max-width:900px){.stats-resp{grid-template-columns:1fr 1fr!important;gap:24px!important}}
        @media(max-width:640px){.values-grid,.team-grid{grid-template-columns:1fr!important}}
        @media(max-width:640px){.stats-resp{grid-template-columns:1fr 1fr!important}}
      `}</style>
    </>
  );
}
