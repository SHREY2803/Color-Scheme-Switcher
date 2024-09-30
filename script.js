const grey_btn = document.getElementById('grey');
const white_btn = document.getElementById('white');
const blue_btn = document.getElementById('blue');
const yellow_btn = document.getElementById('yellow');
const purple_btn = document.getElementById('purple');
const body = document.querySelector('body');

grey_btn.addEventListener('click',()=>{
    body.style.backgroundColor = 'grey';
})
white_btn.addEventListener('click',()=>{
    body.style.backgroundColor = 'white';
})
blue_btn.addEventListener('click',()=>{
    body.style.backgroundColor = 'blue';
})
yellow_btn.addEventListener('click',()=>{
    body.style.backgroundColor = 'yellow';
})
purple_btn.addEventListener('click',()=>{
    body.style.backgroundColor = 'purple';
})