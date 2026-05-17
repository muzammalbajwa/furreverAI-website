import React, { useState } from 'react';
import useReveal from '../hooks/useReveal';
import { Link } from 'react-router-dom';

function R({ children, className = '', delay = '' }) {
  const ref = useReveal();
  return <div ref={ref} className={`reveal ${delay} ${className}`}>{children}</div>;
}

const POSTS = [
  { cat: 'Health & Wellness', date: 'May 8, 2025', emoji: '🐈', bg: 'linear-gradient(135deg,#E0FAF7,#B2DFDB)', title: 'The Complete Guide to Cat Hydration', excerpt: "Cats are notoriously bad drinkers. Here's how to track water intake and encourage healthy habits using Furrever.", author: 'James Park', av: '👨', avc: '#B2DFDB', read: '5 min', tagCls: 'nutrition' },
  { cat: 'Vet Tips', date: 'May 3, 2025', emoji: '🐇', bg: 'linear-gradient(135deg,#F0EEFF,#E1BEE7)', title: '7 Signs Your Rabbit Needs a Vet Visit Right Now', excerpt: 'Rabbits hide illness extraordinarily well. Our vet team shares the subtle warning signs every rabbit owner must know.', author: 'Dr. Priya Mehta', av: '👩‍⚕️', avc: '#E1BEE7', read: '6 min', tagCls: 'vet' },
  { cat: 'Community', date: 'Apr 28, 2025', emoji: '🐕🐕', bg: 'linear-gradient(135deg,#BBDEFB,#90CAF9)', title: "Managing Two Dogs: Diego's Story of Going From Chaos to Calm", excerpt: 'How a multi-dog household of two Labradors went from chaos to calm with smart pet tracking.', author: 'Community Story', av: '👨', avc: '#BBDEFB', read: '4 min', tagCls: 'community' },
  { cat: 'AI & Tech', date: 'Apr 22, 2025', emoji: '🐹', bg: 'linear-gradient(135deg,#FFF0F3,#FFB3C6)', title: "How Our AI Learns Your Pet's Unique Health Patterns", excerpt: "A behind-the-scenes look at how Furrever AI builds a personalised health model for each pet.", author: 'Aisha Rahman', av: '👩‍💻', avc: '#FFE0B2', read: '7 min', tagCls: 'ai' },
  { cat: 'Health & Wellness', date: 'Apr 15, 2025', emoji: '💤', bg: 'linear-gradient(135deg,#FFF3DC,#FFCC80)', title: "Does Your Dog Sleep Enough? What Data From 10,000 Dogs Reveals", excerpt: 'We analysed sleep data from 10,000+ dogs on Furrever and found surprising patterns about breed, age, and sleep quality.', author: 'Dr. Priya Mehta', av: '👩‍⚕️', avc: '#E1BEE7', read: '9 min', tagCls: 'health' },
  { cat: 'Nutrition', date: 'Apr 8, 2025', emoji: '💧', bg: 'linear-gradient(135deg,#E0FAF7,#A7FFEB)', title: '5 Foods That Are Surprisingly Dangerous for Your Pet', excerpt: "Many common household foods can be toxic to pets. Our vet team breaks down the biggest dangers.", author: 'Dr. Priya Mehta', av: '👩‍⚕️', avc: '#E1BEE7', read: '5 min', tagCls: 'nutrition' },
];

const TAG_COLORS = { health: '#FF6B8A', nutrition: '#2BBFAE', ai: '#8B5CF6', community: '#F5A623', vet: '#3B82F6' };
const FILTERS = ['All Posts', 'Health & Wellness', 'Nutrition', 'AI & Tech', 'Community', 'Vet Tips'];

export default function Blog() {
  const [active, setActive] = useState('All Posts');
  return (
    <>
      {/* HERO */}
      <section style={{ minHeight: '52vh', background: 'linear-gradient(155deg,#FFF8EC 0%,#FFFDF9 50%,#F0FEFA 100%)', display: 'flex', alignItems: 'center', padding: '140px 24px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(245,166,35,.13) 0%,transparent 70%)', top: -120, right: -120, pointerEvents: 'none' }} />
        <div className="si" style={{ width: '100%' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#FFF3DC', border: '1px solid rgba(245,166,35,.3)', borderRadius: 50, padding: '8px 16px', fontSize: 13, fontWeight: 600, color: '#E8890A', marginBottom: 22 }}>📝 Furrever Blog</div>
          <h1 style={{ fontSize: 'clamp(38px,5vw,64px)', fontWeight: 800, color: '#1A1F3C', lineHeight: 1.07, marginBottom: 20, maxWidth: 700 }}>Tips, stories &amp; insights<br /><span className="grad">for pet parents</span></h1>
          <p style={{ fontSize: 17, color: '#6B7280', lineHeight: 1.7, maxWidth: 520, marginBottom: 36 }}>Expert guides, community stories, and the latest in AI-powered pet care — all in one place.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#fff', border: '1.5px solid #E8E5E0', borderRadius: 16, padding: '12px 16px', maxWidth: 480 }}>
            <span style={{ fontSize: 18 }}>🔍</span>
            <input style={{ background: 'none', border: 'none', outline: 'none', fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: '#1A1F3C', flex: 1 }} placeholder="Search articles, topics, pets..." />
          </div>
        </div>
      </section>
      <section style={{ padding: '88px 24px' }}>
        <div className="si">
          {/* Filters */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 40 }}>
            {FILTERS.map(f => (
              <button key={f} onClick={() => setActive(f)} style={{ padding: '9px 20px', borderRadius: 50, fontFamily: "'DM Sans',sans-serif", fontSize: 13, fontWeight: 600, border: '1.5px solid', borderColor: active === f ? '#F5A623' : '#E8E5E0', color: active === f ? '#fff' : '#6B7280', background: active === f ? '#F5A623' : '#fff', cursor: 'pointer', transition: 'all .2s', boxShadow: active === f ? '0 4px 12px rgba(245,166,35,.3)' : 'none' }}>{f}</button>
            ))}
          </div>

          {/* Featured */}
          <R>
            <div style={{ background: '#fff', borderRadius: 28, overflow: 'hidden', border: '1px solid #E8E5E0', boxShadow: 'var(--sh-sm)', display: 'grid', gridTemplateColumns: '1.1fr 1fr', marginBottom: 32, transition: 'box-shadow .3s' }} className="featured-card">
              <div style={{ minHeight: 380, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 100, background: 'linear-gradient(135deg,#FFF3DC,#FFE0B2)', position: 'relative' }}>
                🐕
                <div style={{ position: 'absolute', top: 20, left: 20, background: 'linear-gradient(135deg,#F5A623,#E8890A)', color: '#fff', fontSize: 12, fontWeight: 700, padding: '6px 14px', borderRadius: 50 }}>⭐ Featured Story</div>
              </div>
              <div style={{ padding: 40 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#F5A623', textTransform: 'uppercase', letterSpacing: .6, marginBottom: 10 }}>Health & Wellness</div>
                <h2 style={{ fontFamily: "'Sora',sans-serif", fontSize: 'clamp(20px,2.5vw,28px)', fontWeight: 800, color: '#1A1F3C', lineHeight: 1.25, marginBottom: 14 }}>How AI is Transforming Pet Health Monitoring in 2025</h2>
                <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, marginBottom: 24 }}>From sleep analysis to diet optimisation, artificial intelligence is revolutionising how we understand and care for our pets. We sat down with Dr. Priya Mehta to explore what's possible today.</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
                  <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'linear-gradient(135deg,#E1BEE7,#CE93D8)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17 }}>👩‍⚕️</div>
                  <div><div style={{ fontSize: 14, fontWeight: 600, color: '#1A1F3C' }}>Dr. Priya Mehta</div><div style={{ fontSize: 12, color: '#6B7280' }}>Head of Veterinary · May 12, 2025 · 8 min read</div></div>
                </div>
                <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 12, background: 'linear-gradient(135deg,#F5A623,#E8890A)', color: '#fff', fontWeight: 700, fontSize: 14, transition: 'all .25s', boxShadow: '0 4px 14px rgba(245,166,35,.3)' }}>Read Article →</a>
              </div>
            </div>
          </R>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginBottom: 56 }} className="blog-grid">
            {POSTS.map((p, i) => (
              <R key={p.title} delay={`d${(i % 3) + 1}`}>
                <div style={{ background: '#fff', borderRadius: 22, overflow: 'hidden', border: '1px solid #E8E5E0', transition: 'transform .3s,box-shadow .3s', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ height: 190, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 64, background: p.bg, position: 'relative' }}>
                    <span>{p.emoji}</span>
                    <div style={{ position: 'absolute', top: 14, left: 14, fontSize: 10, fontWeight: 700, padding: '4px 12px', borderRadius: 50, color: '#fff', background: TAG_COLORS[p.tagCls] || '#F5A623' }}>{p.cat}</div>
                  </div>
                  <div style={{ padding: 22, flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#F5A623', textTransform: 'uppercase', letterSpacing: .5, marginBottom: 8 }}>{p.cat}</div>
                    <h3 style={{ fontFamily: "'Sora',sans-serif", fontSize: 16, fontWeight: 700, color: '#1A1F3C', marginBottom: 10, lineHeight: 1.35, flex: 1 }}>{p.title}</h3>
                    <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.6, marginBottom: 18 }}>{p.excerpt}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingTop: 14, borderTop: '1px solid #E8E5E0' }}>
                      <div style={{ width: 30, height: 30, borderRadius: '50%', background: p.avc, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>{p.av}</div>
                      <div style={{ flex: 1 }}><div style={{ fontSize: 12, fontWeight: 600, color: '#1A1F3C' }}>{p.author}</div><div style={{ fontSize: 11, color: '#6B7280' }}>{p.date} · {p.read}</div></div>
                      <div style={{ width: 30, height: 30, borderRadius: '50%', background: '#F9F7F4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, color: '#6B7280' }}>→</div>
                    </div>
                  </div>
                </div>
              </R>
            ))}
          </div>

          {/* Newsletter */}
          <R>
            <div style={{ background: 'linear-gradient(135deg,#1A1F3C,#2D3561)', borderRadius: 28, padding: '52px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', position: 'relative', overflow: 'hidden' }} className="newsletter-grid">
              <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(245,166,35,.12) 0%,transparent 60%)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(245,166,35,.15)', border: '1px solid rgba(245,166,35,.3)', borderRadius: 50, padding: '6px 14px', fontSize: 12, fontWeight: 600, color: '#F5A623', marginBottom: 16 }}>📬 Weekly Newsletter</div>
                <h3 style={{ fontFamily: "'Sora',sans-serif", fontSize: 26, fontWeight: 800, color: '#fff', marginBottom: 10 }}>Get pet care tips in your inbox</h3>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,.6)', lineHeight: 1.65 }}>Weekly guides from our vet team, delivered every Tuesday. Real science, plain English, no spam — ever.</p>
              </div>
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <input style={{ padding: '14px 18px', borderRadius: 14, border: '1.5px solid rgba(255,255,255,.15)', background: 'rgba(255,255,255,.08)', color: '#fff', fontFamily: "'DM Sans',sans-serif", fontSize: 14, outline: 'none' }} placeholder="your@email.com" />
                <button style={{ padding: 14, borderRadius: 14, background: 'linear-gradient(135deg,#F5A623,#E8890A)', color: '#fff', fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 15, border: 'none', cursor: 'pointer', boxShadow: '0 4px 14px rgba(245,166,35,.35)' }}>Subscribe Free →</button>
              </div>
            </div>
          </R>
        </div>
      </section>
      <div className="cta-strip">
        <div className="cta-strip-glow" />
        <h2>Ready to try Furrever AI? 🐾</h2>
        <p>Everything you just read about — track it all in one beautiful app.</p>
        <div className="cta-strip-btns">
          <Link to="/#download" className="store-btn dark"><span className="store-btn-icon">🍎</span><span><span className="store-btn-label">Download on the</span><span className="store-btn-name">App Store</span></span></Link>
          <Link to="/#download" className="store-btn light"><span className="store-btn-icon">▶</span><span><span className="store-btn-label">Get it on</span><span className="store-btn-name">Google Play</span></span></Link>
        </div>
      </div>
      <style>{`
        @media(max-width:900px){.featured-card{grid-template-columns:1fr!important}.blog-grid{grid-template-columns:1fr 1fr!important}.newsletter-grid{grid-template-columns:1fr!important;gap:28px!important;padding:32px 24px!important}}
        @media(max-width:640px){.blog-grid{grid-template-columns:1fr!important}}
      `}</style>
    </>
  );
}
