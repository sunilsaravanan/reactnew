const li = document.createElement("li");
const ul = document.querySelector("ul");
ul.append(li);

li.innerText = "x-man";

li.setAttribute('id', 'main-heading');
li.removeAttribute('id');

li.classList.add("list-items");
//li.classList.remove('list-items');

const body = document.querySelector("body");

console.log(body.lastElementChild);
