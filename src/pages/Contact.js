import React, { useState } from 'react';
import useReveal from '../hooks/useReveal';

function R({ children, className='', delay='' }) { const ref = useReveal(); return <div ref={ref} className={`reveal ${delay} ${className}`}>{children}</div>; }

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ fname:'', lname:'', email:'', topic:'', pet:'', msg:'' });
  const submit = () => { if (!form.email || !form.msg) { alert('Please fill in your email and message.'); return; } setSent(true); };
  return (
    <>
      <section style={{minHeight:'52vh',background:'linear-gradient(155deg,#FFF8EC 0%,#FFFDF9 50%,#F0FEFA 100%)',display:'flex',alignItems:'center',padding:'140px 24px 80px',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',width:500,height:500,borderRadius:'50%',background:'radial-gradient(circle,rgba(245,166,35,.13) 0%,transparent 70%)',top:-120,right:-120,pointerEvents:'none'}}/>
        <div style={{position:'absolute',width:360,height:360,borderRadius:'50%',background:'radial-gradient(circle,rgba(43,191,174,.09) 0%,transparent 70%)',bottom:-80,left:-80,pointerEvents:'none'}}/>
        <div className="si" style={{width:'100%'}}>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:64,alignItems:'center'}} className="contact-hero-grid">
            <div>
              <div style={{display:'inline-flex',alignItems:'center',gap:8,background:'#FFF3DC',border:'1px solid rgba(245,166,35,.3)',borderRadius:50,padding:'8px 16px',fontSize:13,fontWeight:600,color:'#E8890A',marginBottom:22}}>💬 Get in Touch</div>
              <h1 style={{fontSize:'clamp(36px,5vw,58px)',fontWeight:800,color:'#1A1F3C',lineHeight:1.08,marginBottom:20}}>We'd love to<br/><span className="grad">hear from you</span></h1>
              <p style={{fontSize:17,color:'#6B7280',lineHeight:1.72,marginBottom:36,maxWidth:460}}>Whether you have a question, feedback, or just want to say hi — our team personally responds to every message.</p>
              <div style={{display:'flex',gap:24,flexWrap:'wrap'}}>
                {[['⚡','Reply within 4 hours'],['👤','Real humans, no bots'],['🐾','Pet parents helping pet parents']].map(([ico,txt])=>(
                  <div key={txt} style={{display:'flex',alignItems:'center',gap:8,fontSize:13,color:'#6B7280'}}><span style={{fontSize:18}}>{ico}</span>{txt}</div>
                ))}
              </div>
            </div>
            <R className="d2">
              {[{ico:'📧',cls:'a',title:'Email Support',detail:'App issues, account & billing',link:'support@furrever.ai',badge:'4hr reply'},
                {ico:'🤝',cls:'t',title:'Press & Partnerships',detail:'Media & collaborations',link:'hello@furrever.ai'},
                {ico:'💬',cls:'p',title:'Live Chat',detail:'Open app → tap chat icon · 9am–6pm GMT',badge:'Live now'},
                {ico:'🌍',cls:'r',title:'Social Media',detail:'DM us on Instagram, Twitter or TikTok'}
              ].map(c=>(
                <div key={c.title} style={{background:'#fff',borderRadius:18,padding:'20px 22px',border:'1px solid #E8E5E0',display:'flex',alignItems:'flex-start',gap:14,marginBottom:12,transition:'transform .2s,box-shadow .2s'}}>
                  <div style={{width:46,height:46,borderRadius:14,display:'flex',alignItems:'center',justifyContent:'center',fontSize:22,flexShrink:0,background:c.cls==='a'?'#FFF3DC':c.cls==='t'?'#E0FAF7':c.cls==='p'?'#F0EEFF':'#FFF0F3'}}>{c.ico}</div>
                  <div style={{flex:1}}>
                    <div style={{fontFamily:"'Sora',sans-serif",fontSize:14,fontWeight:700,color:'#1A1F3C',marginBottom:3}}>{c.title}</div>
                    <div style={{fontSize:13,color:'#6B7280'}}>{c.detail}{c.link&&<><br/><a href={`mailto:${c.link}`} style={{color:'#F5A623',fontWeight:600}}>{c.link}</a></>}</div>
                  </div>
                  {c.badge&&<div style={{fontSize:11,fontWeight:700,color:'#2BBFAE',background:'#E0FAF7',borderRadius:50,padding:'4px 10px',flexShrink:0}}>{c.badge}</div>}
                </div>
              ))}
            </R>
          </div>
        </div>
      </section>

      {/* Response strip */}
      <div style={{background:'linear-gradient(135deg,#F5A623,#E8890A)',padding:'52px 24px'}}>
        <div className="si" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:32,textAlign:'center'}} className="resp-grid">
          {[['⚡','Under 4 hours','Average response time'],['😊','98%','Customer satisfaction'],['👥','Real humans','No bots, ever']].map(([ico,val,lbl])=>(
            <R key={lbl}><div style={{fontSize:36,marginBottom:12}}>{ico}</div><div style={{fontFamily:"'Sora',sans-serif",fontSize:22,fontWeight:800,color:'#fff',marginBottom:6}}>{val}</div><div style={{fontSize:13,color:'rgba(255,255,255,.75)'}}>{lbl}</div></R>
          ))}
        </div>
      </div>

      {/* Form section */}
      <section style={{background:'#F9F7F4',padding:'88px 24px'}}>
        <div className="si">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1.2fr',gap:64,alignItems:'start'}} className="form-grid">
            <R>
              <div className="s-label">Send a message</div>
              <h2 className="s-h2">Tell us what's on your mind</h2>
              <p className="s-sub" style={{marginBottom:0}}>We read every single message. Your feedback directly shapes how Furrever AI grows.</p>
              <div style={{marginTop:28,display:'flex',flexDirection:'column',gap:16}}>
                {[['🐕','Feature requests welcome','Many of our best features came from user messages. If something\'s missing, tell us.'],
                  ['🔧','Bug reports get priority','Found something broken? Drop it in the message — our engineers are notified immediately.'],
                  ['❤️','Stories make our day','Tell us about your pet. We love hearing how Furrever is helping real animals live better lives.']
                ].map(([ico,title,desc])=>(
                  <div key={title} style={{display:'flex',alignItems:'flex-start',gap:12}}>
                    <div style={{width:34,height:34,borderRadius:10,background:'#FFF3DC',border:'1px solid rgba(245,166,35,.2)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:16,flexShrink:0,marginTop:2}}>{ico}</div>
                    <div><h4 style={{fontSize:14,fontWeight:700,color:'#1A1F3C',marginBottom:3}}>{title}</h4><p style={{fontSize:13,color:'#6B7280',lineHeight:1.5}}>{desc}</p></div>
                  </div>
                ))}
              </div>
            </R>
            <R className="d2">
              <div style={{background:'#fff',borderRadius:26,padding:40,boxShadow:'var(--sh-sm)',border:'1px solid #E8E5E0'}}>
                <h3 style={{fontFamily:"'Sora',sans-serif",fontSize:22,fontWeight:800,color:'#1A1F3C',marginBottom:6}}>Send us a message</h3>
                <p style={{fontSize:14,color:'#6B7280',marginBottom:28}}>We'll get back to you within 1 business day.</p>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14,marginBottom:16}}>
                  <div><label style={{display:'block',fontSize:13,fontWeight:600,color:'#1A1F3C',marginBottom:7}}>First Name</label><input value={form.fname} onChange={e=>setForm({...form,fname:e.target.value})} style={{width:'100%',padding:'13px 16px',borderRadius:13,border:'1.5px solid #E8E5E0',fontFamily:"'DM Sans',sans-serif",fontSize:14,outline:'none'}} placeholder="Sarah"/></div>
                  <div><label style={{display:'block',fontSize:13,fontWeight:600,color:'#1A1F3C',marginBottom:7}}>Last Name</label><input value={form.lname} onChange={e=>setForm({...form,lname:e.target.value})} style={{width:'100%',padding:'13px 16px',borderRadius:13,border:'1.5px solid #E8E5E0',fontFamily:"'DM Sans',sans-serif",fontSize:14,outline:'none'}} placeholder="Mitchell"/></div>
                </div>
                {[['Email Address','email','email','sarah@example.com'],['Topic','topic','select',''],['Your pet (optional 🐾)','pet','text','e.g. Max, a 3-yr-old Golden Retriever'],['Message','msg','textarea','Tell us what\'s on your mind...']].map(([label,key,type,ph])=>(
                  <div key={key} style={{marginBottom:16}}>
                    <label style={{display:'block',fontSize:13,fontWeight:600,color:'#1A1F3C',marginBottom:7}}>{label}</label>
                    {type==='select'?(
                      <select value={form[key]} onChange={e=>setForm({...form,[key]:e.target.value})} style={{width:'100%',padding:'13px 16px',borderRadius:13,border:'1.5px solid #E8E5E0',fontFamily:"'DM Sans',sans-serif",fontSize:14,outline:'none',background:'#fff'}}>
                        <option value="">Select a topic...</option>
                        {['App / Technical Issue','Account & Billing','Feature Request','Partnership / Press','General Question','Just saying hi! 🐾'].map(o=><option key={o}>{o}</option>)}
                      </select>
                    ):type==='textarea'?(
                      <textarea value={form[key]} onChange={e=>setForm({...form,[key]:e.target.value})} style={{width:'100%',padding:'13px 16px',borderRadius:13,border:'1.5px solid #E8E5E0',fontFamily:"'DM Sans',sans-serif",fontSize:14,outline:'none',resize:'vertical',minHeight:120}} placeholder={ph}/>
                    ):(
                      <input type={type} value={form[key]} onChange={e=>setForm({...form,[key]:e.target.value})} style={{width:'100%',padding:'13px 16px',borderRadius:13,border:'1.5px solid #E8E5E0',fontFamily:"'DM Sans',sans-serif",fontSize:14,outline:'none'}} placeholder={ph}/>
                    )}
                  </div>
                ))}
                <button onClick={submit} style={{width:'100%',padding:15,borderRadius:14,background:sent?'#4ADE80':'linear-gradient(135deg,#F5A623,#E8890A)',color:'#fff',fontFamily:"'Sora',sans-serif",fontWeight:700,fontSize:16,border:'none',cursor:'pointer',transition:'all .25s',boxShadow:'0 4px 16px rgba(245,166,35,.35)'}}>
                  {sent?'✓ Sent!':'Send Message 🐾'}
                </button>
                {sent&&<div style={{marginTop:18,background:'#E0FAF7',border:'1px solid rgba(43,191,174,.3)',borderRadius:16,padding:20,textAlign:'center'}}><h4 style={{fontFamily:"'Sora',sans-serif",fontSize:17,fontWeight:700,color:'#0F6E56',marginBottom:6}}>🎉 Message received!</h4><p style={{fontSize:13,color:'#0F6E56'}}>Thanks! We'll reply within 1 business day.</p></div>}
              </div>
            </R>
          </div>
        </div>
      </section>
      <style>{`
        @media(max-width:900px){.contact-hero-grid,.form-grid{grid-template-columns:1fr!important;gap:36px!important}.resp-grid{grid-template-columns:1fr!important}}
      `}</style>
    </>
  );
}
