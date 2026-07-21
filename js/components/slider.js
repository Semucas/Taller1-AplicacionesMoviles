export function initDragSlider(){
  const slider=document.querySelector('.engagement-slider');
  if(!slider)return;
  let pressed=false,startX=0,startScroll=0;
  const start=(x)=>{pressed=true;startX=x;startScroll=slider.scrollLeft;slider.classList.add('is-dragging');};
  const move=(x)=>{if(!pressed)return;slider.scrollLeft=startScroll-(x-startX)*1.4;};
  const end=()=>{pressed=false;slider.classList.remove('is-dragging');};
  slider.addEventListener('mousedown',event=>start(event.pageX));
  window.addEventListener('mousemove',event=>move(event.pageX));
  window.addEventListener('mouseup',end);
  slider.addEventListener('touchstart',event=>start(event.touches[0].pageX),{passive:true});
  slider.addEventListener('touchmove',event=>move(event.touches[0].pageX),{passive:true});
  slider.addEventListener('touchend',end);
}
