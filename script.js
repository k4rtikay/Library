let myLibrary = [];

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
  
  myLibrary.push({
    title: title.value,
    author: author.value,
    pages: pages.value,
    readStatus: strToBool(document.querySelector('input[name=read]:checked').value),
  });

  // Get the newly added book's index
  let bookIndex = myLibrary.length - 1;
  let book = myLibrary[bookIndex];

  const item = document.createElement('div');
  item.classList.add('item');
  item.innerHTML = `${book.title}<br>${book.author}<br>${book.pages} pages<br>`;
  item.dataset.index = `${bookIndex}`;
  content.appendChild(item);

  const del = document.createElement('button');
  del.classList.add('delete');
  del.textContent = 'Delete';
  del.dataset.delindex = `${bookIndex}`;
  item.appendChild(del);

  const readToggle = document.createElement('button');
  readToggle.classList.add('read-toggle');
  readToggle.dataset.read = book.readStatus;
  readToggle.dataset.index = `${bookIndex}`; // Add a reference to the book index
  readToggle.textContent = book.readStatus ? "Mark as Unread" : "Mark as Read";
  item.appendChild(readToggle);
}

// Delegate click event for read-toggle buttons and handle the toggling
document.body.addEventListener('click', (event) => {
  if (event.target.classList.contains('read-toggle')) {
    let element = event.target;

    // Get the book index from the button
    let bookIndex = element.getAttribute("data-index");
    let book = myLibrary[bookIndex]; // Fetch the correct book object from the array

    // Toggle the read status
    let isRead = element.getAttribute("data-read") === "true";
    element.setAttribute("data-read", !isRead);
    book.readStatus = !isRead; // Update the book's readStatus in the library

    // Update UI
    element.textContent = isRead ? "Mark as Read" : "Mark as Unread";
    element.style.backgroundColor = isRead ? "#67C2F4" : "#F6A951";

    console.log(`Book at index ${bookIndex} updated:`, book);
  }
});

// Delegate click event for delete buttons and handle removal
document.body.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete')) {
    let element = event.target;

    // Get the book index from the button
    let bookIndex = element.getAttribute("data-delindex");
    myLibrary.splice(bookIndex, 1); // Remove the book from the library array

    // Remove the DOM element
    document.querySelector(`[data-index="${bookIndex}"]`).remove();

    console.log(`Book at index ${bookIndex} deleted. Library now:`, myLibrary);

    const items = document.querySelectorAll('.item');
    items.forEach((item, index) => {
      item.dataset.index = index; // Update the data-index to reflect the new array order
      item.querySelector('.delete').dataset.delindex = index; // Update the delete button
      item.querySelector('.read-toggle').dataset.index = index; // Update the read toggle
    });
  }
});
    


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

  function strToBool(val) {
    if(val==="true"){
      return true;
    }else {
      return false;
    }
  }
  