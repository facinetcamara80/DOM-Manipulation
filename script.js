const parag = document.createElement('p');
parag.innerHTML="Hey I'm red!";
parag.style.color = "red";
document.body.appendChild(parag);

const head = document.createElement('h3');
head.innerHTML ="I’m a blue h3!";
head.style.color = "blue";
document.body.appendChild(head);

const newDiv = document.createElement('div');
newDiv.style.backgroundColor ="pink";
newDiv.style.borderBlock = "black";

const newh1 = document.createElement('h1'); 
newh1.innerHTML="I'm in div";
newDiv.appendChild(newh1);
const newp = document.createElement('p');
newp.innerHTML = "ME TOO!";
newDiv.appendChild(newp);
document.body.appendChild(newDiv);


