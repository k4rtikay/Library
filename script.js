let myLibrary = [];
let count=-1;

const open = document.querySelector(".addBook");
const modal = document.querySelector(".modal");
const form =document.querySelector('form');
const submit = document.querySelector('.submit');
const items = document.querySelector('.items');
const dialog = document.querySelector('dialog');
const content = document.querySelector('.content');

function Book(title,author,pages,readStatus) {
  this.title=title;
  this.author=author;
  this.pages=pages;
  this.readStatus=readStatus;
}

function addBookToLibrary() {
  console.log(count);

  myLibrary.push({
    title: title.value,
    author: author.value,
    pages: pages.value,
    readStatus:document.querySelector('input[name="read"]:checked').value,
  })

  let book = myLibrary[count];


  const item=document.createElement('div');
  item.classList.add('item');
  //console.log(myLibrary);
  item.innerHTML=`${book.title}<br>${book.author}<br>${book.pages} pages<br>${book.readStatus}<br>`;
  item.dataset.index = `${count}`;
  content.appendChild(item);

  const del = document.createElement('button');
  del.classList.add('delete');
  del.textContent='Delete';
  item.appendChild(del);

  const readToggle = document.createElement('button');
  del.classList.add('readtoggle');
  

  let elements = document.querySelectorAll('[data-index]');

  elements.forEach(element => {
    element.addEventListener('click',()=>{
      myLibrary = myLibrary.filter(ele => ele != element);
      console.log(myLibrary);
      element.remove();
    })
  });
  
  
}


open.addEventListener('click',()=>{
    modal.showModal();
})

document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();
})

document.addEventListener("click", e => {
    
    if(!dialog.open) return;
    const dialogDimensions = dialog.getBoundingClientRect()
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      dialog.close();
    }
  })

  submit.addEventListener('click',()=>{
    count++;
    addBookToLibrary();
    dialog.close();
  })

  
  