function menuToggle() {
  let menu = document.getElementById('menuHidden');
  let main = document.getElementById('main');
  let body = document.body;

  if (menu.style.top === '10vh') {
    menu.style.top = '-97vh';
    body.style.overflow = 'auto';
  } else {
    menu.style.top = '10vh';
    body.style.overflow = 'hidden';
  }
}





