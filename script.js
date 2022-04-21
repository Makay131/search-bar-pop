const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', (e) => {
  search.classList.toggle('active');
  input.focus();
});
document.body.addEventListener('click', (e) => {
  const el = e.target;
  if (el === document.body) {
    search.classList.remove('active');
    input.blur();
  }
});
document.body.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') search.classList.remove('active');
  input.blur();
});
