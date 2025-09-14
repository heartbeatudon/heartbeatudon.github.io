document.querySelectorAll('.profile-card').forEach(card => {
  card.addEventListener('click', () => {
    const id = card.getAttribute('data-target');
    const el = document.getElementById(id);
    if(el){
      el.scrollIntoView({behavior:'smooth', block:'start'});
      document.querySelectorAll('.profile-card').forEach(c=>c.classList.remove('active'));
      card.classList.add('active');
    }
  });
  card.addEventListener('keydown', e=>{
    if(e.key === 'Enter' || e.key === ' '){
      e.preventDefault();
      card.click();
    }
  });
});

if(location.hash){
  const target = document.querySelector('.profile-card[data-target="'+location.hash.replace('#','')+'"]');
  if(target){target.classList.add('active')}
}
