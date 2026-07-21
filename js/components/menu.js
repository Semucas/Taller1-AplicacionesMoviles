export function initMenu(){
  const button=document.querySelector('.menu-button');
  const menu=document.querySelector('.mobile-menu');
  const header=document.querySelector('.site-header');
  if(!button||!menu)return;
  const closeMenu=()=>{button.setAttribute('aria-expanded','false');menu.setAttribute('aria-hidden','true');menu.classList.remove('is-open');header.classList.remove('menu-open');document.body.style.overflow=''};
  button.addEventListener('click',()=>{
    const open=button.getAttribute('aria-expanded')==='true';
    if(open){closeMenu();return;}
    button.setAttribute('aria-expanded','true');menu.setAttribute('aria-hidden','false');menu.classList.add('is-open');header.classList.add('menu-open');document.body.style.overflow='hidden';
  });
  menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
}
