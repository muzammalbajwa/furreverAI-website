import React,{useState} from 'react';
import useReveal from '../hooks/useReveal';
function R({children,className='',delay=''}){const ref=useReveal();return <div ref={ref} className={`reveal ${delay} ${className}`}>{children}</div>}
function FaqItem({q,a}){const[open,setOpen]=useState(false);return(<div style={{borderBottom:'1px solid #E8E5E0'}}><button onClick={()=>setOpen(v=>!v)} style={{width:'100%',background:'none',border:'none',padding:'20px 0',display:'flex',alignItems:'center',justifyContent:'space-between',gap:14,fontFamily:"'Sora',sans-serif",fontSize:14,fontWeight:600,color:open?'#F5A623':'#1A1F3C',textAlign:'left',cursor:'pointer'}}>{q}<span style={{width:24,height:24,borderRadius:'50%',border:'1.5px solid',borderColor:open?'#F5A623':'#E8E5E0',display:'flex',alignItems:'center',justifyContent:'center',fontSize:15,color:open?'#fff':'#6B7280',background:open?'#F5A623':'none',transform:open?'rotate(45deg)':'none',transition:'all .3s',flexShrink:0}}>+</span></button><div style={{overflow:'hidden',maxHeight:open?160:0,transition:'max-height .32s ease',paddingBottom:open?16:0}}><p style={{fontSize:14,color:'#6B7280',lineHeight:1.7}}>{a}</p></div></div>);
}
const CATS=[{ico:'🚀',cls:'a',title:'Getting Started',desc:'Account setup, adding your first pet, and navigating the dashboard.',count:12},{ico:'🐾',cls:'t',title:'Pet Profiles',desc:'Creating, editing, and managing multiple pet profiles.',count:8},{ico:'💤',cls:'p',title:'Sleep & Activity',desc:'Understanding sleep scores, step goals, and activity tracking.',count:10},{ico:'🍖',cls:'r',title:'Diet & Nutrition',desc:'Logging meals, setting portion goals, and nutrition insights.',count:9},{ico:'🏥',cls:'b',title:'Vet Appointments',desc:'Scheduling visits, reminders, and managing medical records.',count:7},{ico:'🤖',cls:'t',title:'AI Assistant',desc:'How the AI works, what it can help with, and its limitations.',count:6},{ico:'🌍',cls:'a',title:'Community & Feed',desc:'Posting photos, following pet parents, and community guidelines.',count:5},{ico:'💳',cls:'p',title:'Account & Billing',desc:'Subscription plans, payment methods, and data export.',count:11},{ico:'🔧',cls:'r',title:'Troubleshooting',desc:'Fix syncing issues, notification problems, and app crashes.',count:14}];
const FAQS=[{q:'How do I create my first pet profile?',a:"After signing up, tap the '+' button on your dashboard and follow the setup wizard. Enter your pet's name, species, breed, age, and weight. The whole process takes under 2 minutes!"},{q:'Can I add multiple pets?',a:'Yes — unlimited pets on both free and premium plans! Each pet gets their own dashboard, health history, and personalised AI recommendations.'},{q:'Is Furrever AI available on Android?',a:'Yes! Furrever AI is available on both the Apple App Store and Google Play Store. The same account works on both platforms.'},{q:'What\'s included in the free plan?',a:'The free plan includes unlimited pet profiles, basic tracking (sleep, activity, diet, water), vet appointment reminders, 30 AI chatbot messages/month, and full community access.'},{q:'Can the AI replace my vet?',a:'No — the AI provides general information only, not medical diagnosis or treatment. Always see a qualified vet for medical concerns.'},{q:'How many AI messages do I get?',a:'Free plan: 30 messages/month. Premium plan: unlimited. Your counter resets on the 1st of each month.'}];
export default function Help(){return(<>
<section style={{background:'linear-gradient(145deg,#1A1F3C,#2D3561)',padding:'140px 24px 100px',position:'relative',overflow:'hidden',textAlign:'center'}}>
<div style={{position:'absolute',width:600,height:600,borderRadius:'50%',background:'radial-gradient(circle,rgba(245,166,35,.13) 0%,transparent 60%)',top:-200,right:-200,pointerEvents:'none'}}/>
<div style={{position:'absolute',width:400,height:400,borderRadius:'50%',background:'radial-gradient(circle,rgba(43,191,174,.1) 0%,transparent 60%)',bottom:-100,left:-100,pointerEvents:'none'}}/>
<div style={{maxWidth:720,margin:'0 auto',position:'relative',zIndex:1}}>
<div style={{display:'inline-flex',alignItems:'center',gap:8,background:'rgba(245,166,35,.15)',border:'1px solid rgba(245,166,35,.3)',borderRadius:50,padding:'8px 16px',fontSize:13,fontWeight:600,color:'#F5A623',marginBottom:22}}>❓ Help Center</div>
<h1 style={{fontSize:'clamp(36px,5vw,58px)',fontWeight:800,color:'#fff',marginBottom:18}}>How can we <span className="grad">help you?</span></h1>
<p style={{fontSize:17,color:'rgba(255,255,255,.62)',lineHeight:1.7,marginBottom:36}}>Search for anything — from setting up pet profiles to understanding your AI health insights.</p>
<div style={{position:'relative',maxWidth:540,margin:'0 auto'}}>
<span style={{position:'absolute',left:20,top:'50%',transform:'translateY(-50%)',fontSize:20}}>🔍</span>
<input style={{width:'100%',padding:'18px 24px 18px 56px',borderRadius:18,border:'2px solid rgba(255,255,255,.15)',background:'rgba(255,255,255,.1)',color:'#fff',fontFamily:"'DM Sans',sans-serif",fontSize:15,outline:'none'}} placeholder="Search help articles..."/>
<button style={{position:'absolute',right:8,top:'50%',transform:'translateY(-50%)',padding:'10px 20px',borderRadius:12,background:'#F5A623',color:'#fff',fontWeight:700,fontSize:13,border:'none',cursor:'pointer'}}>Search</button>
</div>
<div style={{marginTop:22,display:'flex',alignItems:'center',gap:10,justifyContent:'center',flexWrap:'wrap'}}>
<span style={{fontSize:12,color:'rgba(255,255,255,.4)'}}>Popular:</span>
{['Add pet profile','Sleep tracking','AI chatbot','Cancel subscription'].map(t=><span key={t} style={{padding:'6px 14px',borderRadius:50,background:'rgba(255,255,255,.1)',border:'1px solid rgba(255,255,255,.15)',fontSize:12,color:'rgba(255,255,255,.7)',cursor:'pointer'}}>{t}</span>)}
</div>
</div>
</section>
<section style={{padding:'88px 24px'}}>
<div className="si">
<R className="tc"><div className="s-label">Browse Topics</div><h2 className="s-h2">What do you need help with?</h2></R>
<div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20,marginTop:56}} className="cat-grid">
{CATS.map((c,i)=><R key={c.title} delay={`d${(i%3)+1}`}><div style={{background:'#fff',borderRadius:22,padding:28,border:'1px solid #E8E5E0',transition:'transform .3s,box-shadow .3s,border-color .3s',cursor:'pointer',display:'flex',alignItems:'flex-start',gap:16}}>
<div style={{width:52,height:52,borderRadius:16,display:'flex',alignItems:'center',justifyContent:'center',fontSize:24,flexShrink:0,background:c.cls==='a'?'#FFF3DC':c.cls==='t'?'#E0FAF7':c.cls==='p'?'#F0EEFF':c.cls==='r'?'#FFF0F3':'#EFF6FF'}}>{c.ico}</div>
<div><h3 style={{fontFamily:"'Sora',sans-serif",fontSize:15,fontWeight:700,color:'#1A1F3C',marginBottom:5}}>{c.title}</h3><p style={{fontSize:13,color:'#6B7280',lineHeight:1.5,marginBottom:8}}>{c.desc}</p><div style={{fontSize:11,fontWeight:700,color:'#F5A623'}}>📄 {c.count} articles →</div></div>
</div></R>)}
</div>
<div style={{marginTop:72}}>
<R className="tc"><div className="s-label">Quick Answers</div><h2 className="s-h2">Most asked questions</h2></R>
<div style={{maxWidth:760,margin:'40px auto 0',borderTop:'1px solid #E8E5E0'}}>
{FAQS.map(f=><FaqItem key={f.q} q={f.q} a={f.a}/>)}
</div>
</div>
<R style={{background:'linear-gradient(145deg,#1A1F3C,#2D3561)',borderRadius:28,padding:52,textAlign:'center',marginTop:64,position:'relative',overflow:'hidden'}}>
<div style={{position:'absolute',top:-100,left:'50%',transform:'translateX(-50%)',width:500,height:500,borderRadius:'50%',background:'radial-gradient(circle,rgba(245,166,35,.1) 0%,transparent 60%)',pointerEvents:'none'}}/>
<h3 style={{fontFamily:"'Sora',sans-serif",fontSize:28,fontWeight:800,color:'#fff',marginBottom:12,position:'relative',zIndex:1}}>Still need help? 🐾</h3>
<p style={{fontSize:16,color:'rgba(255,255,255,.62)',marginBottom:32,position:'relative',zIndex:1}}>Our support team typically responds within 4 hours. We're real humans who genuinely love pets.</p>
<div style={{display:'flex',justifyContent:'center',gap:14,flexWrap:'wrap',position:'relative',zIndex:1}}>
<a href="/contact" style={{padding:'13px 26px',borderRadius:14,background:'#2BBFAE',color:'#fff',fontWeight:700,fontSize:15,display:'inline-flex',alignItems:'center',gap:8,textDecoration:'none'}}>💬 Send us a Message</a>
<a href="mailto:support@furrever.ai" style={{padding:'13px 26px',borderRadius:14,border:'1.5px solid rgba(255,255,255,.2)',color:'#fff',fontWeight:600,fontSize:15,display:'inline-flex',alignItems:'center',gap:8,textDecoration:'none'}}>📧 Email Support</a>
</div>
</R>
</div>
</section>
<style>{`@media(max-width:900px){.cat-grid{grid-template-columns:1fr 1fr!important}}@media(max-width:640px){.cat-grid{grid-template-columns:1fr!important}}`}</style>
</>);}
