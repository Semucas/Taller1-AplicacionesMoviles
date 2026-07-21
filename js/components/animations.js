export function initRevealAnimations(){
  const items=document.querySelectorAll('.reveal');
  const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}
    });
  },{threshold:.14});
  items.forEach(item=>observer.observe(item));
}

export function initLoader(){
  const loader=document.querySelector('.loader');
  window.addEventListener('load',()=>setTimeout(()=>loader?.classList.add('is-hidden'),900));
}
