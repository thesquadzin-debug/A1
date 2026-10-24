(function(){var d=document,rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
var mb=d.getElementById('mb'),nv=d.getElementById('nav');
if(mb)mb.addEventListener('click',function(){var o=nv.classList.toggle('o');mb.setAttribute('aria-expanded',o)});
d.querySelectorAll('.yr').forEach(function(e){e.textContent=new Date().getFullYear()});
if(rm)return;
var st=d.querySelector('.stage');
if(st)addEventListener('pointermove',function(e){var r=st.getBoundingClientRect();st.style.setProperty('--x',((e.clientX-r.left)/r.width-.5)*2);st.style.setProperty('--y',((e.clientY-r.top)/r.height-.5)*2)},{passive:true});
d.querySelectorAll('.card').forEach(function(c){c.addEventListener('pointermove',function(e){if(e.pointerType==='touch')return;var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform='rotateX('+(-y*10)+'deg) rotateY('+(x*12)+'deg) translateY(-4px)'});c.addEventListener('pointerleave',function(){c.style.transform=''})});
})();
(function(){var f=document.getElementById('enq');if(!f)return;
f.addEventListener('submit',function(e){e.preventDefault();var n=f.n.value.trim(),s=f.s.value,m=f.m.value.trim(),t=document.getElementById('st');
if(!n||!m){t.style.color='#ffb4b4';t.textContent='Please add your name and project details.';return}
var txt='Hello Rishi Squadz, I am '+n+'. Service: '+s+'. Project: '+m;
t.style.color='#9fe0b0';t.textContent='Opening WhatsApp. Press send to deliver your enquiry.';
window.open('https://wa.me/919453886029?text='+encodeURIComponent(txt),'_blank','noopener')})})();
(function(){var f=document.getElementById('lg');if(!f)return;f.addEventListener('submit',function(e){e.preventDefault();document.getElementById('st').textContent='The client portal is launching soon. Please call or WhatsApp 9453886029 for project updates.'})})();
