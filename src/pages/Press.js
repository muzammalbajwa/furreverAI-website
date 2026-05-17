import React from 'react';
import useReveal from '../hooks/useReveal';
function R({children,className='',delay=''}){const ref=useReveal();return <div ref={ref} className={`reveal ${delay} ${className}`}>{children}</div>;}
const DL=[{ico:'🐾',cls:'a',border:'#F5A623',title:'Logo Pack',desc:'Full logo in SVG, PNG (transparent), and dark/light/colour variations. App icon in all required sizes.',btn:'⬇ Download Logo Pack (.zip)'},{ico:'📱',cls:'t',border:'#2BBFAE',title:'App Screenshots',desc:'High-resolution screenshots of all key app screens — dashboard, sleep tracker, AI chat, community feed.',btn:'⬇ Download Screenshots (.zip)'},{ico:'🎨',cls:'p',border:'#8B5CF6',title:'Brand Guidelines',desc:'Complete brand identity document: colours, typography, spacing rules, tone of voice, and usage guidelines.',btn:'⬇ Download Brand PDF'},{ico:'📄',cls:'n',border:'#1A1F3C',title:'Latest Press Release',desc:'Our most recent press release covering the Furrever AI 2.0 launch, including key statistics and founder quotes.',btn:'⬇ Download Press Release'}];
const FACTS=[['Founded','2022, remote-first team'],['Active Users','50,000+ pet parents worldwide'],['Pets on Platform','120,000+ individual pet profiles'],['App Store Rating','4.9 / 5 stars (iOS & Android)'],['Platforms','iOS 15+ and Android 10+'],['AI Queries Answered','2M+ questions answered to date'],['Team Size','12 full-time team members'],['Veterinary Advisors','3 licensed veterinarians on staff']];
const COVERAGE=[{source:'TechCrunch',quote:'"Furrever AI is doing for pet health what Fitbit did for human fitness — making invisible data visible and actionable."'},{source:'VetPractice Today',quote:'"The veterinary community has been waiting for a tool like this. Clients arrive with real data instead of guesswork."'},{source:'Wired',quote:'"In a sea of gimmicky pet gadgets, Furrever AI stands out as genuinely useful software for genuinely devoted pet owners."'}];
export default function Press(){return(<>
<section style={{minHeight:'52vh',background:'linear-gradient(155deg,#FFF8EC 0%,#FFFDF9 50%,#F0FEFA 100%)',display:'flex',alignItems:'center',padding:'140px 24px 80px',position:'relative',overflow:'hidden',textAlign:'center'}}>
<div style={{position:'absolute',width:500,height:500,borderRadius:'50%',background:'radial-gradient(circle,rgba(245,166,35,.13) 0%,transparent 70%)',top:-120,right:-120,pointerEvents:'none'}}/>
<div style={{maxWidth:720,margin:'0 auto',position:'relative',zIndex:1}}>
<div style={{display:'inline-flex',alignItems:'center',gap:8,background:'#FFF3DC',border:'1px solid rgba(245,166,35,.3)',borderRadius:50,padding:'8px 16px',fontSize:13,fontWeight:600,color:'#E8890A',marginBottom:22}}>📰 Press Kit</div>
<h1 style={{fontSize:'clamp(36px,5vw,58px)',fontWeight:800,color:'#1A1F3C',marginBottom:20}}>Everything journalists<br/><span className="grad">need to cover us</span></h1>
<p style={{fontSize:17,color:'#6B7280',lineHeight:1.72,maxWidth:560,margin:'0 auto 36px'}}>Logos, brand assets, company facts, media coverage, and press contacts — all in one place.</p>
<div style={{display:'inline-flex',alignItems:'center',gap:12,background:'#fff',border:'1.5px solid #E8E5E0',borderRadius:16,padding:'12px 20px',fontSize:14,color:'#6B7280',boxShadow:'var(--sh-sm)'}}>📧 Press enquiries: <a href="mailto:press@furrever.ai" style={{color:'#F5A623',fontWeight:700}}>press@furrever.ai</a> &nbsp;·&nbsp; ⚡ 4-hour response</div>
</div>
</section>
<section style={{padding:'88px 24px'}}>
<div className="si">
<R className="tc"><div className="s-label">Brand Assets</div><h2 className="s-h2">Download what you need</h2><p className="s-sub">High-resolution, print-ready assets. Free to use for editorial coverage of Furrever AI.</p></R>
<div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:22,marginTop:56}} className="dl-grid">
{DL.map((d,i)=><R key={d.title} delay={`d${i+1}`}><div style={{background:'#fff',borderRadius:22,padding:30,border:'1px solid #E8E5E0',transition:'transform .3s,box-shadow .3s',position:'relative',overflow:'hidden'}}>
<div style={{position:'absolute',top:0,left:0,right:0,height:4,background:d.border,borderRadius:'0'}}/>
<div style={{display:'flex',alignItems:'center',gap:14,marginBottom:16}}>
<div style={{width:52,height:52,borderRadius:16,display:'flex',alignItems:'center',justifyContent:'center',fontSize:24,flexShrink:0,background:d.cls==='a'?'#FFF3DC':d.cls==='t'?'#E0FAF7':d.cls==='p'?'#F0EEFF':'#EEF2FF'}}>{d.ico}</div>
<h3 style={{fontFamily:"'Sora',sans-serif",fontSize:17,fontWeight:700,color:'#1A1F3C'}}>{d.title}</h3>
</div>
<p style={{fontSize:14,color:'#6B7280',lineHeight:1.6,marginBottom:20}}>{d.desc}</p>
<a href="#" style={{display:'inline-flex',alignItems:'center',gap:8,padding:'11px 22px',borderRadius:12,background:'#F9F7F4',border:'1.5px solid #E8E5E0',fontSize:13,fontWeight:600,color:'#1A1F3C',textDecoration:'none',transition:'all .2s'}}>{d.btn}</a>
</div></R>)}
</div>
</div>
</section>
<section style={{background:'#F9F7F4',padding:'88px 24px'}}>
<div className="si">
<R><div className="s-label">Brand Colours</div><h2 className="s-h2">Our colour palette</h2></R>
<div style={{display:'flex',gap:16,flexWrap:'wrap',marginTop:40}}>
{[['#F5A623','Furrever Amber'],['#E8890A','Amber Dark'],['#2BBFAE','Furrever Teal'],['#1A1F3C','Deep Navy'],['#F9F7F4','Warm Soft']].map(([hex,name])=>(
<div key={hex} style={{borderRadius:16,overflow:'hidden',flex:1,minWidth:120,boxShadow:'var(--sh-sm)'}}>
<div style={{height:80,background:hex,border:hex==='#F9F7F4'?'1px solid #e5e5e5':undefined}}/>
<div style={{background:'#fff',padding:'12px 14px',border:'1px solid #E8E5E0',borderTop:'none'}}><div style={{fontFamily:"'Sora',sans-serif",fontSize:13,fontWeight:700,color:'#1A1F3C',marginBottom:3}}>{name}</div><div style={{fontSize:12,color:'#6B7280'}}>{hex}</div></div>
</div>))}
</div>
<div style={{marginTop:64}}>
<R className="tc"><div className="s-label">Fast Facts</div><h2 className="s-h2">About Furrever AI</h2></R>
<div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:16,marginTop:48}} className="facts-grid">
{FACTS.map(([k,v])=><R key={k}><div style={{background:'#fff',borderRadius:18,padding:'22px',border:'1px solid #E8E5E0',display:'flex',alignItems:'flex-start',gap:14}}>
<div style={{width:10,height:10,background:'#F5A623',borderRadius:'50%',flexShrink:0,marginTop:7}}/>
<div><strong style={{fontFamily:"'Sora',sans-serif",fontSize:14,color:'#1A1F3C',display:'block',marginBottom:4}}>{k}</strong><span style={{fontSize:14,color:'#6B7280'}}>{v}</span></div>
</div></R>)}
</div>
</div>
<div style={{marginTop:72}}>
<R className="tc"><div className="s-label">Media Coverage</div><h2 className="s-h2">What the press is saying</h2></R>
<div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:22,marginTop:48}} className="cov-grid">
{COVERAGE.map((c,i)=><R key={c.source} delay={`d${i+1}`}><div style={{background:'#fff',borderRadius:20,padding:24,border:'1px solid #E8E5E0',transition:'transform .3s,box-shadow .3s'}}>
<div style={{fontSize:11,fontWeight:700,color:'#9CA3AF',textTransform:'uppercase',letterSpacing:.6,marginBottom:10}}>{c.source}</div>
<p style={{fontSize:14,color:'#1A1F3C',lineHeight:1.65,fontStyle:'italic',marginBottom:14}}>{c.quote}</p>
<a href="#" style={{fontSize:13,color:'#F5A623',fontWeight:700,textDecoration:'none'}}>Read article →</a>
</div></R>)}
</div>
</div>
<R style={{background:'linear-gradient(145deg,#1A1F3C,#2D3561)',borderRadius:28,padding:52,marginTop:56,display:'grid',gridTemplateColumns:'1fr auto',gap:48,alignItems:'center',position:'relative',overflow:'hidden'}} className="press-cta">
<div style={{position:'absolute',top:-100,right:-100,width:400,height:400,borderRadius:'50%',background:'radial-gradient(circle,rgba(245,166,35,.1) 0%,transparent 60%)',pointerEvents:'none'}}/>
<div style={{position:'relative',zIndex:1}}>
<div style={{display:'inline-flex',alignItems:'center',gap:7,background:'rgba(245,166,35,.15)',border:'1px solid rgba(245,166,35,.3)',borderRadius:50,padding:'6px 14px',fontSize:12,fontWeight:600,color:'#F5A623',marginBottom:14}}>📬 Press Enquiries</div>
<h3 style={{fontFamily:"'Sora',sans-serif",fontSize:24,fontWeight:800,color:'#fff',marginBottom:10}}>Let's work together</h3>
<p style={{fontSize:15,color:'rgba(255,255,255,.6)'}}>For interviews, exclusives, and additional assets, contact <a href="mailto:press@furrever.ai" style={{color:'#F5A623',fontWeight:600}}>press@furrever.ai</a>. We respond within 4 hours on business days.</p>
</div>
<div style={{display:'flex',flexDirection:'column',gap:10,flexShrink:0,position:'relative',zIndex:1}}>
<a href="mailto:press@furrever.ai" style={{padding:'13px 26px',borderRadius:14,background:'linear-gradient(135deg,#F5A623,#E8890A)',color:'#fff',fontWeight:700,fontSize:14,display:'flex',alignItems:'center',gap:8,textDecoration:'none',whiteSpace:'nowrap'}}>📧 Email Press Team</a>
<a href="/contact" style={{padding:'13px 26px',borderRadius:14,border:'1.5px solid rgba(255,255,255,.2)',color:'#fff',fontWeight:600,fontSize:14,display:'flex',alignItems:'center',gap:8,textDecoration:'none',whiteSpace:'nowrap'}}>💬 Contact Form</a>
</div>
</R>
</div>
</section>
<style>{`
@media(max-width:900px){.dl-grid{grid-template-columns:1fr!important}.cov-grid{grid-template-columns:1fr 1fr!important}.facts-grid{grid-template-columns:1fr!important}.press-cta{grid-template-columns:1fr!important;gap:28px!important;padding:32px 24px!important}}
@media(max-width:640px){.cov-grid{grid-template-columns:1fr!important}}
`}</style>
</>);}
