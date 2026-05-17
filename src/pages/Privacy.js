import React from 'react';
import useReveal from '../hooks/useReveal';
function R({children,className='',delay=''}){const ref=useReveal();return <div ref={ref} className={`reveal ${delay} ${className}`}>{children}</div>;}
export default function Privacy(){
  const toc=PrivacyTOC();
  const content=PrivacyContent();
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
function PrivacyTOC(){return{badge:'🔒 Legal',title:<>Privacy <span className="grad">Policy</span></>,sub:"We believe privacy is a right, not a feature. Here's exactly how we handle your data.",items:[['1. Overview','overview'],['2. Data We Collect','collect'],['3. How We Use It','use'],['4. Sharing','share'],['5. Security','security'],['6. Your Rights','rights'],['7. Children','children'],['8. Cookies','cookies-priv'],['9. Contact','contact-priv']]}}
function PrivacyContent(){return(<>
<div className="legal-highlight"><p>🐾 The short version: We collect only what's needed to make the app work, we never sell your data, and you can delete everything at any time.</p></div>
<h2 id="overview">1. Overview</h2><p>Furrever AI is committed to protecting your personal information and your right to privacy. This Privacy Policy explains what information we collect, how we use it, and what rights you have in relation to it.</p>
<h2 id="collect">2. Information We Collect</h2><h3>Information you provide directly</h3><ul><li><strong>Account information:</strong> Name, email address, and password when you register.</li><li><strong>Pet profiles:</strong> Your pet's name, species, breed, age, weight, and photos.</li><li><strong>Health tracking data:</strong> Sleep logs, step counts, diet entries, water intake, and vet appointment records.</li><li><strong>Community content:</strong> Posts, photos, comments, and likes you share publicly.</li></ul><h3>Information collected automatically</h3><ul><li><strong>Usage data:</strong> Features you use, screens you visit, and how you interact with the app.</li><li><strong>Device information:</strong> Device type, operating system version, and app version.</li><li><strong>Crash reports:</strong> Anonymised error reports to help us fix bugs.</li></ul>
<h2 id="use">3. How We Use Your Information</h2><p>We use your information to provide, personalise, and improve the Furrever AI app; power the AI assistant with relevant context about your pet; send reminders for vet appointments, medications, and feeding times; and respond to your support enquiries. We do <strong>not</strong> use your data to serve targeted advertising.</p>
<h2 id="share">4. Sharing Your Information</h2><p>We never sell your personal data. We share information only with trusted service providers who help operate the app (e.g. cloud hosting, payment processing) — they are contractually bound to protect your data. Community posts you share publicly are visible to other Furrever AI users.</p>
<h2 id="security">5. Security</h2><p>We use industry-standard security measures including AES-256 encryption at rest, TLS 1.3 in transit, and regular third-party security audits.</p>
<h2 id="rights">6. Your Rights</h2><p>You have the right to <strong>access</strong>, <strong>correct</strong>, <strong>delete</strong>, and <strong>export</strong> your personal data at any time. Use the "Delete Account" option in app settings or email <a href="mailto:privacy@furrever.ai">privacy@furrever.ai</a>.</p>
<h2 id="children">7. Children's Privacy</h2><p>Furrever AI is not intended for children under 13. We do not knowingly collect personal information from children under 13.</p>
<h2 id="cookies-priv">8. Cookies</h2><p>We use essential, analytics, and preference cookies on our website. For full details, see our <a href="/cookies">Cookie Policy</a>.</p>
<h2 id="contact-priv">9. Contact Us</h2><p>Privacy questions? Email <a href="mailto:privacy@furrever.ai">privacy@furrever.ai</a>. We respond to all privacy enquiries within 30 days.</p>
</>)}
