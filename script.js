
const typing = document.getElementById("typing");
let i = 0;
let text = 'Baku is the most breath-taking city of the world.';

setInterval(() => {
   if (i < text.length) {
    typing.innerHTML += text[i++];
   } 
}, 100);