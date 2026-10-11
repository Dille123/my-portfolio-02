
const menuButton=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav-links');
if(menuButton&&nav){menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});}
document.querySelectorAll('.nav-links a').forEach(link=>link.addEventListener('click',()=>nav?.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const glow=document.querySelector('.cursor-glow');
if(glow&&matchMedia('(pointer:fine)').matches){document.addEventListener('pointermove',e=>{glow.style.left=(e.clientX-120)+'px';glow.style.top=(e.clientY-120)+'px';});}
const year=document.querySelector('[data-year]');if(year)year.textContent=new Date().getFullYear();
const form=document.querySelector('#contact-form');
if(form){form.addEventListener('submit',e=>{const action=form.getAttribute('action')||'';if(!action||action.includes('YOUR_FORM_ID')){e.preventDefault();alert('Before sending messages, replace YOUR_FORM_ID in contact.html with your Formspree form ID.');}});}
