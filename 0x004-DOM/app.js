const item = document.querySelector('.first');
const nextItem = item.nextSibling.nextSibling;
item.style.color = 'magenta';
nextItem.style.color = 'red';
console.log(nextItem);
