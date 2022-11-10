//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//console.log(document.forms[0]);
//console.log(document.links);
//console.log(document.images);

//GET ELEMENT BY ID//
//console.log(document.getElementsById('header-title'));
//var headerTitle = document.getElementsById('header-title');
//var header = document.getElementsById('main-header');
//console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'GoodBye';
//console.log(headerTitle.innerText);
//headerTitle.innerText = '<h3>Hello</h3>';
//header.style.borderBottom = 'solid 3px #000';

//GET ELEMENT BY CLASS NAME//

//var items = document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//itemss[1].textContent = 'Hello 2';
//items[1].style.fontWeight = 'bold';
//items[2].style.backgroundColor = 'green';

//for(var i = 0; i<items.length; i++) {
//  items[1].style.backgroundColor = '#f4f4f4';
//}

//for(var i = 0; i<items.length; i++) {
//  items.style.fontWeight = 'bold';
//}

//GET ELEMENT BY TAG NAME//

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[2].style.backgroundColor = 'green';

// for(var i = 0; i<li.length; i++) {
//     li[i].style.backgroundColor = '#f4f4f4';
// }

// for(var i = 0; i<li.length; i++) {
//     li.style.fontWeight = 'bold';
// }

// QUERY SELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = "Hello World"

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var secondItem = document.querySelector('.list-group-item');
// item.style.backgroundColor = 'green';

// var thirdItem = document.querySelector('.list-group-item');
// item.style.display = 'none';

// QUERY SELECT TO ALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var secondItem = document.querySelectorAll('li:nth-child(2)');
// item.style.color = 'green';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i=0; i<odd.length; i++) {
//     odd[i].style.backgroundColor = '#00800';
//     even[i].style.backgroundColor = '#f4f4f4'
// }


// TRAVERSING THE DOM //
// var itemList = document.querySelector('#items');

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement//
// console.log(itemList.parentElement);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes//
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// firstChild //
// console.log(itemList.firstChild);

// firstElementChild //
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// lastChild //
// console.log(itemList.lastChild);

// lastElementChild //
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling //
// console.log(itemList.nextSibling);
// nextElementSibling //
// console.log(itemList.nextElementSibling);

// previousSibling //
// console.log(itemList.previousSibling);
// previousElementSibling //
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// createElement //

// create a div 
// //console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//console.log(document.forms[0]);
//console.log(document.links);
//console.log(document.images);

//GET ELEMENT BY ID//
//console.log(document.getElementsById('header-title'));
//var headerTitle = document.getElementsById('header-title');
//var header = document.getElementsById('main-header');
//console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'GoodBye';
//console.log(headerTitle.innerText);
//headerTitle.innerText = '<h3>Hello</h3>';
//header.style.borderBottom = 'solid 3px #000';

//GET ELEMENT BY CLASS NAME//

//var items = document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//itemss[1].textContent = 'Hello 2';
//items[1].style.fontWeight = 'bold';
//items[2].style.backgroundColor = 'green';

//for(var i = 0; i<items.length; i++) {
//  items[1].style.backgroundColor = '#f4f4f4';
//}

//for(var i = 0; i<items.length; i++) {
//  items.style.fontWeight = 'bold';
//}

//GET ELEMENT BY TAG NAME//

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[2].style.backgroundColor = 'green';

// for(var i = 0; i<li.length; i++) {
//     li[i].style.backgroundColor = '#f4f4f4';
// }

// for(var i = 0; i<li.length; i++) {
//     li.style.fontWeight = 'bold';
// }

// QUERY SELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = "Hello World"

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var secondItem = document.querySelector('.list-group-item');
// item.style.backgroundColor = 'green';

// var thirdItem = document.querySelector('.list-group-item');
// item.style.display = 'none';

// QUERY SELECT TO ALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var secondItem = document.querySelectorAll('li:nth-child(2)');
// item.style.color = 'green';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i=0; i<odd.length; i++) {
//     odd[i].style.backgroundColor = '#00800';
//     even[i].style.backgroundColor = '#f4f4f4'
// }


// TRAVERSING THE DOM //
 var itemList = document.querySelector('#items');

// parentNode //
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement//
// console.log(itemList.parentElement);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes//
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// firstChild //
// console.log(itemList.firstChild);

// firstElementChild //
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// lastChild //
// console.log(itemList.lastChild);

// lastElementChild //
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling //
// console.log(itemList.nextSibling);

// nextElementSibling //
// console.log(itemList.nextElementSibling);

// previousSibling //
// console.log(itemList.previousSibling);

// previousElementSibling //
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// createElement //

// Create a div 
 var newDiv = document.createElement('div');

// Add  class
 newDiv.className = 'hello';

// Add id
 newDiv.id = 'hello 1';

// Add attr
 newDiv.setAttribute('title', 'Hello Div');

// Create a text node
 var newDivText = document.createTextNode('HEllo word');

// Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv,h1);
//console.log(newDiv);

//create div before item1
var newitem = document.createElement('div');
newitem.className='newitem';
newitem.setAttribute('title','newitem');
var newitemtext = document.createTextNode('hello world');
newitem.appendChild(newitemtext);

var ul = document.querySelector('ul')
var list1 = document.querySelector('li:nth-child(1)');
ul.insertBefore(newitem,list1);
console.log(newitem);