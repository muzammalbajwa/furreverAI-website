import React from 'react';
import useReveal from '../hooks/useReveal';
function R({children,className='',delay=''}){const ref=useReveal();return <div ref={ref} className={`reveal ${delay} ${className}`}>{children}</div>;}
export default function Terms(){
  const toc=TermsTOC();
  const content=TermsContent();
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
function TermsTOC(){return{badge:'📋 Legal',title:<>Terms of <span className="grad">Service</span></>,sub:'Please read these terms carefully before using Furrever AI. They govern your use of our app and services.',items:[['1. Acceptance','acceptance'],['2. Your Account','account'],['3. Acceptable Use','use'],['4. Your Content','content'],['5. AI Assistant','ai-terms'],['6. Premium Plans','premium'],['7. Intellectual Property','ip'],['8. Disclaimers','disclaimers'],['9. Liability','liability'],['10. Termination','termination'],['11. Changes','changes'],['12. Contact','contact-terms']]}}
function TermsContent(){return(<>
<div className="legal-highlight"><p>📋 The short version: Use Furrever AI responsibly, don't misuse the AI for medical diagnosis, and treat the community with kindness.</p></div>
<h2 id="acceptance">1. Acceptance of Terms</h2><p>By downloading, installing, or using the Furrever AI mobile application or website, you agree to be bound by these Terms of Service. If you do not agree, please do not use the Service.</p>
<h2 id="account">2. Your Account</h2><p>You must be at least 13 years old to create an account. You are responsible for maintaining the confidentiality of your login credentials and all activity that occurs under your account. Notify us immediately of any unauthorised access at <a href="mailto:support@furrever.ai">support@furrever.ai</a>.</p>
<h2 id="use">3. Acceptable Use</h2><p>You agree not to: violate any applicable laws; harass or harm other users; post false or harmful pet health information; attempt to reverse-engineer or hack the Service; use automated bots; or share another user's personal information without consent.</p>
<h2 id="content">4. Your Content</h2><p>You retain ownership of all content you post. By posting publicly, you grant us a non-exclusive licence to display and promote your content within the app and our marketing materials.</p>
<h2 id="ai-terms">5. AI Assistant — Important Limitations</h2><div className="legal-highlight warn"><p>⚠️ The Furrever AI chatbot provides general information only. It is NOT a substitute for professional veterinary advice, diagnosis, or treatment. Always consult a qualified vet for medical concerns about your pet.</p></div><p>The AI assistant cannot diagnose illness or prescribe treatment, may occasionally provide inaccurate information, and should never be used in emergencies. Furrever AI accepts no liability for actions taken based on AI responses.</p>
<h2 id="premium">6. Premium Plans & Billing</h2><p>Premium subscriptions are billed monthly or annually in advance. You may cancel at any time; cancellation takes effect at the end of the current billing period. Prices may change with 30 days' notice.</p>
<h2 id="ip">7. Intellectual Property</h2><p>All intellectual property in Furrever AI — including the name, logo, design, code, and AI models — belongs to Furrever AI Ltd. You may not reproduce or distribute any part of the Service without our written permission.</p>
<h2 id="disclaimers">8. Disclaimers</h2><p>The Service is provided "as is" without warranties of any kind. Tracking features are informational tools, not medical devices.</p>
<h2 id="liability">9. Limitation of Liability</h2><p>To the maximum extent permitted by law, our total liability to you shall not exceed the amount you paid us in the 12 months preceding the claim.</p>
<h2 id="termination">10. Termination</h2><p>You may delete your account anytime through app settings. We may suspend or terminate your account if you violate these Terms. Upon termination, your data will be deleted per our <a href="/privacy">Privacy Policy</a>.</p>
<h2 id="changes">11. Changes to These Terms</h2><p>We will notify you of significant changes via email or in-app notice at least 14 days before they take effect.</p>
<h2 id="contact-terms">12. Contact</h2><p>Questions about these Terms? Email <a href="mailto:legal@furrever.ai">legal@furrever.ai</a> or use our <a href="/contact">Contact page</a>.</p>
</>)}
