import React from 'react';
import useReveal from '../hooks/useReveal';
function R({children,className='',delay=''}){const ref=useReveal();return <div ref={ref} className={`reveal ${delay} ${className}`}>{children}</div>;}
export default function Cookies(){
  const toc=CookiesToC();
  const content=CookiesContent();
  return(<>
<section className="legal-hero">
  <div style={{position:'absolute',width:500,height:500,borderRadius:'50%',background:'radial-gradient(circle,rgba(245,166,35,.11) 0%,transparent 60%)',top:-200,left:'50%',transform:'translateX(-50%)',pointerEvents:'none'}}/>
  <div style={{maxWidth:680,margin:'0 auto',position:'relative',zIndex:1,textAlign:'center'}}>
    <div style={{display:'inline-flex',alignItems:'center',gap:8,background:'rgba(245,166,35,.15)',border:'1px solid rgba(245,166,35,.3)',borderRadius:50,padding:'8px 16px',fontSize:13,fontWeight:600,color:'#F5A623',marginBottom:22}}>{toc.badge}</div>
    <h1 style={{fontSize:'clamp(36px,5vw,54px)',fontWeight:800,color:'#fff',marginBottom:18}}>{toc.title}</h1>
    <p style={{fontSize:16,color:'rgba(255,255,255,.62)',lineHeight:1.7,marginBottom:28}}>{toc.sub}</p>
    <div style={{display:'inline-flex',alignItems:'center',gap:8,background:'rgba(255,255,255,.07)',border:'1px solid rgba(255,255,255,.12)',borderRadius:50,padding:'7px 16px',fontSize:12,color:'rgba(255,255,255,.5)'}}>📅 Last updated: May 1, 2025</div>
  </div>
</section>
<section style={{padding:'88px 24px'}}>
  <div className="si">
    <div className="legal-wrap">
      <div className="legal-toc">
        <h4>Contents</h4>
        {toc.items.map(([label,id])=><a key={id} href={`#${id}`} onClick={e=>{e.preventDefault();document.getElementById(id)?.scrollIntoView({behavior:'smooth'})}}>{label}</a>)}
        <div className="legal-updated">Last updated<br/>May 1, 2025</div>
      </div>
      <div className="prose">{content}</div>
    </div>
  </div>
</section>
<div className="cta-strip">
  <div className="cta-strip-glow"/>
  <h2>Questions about this policy? 🔒</h2>
  <p>Our team is happy to explain anything in plain English.</p>
  <div className="cta-strip-btns">
    <a href="/contact" className="store-btn dark"><span className="store-btn-icon">💬</span><span><span className="store-btn-label">Get in touch via</span><span className="store-btn-name">Contact Form</span></span></a>
    <a href="mailto:legal@furrever.ai" className="store-btn light"><span className="store-btn-icon">📧</span><span><span className="store-btn-label">Email our</span><span className="store-btn-name">Legal Team</span></span></a>
  </div>
</div>
</>);}
function CookiesToC(){return{badge:'🍪 Legal',title:<>Cookie <span className="grad">Policy</span></>,sub:"We use cookies to make Furrever AI work properly. Here's exactly what we use and why.",items:[['1. What Are Cookies','what'],['2. Types We Use','types'],['3. Cookie List','list'],['4. Your Preferences','manage'],['5. Third Parties','third-party'],['6. Updates','updates'],['7. Contact','contact-cookie']]}}
function CookiesContent(){return(<>
<div className="legal-highlight"><p>🍪 The short version: We use only essential and analytics cookies. We do not use advertising cookies or sell cookie data to third parties.</p></div>
<h2 id="what">1. What Are Cookies?</h2><p>Cookies are small text files placed on your device when you visit a website. They help websites remember your preferences, keep you logged in, and understand how you use the site.</p>
<h2 id="types">2. Types of Cookies We Use</h2><h3>Essential Cookies</h3><p>Strictly necessary for Furrever AI to function. Cannot be disabled.</p><h3>Analytics Cookies</h3><p>Help us understand how visitors interact with our website. All data is anonymised and aggregated.</p><h3>Preference Cookies</h3><p>Remember choices you make for a better experience across visits.</p>
<h2 id="list">3. Cookies We Use</h2>
<div style={{overflowX:'auto',marginTop:16,marginBottom:24}}><table style={{width:'100%',borderCollapse:'collapse',border:'1px solid #E8E5E0',borderRadius:14,overflow:'hidden',fontSize:14}}>
<thead><tr style={{background:'#F9F7F4'}}>{['Cookie','Type','Purpose','Duration'].map(h=><th key={h} style={{fontFamily:"'Sora',sans-serif",fontSize:11,fontWeight:700,color:'#1A1F3C',padding:'12px 16px',textAlign:'left',textTransform:'uppercase',letterSpacing:.4}}>{h}</th>)}</tr></thead>
<tbody>{[['fa_session','Essential','Keeps you logged in securely','Session'],['fa_auth_token','Essential','Remembers login if "Remember me" selected','30 days'],['fa_csrf','Essential','Protects against CSRF attacks','Session'],['fa_preferences','Preference','Stores site preferences','1 year'],['_fa_analytics','Analytics','Tracks anonymised page views','12 months'],['_fa_perf','Analytics','Measures page load performance','30 days']].map(r=><tr key={r[0]}>{r.map((cell,i)=><td key={i} style={{fontSize:13,color:'#6B7280',padding:'12px 16px',borderTop:'1px solid #E8E5E0'}}>{i===0?<code style={{background:'#F9F7F4',borderRadius:6,padding:'2px 7px',fontSize:12}}>{cell}</code>:cell}</td>)}</tr>)}</tbody>
</table></div>
<h2 id="manage">4. Managing Your Cookie Preferences</h2><p>You can manage cookies through your browser: <strong>Chrome</strong> → Settings → Privacy → Cookies; <strong>Safari</strong> → Preferences → Privacy; <strong>Firefox</strong> → Settings → Privacy & Security.</p>
<h2 id="third-party">5. Third-Party Cookies</h2><p>We do not permit advertising networks to set cookies. The only third-party services that may set cookies are <strong>Stripe</strong> (payment processing) and <strong>Intercom</strong> (support chat, only when opened).</p>
<h2 id="updates">6. Updates to This Policy</h2><p>We may update this Cookie Policy from time to time. We will notify you of significant changes via a notice on our website.</p>
<h2 id="contact-cookie">7. Contact</h2><p>Cookie questions? Email <a href="mailto:privacy@furrever.ai">privacy@furrever.ai</a> or use our <a href="/contact">Contact page</a>.</p>
</>)}
