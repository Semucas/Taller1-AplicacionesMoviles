export function initNewsletter(){
  const form=document.querySelector('.newsletter');
  form?.addEventListener('submit',event=>{
    event.preventDefault();
    const input=form.querySelector('input');
    if(!input?.value)return;
    alert('¡Gracias! Tu correo fue registrado para esta demostración.');
    form.reset();
  });
}
