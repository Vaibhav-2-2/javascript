const parent = document.querySelector('.parent');
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[0].innerHTML);

parent.children[0].style.color = 'red';

parent.children[0].style.backgroundColor = 'blue';
for (let i = 0; i < parent.children.length; i++) {
    parent.children[i].style.color = 'white';
    parent.children[i].style.backgroundColor = 'black';
    parent.children[i].style.padding = '10px';
    parent.children[i].style.borderRadius = '5px';
    parent.children[i].style.border = '2px solid black';
    parent.children[i].style.fontSize = '20px';
}

// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

const day1 = document.querySelector('.day');
console.log(day1.innerHTML);
// console.log(day1.parentElement);//mumbo jumbo
// console.log(day1.nextElementSibling.innerHTML);
// console.log(day1.previousElementSibling);

console.log(parent.childNodes); // complete node tree structure

// create a new element
const newElement = document.createElement('div');
// newElement.innerHTML = 'Hello World';
 const newText = document.createTextNode('Hello World'); // do this for text because it will better as innerHTML first call inner html then create text node
newElement.appendChild(newText);
 newElement.id = 'newElement';
newElement.className = 'newElement';

newElement.setAttribute('title', 'newElement');

parent.appendChild(newElement);
console.log(newElement);
document.body.appendChild(newElement);








 