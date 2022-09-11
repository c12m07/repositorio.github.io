var toggle = document.getElementById('box');
var body = document.querySelector('body');
var header =  document.getElementsByClassName('header');

toggle.onclick = function(){
    toggle.classList.toggle('dark');
    body.classList.toggle('dark');
}