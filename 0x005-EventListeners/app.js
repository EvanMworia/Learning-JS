const title = document.querySelector('h2');

const btn = document.querySelector('.btn');

function changeColors() {
  if (title.classList.contains('new-title')) {
    title.classList.remove('new-title');
  } else {
    title.classList.add('new-title');
  }
}
btn.addEventListener('click', changeColors);
console.log(title);
console.log(btn);
