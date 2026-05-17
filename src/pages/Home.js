import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import './Home.css';
import '../styles/global.css';

/* ---------- Reusable helpers ---------- */
function RevealDiv({ className = '', delay = '', children, as: Tag = 'div', ...rest }) {
  const ref = useReveal();
  return <Tag ref={ref} className={`reveal ${delay} ${className}`} {...rest}>{children}</Tag>;
}

function StoreButtons() {
  return (
    <div className="store-btns">
      <a href="#download" className="store-btn dark">
        <span className="store-btn-icon">🍎</span>
        <span><span className="store-btn-label">Download on the</span><span className="store-btn-name">App Store</span></span>
      </a>
      <a href="#download" className="store-btn light">
        <span className="store-btn-icon">▶</span>
        <span><span className="store-btn-label">Get it on</span><span className="store-btn-name">Google Play</span></span>
      </a>
    </div>
  );
}

/* ---------- Phone Mock ---------- */
function PhoneMock() {
  return (
    <div className="hero-visual">
      <div className="float-card fc1">
        <div className="fc-ico">💤</div>
        <div className="fc-lbl">Sleep last night</div>
        <div className="fc-val">8h 24m</div>
        <div className="fc-sub">↑ 12% vs avg</div>
      </div>
      <div className="float-card fc2">
        <div className="fc-ico">🏃</div>
        <div className="fc-lbl">Steps today</div>
        <div className="fc-val">4,820</div>
        <div className="fc-sub">Goal: 5,000</div>
      </div>
      <div className="phone phone-main">
        <div className="phone-inner">
          <div className="phone-notch" />
          <div className="phone-screen screen-home">
            <div className="scr-hdr">
              <div><div className="scr-greeting">Good morning 👋</div><div className="scr-title">Sarah's Pets</div></div>
              <div className="scr-bell">🔔</div>
            </div>
            <div className="pet-banner">
              <div className="pb-av">🐕</div>
              <div><div className="pb-name">Max</div><div className="pb-sub">Golden Retriever · 3 yrs</div></div>
              <div className="pb-badge">Active ✓</div>
            </div>
            <div className="mini-stats">
              {[['💧','680ml','Water'],['🍖','2/3','Meals'],['🏃','4.2km','Distance'],['❤️','98%','Health']].map(([ico,val,lbl])=>(
                <div key={lbl} className="ms"><div className="ms-ico">{ico}</div><div className="ms-val">{val}</div><div className="ms-lbl">{lbl}</div></div>
              ))}
            </div>
            <div className="mini-bar">
              <div className="mb-lbl">Daily steps</div>
              <div className="mb-nums"><span>4,820</span><span>/ 5,000</span></div>
              <div className="bar-track"><div className="bar-fill" style={{width:'96%'}} /></div>
            </div>
            <div className="upcoming-wrap">
              <div className="upcoming-lbl">Upcoming</div>
              <div className="upcoming-item"><span>🏥</span><div><div className="ui-title">Vet Checkup</div><div className="ui-sub">Tomorrow 10:00 AM</div></div><div className="ui-badge">1d</div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="phone phone-sec">
        <div className="phone-inner">
          <div className="phone-notch" />
          <div className="phone-screen screen-ai">
            <div className="ai-scr-hdr"><div className="ai-scr-sub">AI Assistant</div><div className="ai-scr-title">Ask Anything 🤖</div></div>
            <div className="chat-bubbles">
              <div><div className="cb-lbl">🤖 Furrever AI</div><div className="cb cb-ai">Max's sleep dropped 15% this week. Try a 30-min walk before bed! 🌙</div></div>
              <div className="cb cb-user">Is this normal for his age?</div>
              <div><div className="cb-lbl">🤖 Furrever AI</div><div className="cb cb-ai">Yes! Golden Retrievers need 12-14 hrs daily. Max is doing great!</div></div>
              <div className="typing-ind"><span/><span/><span/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Features ---------- */
const FEATURES = [
  {icon:'💤',title:'Sleep Tracking',desc:'Monitor your pet\'s sleep patterns with smart insights. Get alerts when rest quality drops and personalised tips.',cls:'amber'},
  {icon:'💧',title:'Water Monitoring',desc:'Track daily hydration levels and receive gentle reminders. Never let your furry friend go thirsty.',cls:'teal'},
  {icon:'🍖',title:'Diet Management',desc:'Log meals, track nutritional intake, and get AI-powered dietary recommendations tailored to your pet.',cls:'purple'},
  {icon:'🏥',title:'Vet Appointments',desc:'Manage all vet visits in one place. Get smart reminders for vaccinations, checkups, and medications.',cls:'rose'},
  {icon:'🤖',title:'AI Chatbot',desc:'Ask anything about your pet\'s health, behaviour, or care. Instant, vet-informed answers 24/7.',cls:'teal'},
  {icon:'🌍',title:'Pet Community',desc:'Connect with thousands of pet parents. Share adorable moments and get advice from people who understand.',cls:'amber'},
  {icon:'🏃',title:'Activity Tracking',desc:'Log walks, playtime, and exercise. Set daily step goals and celebrate new milestones.',cls:'purple'},
  {icon:'🐾',title:'Multiple Profiles',desc:'Manage all your pets under one account. Each furry family member gets their own health dashboard.',cls:'rose'},
];

/* ---------- Community posts ---------- */
const POSTS = [
  {av:'👩',avc:'c1',name:'Sarah M.',tag:'🐕 Max — Golden Retriever',time:'2h ago',emoji:'🐕',bg:'linear-gradient(135deg,#FFF3DC,#FFE0B2)',cap:'Max hit his 5,000 step goal for the 7th day in a row! 🏆 So proud of this champion.',likes:284,comments:38},
  {av:'👨',avc:'c2',name:'James K.',tag:'🐈 Luna — Persian Cat',time:'5h ago',emoji:'🐈',bg:'linear-gradient(135deg,#E0FAF7,#B2DFDB)',cap:'Luna\'s sleep tracker shows 16 hours today — living her best life 😂 The AI said this is perfectly normal!',likes:512,comments:72},
  {av:'👩',avc:'c3',name:'Aisha R.',tag:'🐇 Coco — Holland Lop',time:'1d ago',emoji:'🐇',bg:'linear-gradient(135deg,#F0EEFF,#E1BEE7)',cap:'Coco\'s vet said she\'s in perfect health! The diet tracking helped me fix her hay-to-pellet ratio. 🥕',likes:189,comments:24},
  {av:'👨',avc:'c4',name:'Diego L.',tag:'🐕 Bruno & Mia',time:'2d ago',emoji:'🐕🐕',bg:'linear-gradient(135deg,#BBDEFB,#90CAF9)',cap:'Managing two dogs was chaos until Furrever! Multi-pet profiles are an absolute game changer 🙌',likes:347,comments:51},
];

/* ---------- Testimonials ---------- */
const TESTIMONIALS = [
  {text:'I was skeptical about a pet health app, but Furrever genuinely changed how I care for my dog. The AI chatbot caught a dietary issue I\'d completely missed. Max is healthier than ever!',name:'Sarah Mitchell',pet:'🐕 Max — Golden Retriever',av:'👩',avc:'#FFE0B2',badge:'⭐ Top Review'},
  {text:'As someone with 3 cats and 2 dogs, managing all their health data was a nightmare. Furrever\'s multi-pet profiles are a lifesaver. I can see everyone\'s status at a glance every morning.',name:'David Chen',pet:'🐕🐕🐈🐈🐈 Multi-pet household',av:'👨',avc:'#B2DFDB'},
  {text:'The community feature is my favourite part. I found so much support from other rabbit owners. And the vet reminders mean I never forget Luna\'s checkups anymore!',name:'Priya Sharma',pet:'🐇 Luna — Holland Lop',av:'👩',avc:'#E1BEE7'},
];

/* ---------- FAQ ---------- */
const FAQS = [
  {q:'Is Furrever AI free to use?',a:'Yes! Furrever AI is free to download and use with all core features included. We offer a premium plan with advanced AI insights, unlimited history, and priority support.'},
  {q:'What types of pets does Furrever support?',a:'Furrever supports dogs, cats, rabbits, hamsters, birds, fish, reptiles, and many more! Each pet type has customised tracking metrics and AI recommendations.'},
  {q:'How accurate is the AI assistant?',a:'Our AI is trained on peer-reviewed veterinary research and reviewed by licensed veterinarians. For serious concerns, we always recommend consulting your vet.'},
  {q:'Can I manage multiple pets on one account?',a:'Absolutely! You can create unlimited pet profiles under a single account. Each pet gets their own dedicated health dashboard and personalised AI recommendations.'},
  {q:'Is my pet\'s health data private and secure?',a:'Your data security is our top priority. All health data is encrypted using bank-level AES-256 encryption. We never sell your data to third parties. You own your data, period.'},
  {q:'Does the app work offline?',a:'Core tracking features work offline and sync automatically when you reconnect. The AI assistant and community feed require an internet connection.'},
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button className="faq-btn" onClick={() => setOpen(v => !v)}>
        {q}
        <span className="faq-ico">+</span>
      </button>
      <div className="faq-ans" style={{ maxHeight: open ? '200px' : '0', paddingBottom: open ? '20px' : '0' }}>
        <p>{a}</p>
      </div>
    </div>
  );
}

/* ---------- Stats counter ---------- */
function StatCounter({ target, suffix = '', format, decimal }) {
  const [val, setVal] = useState('0');
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      const dur = 1800, start = performance.now();
      const tick = (t) => {
        const p = Math.min((t - start) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        const v = target * ease;
        let display;
        if (format === 'k') display = v >= 1000 ? (v / 1000).toFixed(1) + 'K+' : Math.floor(v).toString();
        else if (decimal) display = v.toFixed(1);
        else display = Math.floor(v).toLocaleString() + (suffix || '');
        setVal(display);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, [target, suffix, format, decimal]);
  return <div className="stat-num" ref={ref}>{val}</div>;
}

/* ================================================================
   HOME PAGE
================================================================ */
export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-blob hb1" />
        <div className="hero-blob hb2" />
        <div className="hero-blob hb3" />
        <div className="hero-dot hd1" />
        <div className="hero-dot hd2" />
        <div className="hero-dot hd3" />
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="hero-badge"><span className="badge-dot" />🚀 Now available on iOS &amp; Android</div>
            <h1 className="hero-h1">Your Pet Deserves<br/><span className="grad">Smarter Care</span></h1>
            <p className="hero-sub">The all-in-one AI-powered companion for modern pet parents. Track health, connect with a community, and never miss a vet visit.</p>
            <StoreButtons />
            <div className="hero-proof">
              <div className="hero-avatars">
                {['🐕','🐈','🐇','🐹'].map((e,i)=><div key={i} className={`hav hav${i}`}>{e}</div>)}
              </div>
              <div>
                <div className="stars">★★★★★</div>
                <div className="proof-txt"><strong>50,000+</strong> happy pet parents</div>
              </div>
            </div>
          </div>
          <PhoneMock />
        </div>
      </section>

      {/* BRAND BAR */}
      <div className="brand-bar">
        <div className="brand-bar-inner">
          <span className="bb-label">Loved by pet parents from</span>
          <div className="bb-logos">
            {['PetWorld','VetCare+','FurFriends','PawsClub','TailWaggers'].map(b=><span key={b}>{b}</span>)}
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <section className="section features-bg" id="features">
        <div className="si">
          <RevealDiv className="tc">
            <div className="s-label">Features</div>
            <h2 className="s-h2">Everything your pet needs,<br/><span className="grad">all in one place</span></h2>
            <p className="s-sub">Furrever AI combines smart monitoring, AI intelligence, and community to give your pet the care they deserve.</p>
          </RevealDiv>
          <div className="features-grid">
            {FEATURES.map((f, i) => (
              <RevealDiv key={f.title} className="f-card" delay={`d${(i%4)+1}`}>
                <div className={`f-icon fi-${f.cls}`}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* AI SECTION */}
      <section className="section ai-section" id="ai">
        <div className="ai-g1" /><div className="ai-g2" />
        <div className="si">
          <div className="ai-inner">
            <RevealDiv className="ai-text">
              <div className="s-label teal-label">AI Assistant</div>
              <h2 className="s-h2">Your pet's 24/7<br/><span className="teal-grad">AI health advisor</span></h2>
              <p className="s-sub" style={{color:'rgba(255,255,255,.62)'}}>Ask anything, anytime. Furrever AI's intelligent assistant understands your pet's history and gives personalised, vet-informed advice instantly.</p>
              <div className="ai-feats">
                {[['🧠','Learns your pet over time','Gets smarter with every interaction, building a deep understanding of your pet\'s unique health profile.'],
                  ['⚡','Instant answers, any hour','Worried at 2am? Our AI gives reliable guidance day or night — no appointment needed.'],
                  ['🛡️','Vet-reviewed knowledge base','All advice is grounded in veterinary science and updated with the latest pet health research.']
                ].map(([ico,title,desc])=>(
                  <div key={title} className="ai-feat">
                    <div className="ai-feat-dot">{ico}</div>
                    <div><h4>{title}</h4><p>{desc}</p></div>
                  </div>
                ))}
              </div>
            </RevealDiv>
            <RevealDiv className="chat-ui d2">
              <div className="chat-hdr">
                <div className="chat-av">🤖</div>
                <div><div className="chat-name">Furrever AI</div><div className="chat-status"><span className="online-dot"/>Always online</div></div>
                <div className="chat-dots"><span/><span/><span/></div>
              </div>
              <div className="chat-msgs">
                <div className="cmsg ai-m">Hi! I've analysed Max's health data this week. His activity is up 23% 🎉 However, his water intake dropped today.</div>
                <div className="cmsg user-m">Should I be worried about the water intake?</div>
                <div className="cmsg ai-m">For a 30kg Golden Retriever, Max should drink ~900ml/day. He's had 580ml. Try adding wet food to dinner or placing an extra bowl near his favourite spot. 💧</div>
                <div className="cmsg user-m">Great idea! What about his diet tomorrow?</div>
                <div className="ctyping"><span/><span/><span/></div>
              </div>
              <div className="chat-inp">
                <input type="text" placeholder="Ask about Max's health..." readOnly/>
                <button className="chat-send">➤</button>
              </div>
            </RevealDiv>
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="section community-bg" id="community">
        <div className="si">
          <RevealDiv className="tc">
            <div className="s-label">Community</div>
            <h2 className="s-h2">A world built for<br/><span className="grad">pet lovers</span></h2>
            <p className="s-sub">Share your pet's best moments, get advice from fellow pet parents, and be part of the most wholesome community on the internet.</p>
          </RevealDiv>
          <div className="posts-grid">
            {POSTS.map((p, i) => (
              <RevealDiv key={p.name} className="post-card" delay={`d${i+1}`}>
                <div className="post-hdr">
                  <div className={`p-av ${p.avc}`}>{p.av}</div>
                  <div><div className="p-name">{p.name}</div><div className="p-tag">{p.tag}</div></div>
                  <div className="p-time">{p.time}</div>
                </div>
                <div className="post-img" style={{background:p.bg}}><span>{p.emoji}</span></div>
                <div className="post-body">
                  <p className="post-cap">{p.cap}</p>
                  <div className="post-acts">
                    <div className="pa liked">❤️ <span>{p.likes}</span></div>
                    <div className="pa">💬 <span>{p.comments}</span></div>
                    <div className="pa">↗ Share</div>
                  </div>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="section" id="screenshots">
        <div className="si">
          <RevealDiv className="tc">
            <div className="s-label">App Screens</div>
            <h2 className="s-h2">Beautiful design,<br/><span className="grad">powerful features</span></h2>
            <p className="s-sub">Every screen crafted with care to make pet care feel effortless and joyful.</p>
          </RevealDiv>
        </div>
        <ScreenshotsCarousel />
      </section>

      {/* BENEFITS */}
      <section className="section">
        <div className="si">
          <RevealDiv className="tc">
            <div className="s-label">Why Furrever</div>
            <h2 className="s-h2">Because your pet is family</h2>
            <p className="s-sub">Every feature is built with one goal: helping you give your pet a longer, healthier, happier life.</p>
          </RevealDiv>
          <div className="benefits-grid">
            {[['🩺','Proactive Health Care','Catch health issues before they become serious. Our AI spots patterns and alerts you early.'],
              ['⏰','Never Miss a Moment','Smart reminders for medications, meals, vet visits, and walks. Life is busy — Furrever keeps your pet front of mind.'],
              ['💞','Deeper Bond','Understanding your pet\'s health and behaviour helps you connect on a deeper level.'],
              ['📊','Data Your Vet Will Love','Bring comprehensive health reports to every vet visit. Your vet gets full context, you get better care.'],
              ['🤝','Community Support','Thousands of experienced pet parents just a message away.'],
              ['🔒','Private & Secure','Bank-level encryption keeps sensitive information safe. Your trust is our highest priority.'],
            ].map(([em,title,desc],i)=>(
              <RevealDiv key={title} className="benefit-card" delay={`d${(i%3)+1}`}>
                <span className="b-em">{em}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="si">
          <div className="stats-grid">
            {[{target:50000,format:'k',lbl:'Happy Pet Parents',d:''},
              {target:120000,format:'k',lbl:'Pets Being Cared For',d:'d1'},
              {target:98,suffix:'%',lbl:'User Satisfaction Rate',d:'d2'},
              {target:4.9,decimal:true,lbl:'App Store Rating ⭐',d:'d3'},
            ].map(s=>(
              <RevealDiv key={s.lbl} className="stat-item" delay={s.d}>
                <StatCounter target={s.target} suffix={s.suffix} format={s.format} decimal={s.decimal}/>
                <div className="stat-lbl">{s.lbl}</div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section testimonials-bg">
        <div className="si">
          <RevealDiv className="tc">
            <div className="s-label">Testimonials</div>
            <h2 className="s-h2">Pet parents love<br/><span className="grad">Furrever AI</span></h2>
          </RevealDiv>
          <div className="t-grid">
            {TESTIMONIALS.map((t,i)=>(
              <RevealDiv key={t.name} className="t-card" delay={`d${i+1}`}>
                {t.badge && <div className="t-badge">{t.badge}</div>}
                <div className="t-q">"</div>
                <div className="t-stars">★★★★★</div>
                <p className="t-text">{t.text}</p>
                <div className="t-author">
                  <div className="t-av" style={{background:t.avc}}>{t.av}</div>
                  <div><div className="t-name">{t.name}</div><div className="t-pet">{t.pet}</div></div>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="si">
          <RevealDiv className="tc">
            <div className="s-label">FAQ</div>
            <h2 className="s-h2">Questions? We've got <span className="grad">answers</span></h2>
          </RevealDiv>
          <div className="faq-wrap">
            {FAQS.map(f => <FAQItem key={f.q} q={f.q} a={f.a}/>)}
          </div>
        </div>
      </section>

      {/* CTA / DOWNLOAD */}
      <section className="cta-strip" id="download">
        <div className="cta-strip-glow"/>
        <h2>Your pet deserves the best care.<br/><span className="grad">Start today for free.</span></h2>
        <p>Join 50,000+ pet parents giving their animals the smart, loving care they deserve. No credit card required.</p>
        <div className="cta-strip-btns">
          <a href="#download" className="store-btn dark" style={{border:'1px solid rgba(255,255,255,.14)'}}>
            <span className="store-btn-icon">🍎</span>
            <span><span className="store-btn-label">Download on the</span><span className="store-btn-name">App Store</span></span>
          </a>
          <a href="#download" className="store-btn" style={{background:'#fff',color:'#1A1F3C'}}>
            <span className="store-btn-icon">▶</span>
            <span><span className="store-btn-label">Get it on</span><span className="store-btn-name">Google Play</span></span>
          </a>
        </div>
        <p className="cta-note">Free · No ads · No credit card · iOS &amp; Android</p>
      </section>
    </>
  );
}

/* ---------- Screenshots Carousel ---------- */
function ScreenshotsCarousel() {
  const trackRef = useRef(null);
  let isDragging = false, startX = 0, scrollStart = 0;
  const onDown = e => { isDragging = true; startX = (e.touches?.[0]?.pageX ?? e.pageX) - trackRef.current.offsetLeft; scrollStart = trackRef.current.scrollLeft; trackRef.current.style.cursor = 'grabbing'; };
  const onUp = () => { isDragging = false; if(trackRef.current) trackRef.current.style.cursor = 'grab'; };
  const onMove = e => { if (!isDragging) return; e.preventDefault(); const x = (e.touches?.[0]?.pageX ?? e.pageX) - trackRef.current.offsetLeft; trackRef.current.scrollLeft = scrollStart - (x - startX) * 1.4; };

  const screens = [
    { label:'Dashboard', bg:'linear-gradient(175deg,#FFF8EC,#fff)', content: <DashScreen/> },
    { label:'Sleep Tracker', bg:'linear-gradient(175deg,#1A1F3C,#2D3561)', content: <SleepScreen/> },
    { label:'Diet Tracker', bg:'linear-gradient(175deg,#E0FAF7,#fff)', content: <DietScreen/> },
    { label:'Vet Appointments', bg:'linear-gradient(175deg,#F0EEFF,#fff)', content: <VetScreen/> },
    { label:'Activity', bg:'linear-gradient(175deg,#FFF0F3,#fff)', content: <ActivityScreen/> },
    { label:'Community', bg:'#fff', content: <CommunityScreen/> },
  ];

  return (
    <div className="ss-track" ref={trackRef}
      onMouseDown={onDown} onMouseUp={onUp} onMouseLeave={onUp} onMouseMove={onMove}
      onTouchStart={onDown} onTouchEnd={onUp} onTouchMove={onMove}>
      {screens.map(s=>(
        <div key={s.label} className="ss-item">
          <div className="ss-phone">
            <div className="ss-inner" style={{background:s.bg}}>
              <div className="ss-topbar"><div className="ss-capsule"/></div>
              <div className="ss-content">{s.content}</div>
            </div>
          </div>
          <div className="ss-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

function DashScreen() { return (<><div className="sct">Dashboard</div><div style={{background:'linear-gradient(135deg,#F5A623,#E8890A)',borderRadius:14,padding:14,color:'#fff',marginBottom:10}}><div style={{fontSize:9,opacity:.8,marginBottom:3}}>Health Score</div><div style={{fontSize:28,fontWeight:800,fontFamily:'Sora,sans-serif'}}>98%</div><div style={{fontSize:9,opacity:.7}}>Max is thriving! 🎉</div></div><div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:7}}>{[['💤','8h 24m','Sleep'],['🏃','4,820','Steps'],['💧','680ml','Water'],['🍖','2/3','Meals']].map(([ico,v,l])=><div key={l} style={{background:'#F9F7F4',borderRadius:10,padding:10,textAlign:'center'}}><div style={{fontSize:18}}>{ico}</div><div style={{fontSize:12,fontWeight:700,color:'#1A1F3C',fontFamily:'Sora,sans-serif'}}>{v}</div><div style={{fontSize:8,color:'#9CA3AF'}}>{l}</div></div>)}</div></>); }
function SleepScreen() { return (<><div className="sct" style={{color:'#fff'}}>Sleep Tracker</div><div style={{textAlign:'center',marginBottom:16}}><div style={{fontSize:36,fontWeight:800,fontFamily:'Sora,sans-serif',color:'#fff'}}>8h <span style={{fontSize:22,color:'rgba(255,255,255,.5)'}}>24m</span></div><div style={{fontSize:9,color:'rgba(255,255,255,.45)',marginTop:3}}>Last night's sleep</div><div style={{display:'inline-flex',alignItems:'center',gap:5,background:'rgba(43,191,174,.2)',border:'1px solid rgba(43,191,174,.3)',borderRadius:20,padding:'3px 10px',marginTop:7}}><span style={{color:'#2BBFAE',fontSize:9,fontWeight:600}}>↑ 12% vs last week</span></div></div><div style={{background:'rgba(255,255,255,.07)',borderRadius:12,padding:12}}><div style={{fontSize:8,color:'rgba(255,255,255,.45)',marginBottom:8,fontWeight:600,textTransform:'uppercase',letterSpacing:.5}}>Sleep Phases</div>{[['Deep','68%','#2BBFAE'],['Light','24%','#F5A623'],['Awake','8%','#FF6B8A']].map(([n,p,c])=><div key={n} style={{display:'flex',alignItems:'center',gap:8,marginBottom:7}}><span style={{fontSize:9,color:'rgba(255,255,255,.65)',width:42}}>{n}</span><div style={{flex:1,height:5,background:'rgba(255,255,255,.1)',borderRadius:3,overflow:'hidden'}}><div style={{width:p,height:'100%',background:c,borderRadius:3}}/></div><span style={{fontSize:9,color:'#fff',fontWeight:600}}>{p}</span></div>)}</div></>); }
function DietScreen() { return (<><div className="sct">Diet Tracker</div><div style={{background:'linear-gradient(135deg,#2BBFAE,#1DA89A)',borderRadius:14,padding:13,color:'#fff',marginBottom:10,display:'flex',alignItems:'center',gap:10}}><span style={{fontSize:28}}>🥗</span><div><div style={{fontSize:9,opacity:.8}}>Today's nutrition</div><div style={{fontSize:16,fontWeight:800,fontFamily:'Sora,sans-serif'}}>Excellent!</div></div></div>{[['🌅','Breakfast','Kibble + Wet food','done'],['☀️','Lunch','Dry kibble','done'],['🌙','Dinner','Due at 7:00 PM','pending']].map(([ico,n,sub,s])=><div key={n} style={{background:s==='done'?'#fff':'#fff',borderRadius:10,padding:'9px 11px',display:'flex',alignItems:'center',gap:8,marginBottom:7,boxShadow:'0 2px 8px rgba(0,0,0,.05)',border:s==='pending'?'1.5px dashed #E8E5E0':'none'}}><span style={{fontSize:17}}>{ico}</span><div style={{flex:1}}><div style={{fontSize:11,fontWeight:600,color:s==='pending'?'#9CA3AF':'#1A1F3C'}}>{n}</div><div style={{fontSize:9,color:'#9CA3AF'}}>{sub}</div></div>{s==='done'?<div style={{width:10,height:10,background:'#4ADE80',borderRadius:'50%'}}/>:<div style={{fontSize:8,background:'#FFF3DC',color:'#E8890A',padding:'2px 7px',borderRadius:6,fontWeight:600}}>Pending</div>}</div>)}</>); }
function VetScreen() { return (<><div className="sct">Vet Appointments</div><div style={{background:'linear-gradient(135deg,#8B5CF6,#6D28D9)',borderRadius:14,padding:13,color:'#fff',marginBottom:10}}><div style={{fontSize:9,opacity:.8,marginBottom:3}}>Next appointment</div><div style={{fontSize:14,fontWeight:700,fontFamily:'Sora,sans-serif'}}>Dr. Sarah Chen</div><div style={{fontSize:9,opacity:.7,marginTop:2}}>Tomorrow, 10:00 AM</div></div>{[['💉','Rabies Vaccination','Mar 15','28d'],['🦷','Dental Cleaning','Apr 2','46d']].map(([ico,n,d,b])=><div key={n} style={{background:'#fff',borderRadius:10,padding:'9px 10px',display:'flex',alignItems:'center',gap:7,marginBottom:6,boxShadow:'0 2px 8px rgba(0,0,0,.05)'}}><span style={{fontSize:16}}>{ico}</span><div><div style={{fontSize:10,fontWeight:600,color:'#1A1F3C'}}>{n}</div><div style={{fontSize:8,color:'#9CA3AF'}}>{d}</div></div><div style={{marginLeft:'auto',fontSize:8,background:'#F0EEFF',color:'#7C3AED',padding:'2px 7px',borderRadius:6,fontWeight:600}}>{b}</div></div>)}</>); }
function ActivityScreen() { return (<><div className="sct">Activity</div><div style={{textAlign:'center',marginBottom:12}}><div style={{fontSize:36,fontWeight:800,fontFamily:'Sora,sans-serif',color:'#1A1F3C'}}>4,820</div><div style={{fontSize:9,color:'#9CA3AF'}}>steps today</div></div><div style={{display:'grid',gridTemplateColumns:'repeat(7,1fr)',gap:3,marginBottom:11}}>{[72,90,55,80,100,60,96].map((h,i)=><div key={i} style={{textAlign:'center'}}><div style={{height:52,background:i===6?'rgba(245,166,35,.15)':'#FFE0E6',borderRadius:5,border:i===6?'1.5px solid #F5A623':'none',display:'flex',alignItems:'flex-end',overflow:'hidden'}}><div style={{width:'100%',height:`${h}%`,background:i===6?'linear-gradient(to top,#F5A623,#FFC559)':'linear-gradient(to top,#FF6B8A,#FFB3C6)',borderRadius:4}}/></div></div>)}</div><div style={{background:'#FFF0F3',borderRadius:10,padding:9,display:'flex',gap:8}}>{[['4.2km','Distance'],['142cal','Burned'],['52min','Active']].map(([v,l])=><div key={l} style={{textAlign:'center',flex:1}}><div style={{fontSize:13,fontWeight:700,color:'#1A1F3C',fontFamily:'Sora,sans-serif'}}>{v}</div><div style={{fontSize:8,color:'#9CA3AF'}}>{l}</div></div>)}</div></>); }
function CommunityScreen() { return (<><div className="sct">Community Feed</div>{[{bg:'linear-gradient(135deg,#FFE0B2,#FFD4A3)',em:'🐕',n:'Sarah M.',cap:'Max hit 5K steps! 🏆',likes:284},{bg:'linear-gradient(135deg,#E0FAF7,#B2DFDB)',em:'🐈',n:'James K.',cap:'Luna: 16hrs sleep 😂 AI says normal!',likes:512}].map(p=><div key={p.n} style={{background:'#F9F7F4',borderRadius:10,overflow:'hidden',marginBottom:8}}><div style={{height:70,background:p.bg,display:'flex',alignItems:'center',justifyContent:'center',fontSize:30}}>{p.em}</div><div style={{padding:'7px 9px'}}><div style={{fontSize:9,fontWeight:600,color:'#1A1F3C',marginBottom:3}}>{p.n}</div><div style={{fontSize:8,color:'#6B7280',lineHeight:1.4,marginBottom:5}}>{p.cap}</div><div style={{display:'flex',gap:8}}><span style={{fontSize:8,color:'#FF6B8A'}}>❤️ {p.likes}</span><span style={{fontSize:8,color:'#9CA3AF'}}>💬 38</span></div></div></div>)}</>); }
