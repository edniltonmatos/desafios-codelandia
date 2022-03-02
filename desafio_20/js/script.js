/*menu*/

const btnMobile = document.getElementById('btn-mobile');
const nav = document.getElementById('nav');
const active = nav.classList.contains('active');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  nav.classList.toggle('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

const items = document.querySelectorAll('#menu li');

items.forEach(item => {
  item.addEventListener('click', () => {
    nav.classList.remove('active');
  })
});

/*light dark*/
const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('light');
});


