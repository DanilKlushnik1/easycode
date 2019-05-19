// Создание эл-ов
// createElement
let div = document.createElement('div');
//  innerHTML, textContent
// div.innerHTML = '<h1>Title</h1>';
div.textContent = 'text';
// classList - add, contains, toggle, remove;
div.classList.add('myClass', 'myClass2');
// attributes, getAttribute(attrName), setAttribute(attrName, value), hasAttribute(attrName), removeAttribute(attrName)
div.setAttribute('id', 'myId');
// dataset
let main = document.querySelector('main');
let formContainer = document.querySelector('.form-section');
// formContainer.dataset
// Append
// formContainer.appendChild(div);
// formContainer.insertAdjacentElement('beforebegin', div);
// formContainer.insertAdjacentHTML('afterbegin','<h1>Title</h1>');
// main.removeChild(formContainer);
// main.replaceChild(div, formContainer);
// console.log(div);

// Forms
const forms = document.forms['addTodoForm'];
const title = forms.elements['title'];
const text = forms.elements['text'];
// forms.reset()
// title.value;
console.log(forms);