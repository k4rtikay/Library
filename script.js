const myLibrary = [];

function Book() {
  
}

function addBookToLibrary() {
  
}

const open = document.querySelector(".addBook");
const modal = document.querySelector(".modal");

open.addEventListener('click',()=>{
    modal.showModal();
})

document.addEventListener("click", e => {
    const dialog = document.querySelector('dialog');
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