const btnTopo = document.querySelector('#btn-topo');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 1000) {
    btnTopo.style.display = 'block';
  } else {
    btnTopo.style.display = 'none';
  }
});

btnTopo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
