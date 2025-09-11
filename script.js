// 프로필 클릭 시 해당 섹션으로 부드럽게 이동
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
  // 키보드 접근성: Enter키로도 이동
  card.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); card.click(); }
  });
});

// URL 해시로 들어왔을 때 자동 포커스
if(location.hash){
  const target = document.querySelector('[data-target="'+location.hash.replace('#','')+'"]');
  if(target){target.classList.add('active')}
}
