// eslint-disable-next-line no-unused-vars
function mobileMenu() {
  const div = document.getElementById('menu');
  const img = document.getElementById('hideDiv');
  if (div.style.display === 'block') {
    div.style.display = 'none';
    img.style.display = 'block';
  } else {
    div.style.display = 'block';
    img.style.display = 'none';
  }
}

const body = document.body
body.append("Hello World")