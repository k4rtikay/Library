const myLibrary = [];
let count=0;

const open = document.querySelector(".addBook");
const modal = document.querySelector(".modal");
const form =document.querySelector('form');
const submit = document.querySelector('.submit');
const items = document.querySelector('.items');
const dialog = document.querySelector('dialog');

function Book(title,author,pages,readStatus) {
  this.title=title;
  this.author=author;
  this.pages=pages;
  this.readStatus=readStatus;
}

function addBookToLibrary() {
  myLibrary.push({
    title: title.value,
    author: author.value,
    pages: pages.value,
    readStatus:document.querySelector('input[name="read"]:checked').value,
  })
  console.log(title.value);

  let book = myLibrary[count];

  const item=document.createElement('div');
  item.classList.add('item');
  item.textContent=`${book.title} ${book.author} ${book.pages} ${book.readStatus}`;
  console.log(book);
  items.appendChild(item);

  count++;
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
    addBookToLibrary();
    dialog.close();
  })

  