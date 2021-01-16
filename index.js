document.addEventListener('DOMContentLoaded', function(){

    const list = document.querySelector('#list ul');
    const forms = document.forms;
  
        // to delete task
    list.addEventListener('click', (e) => {
      if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
      }
    });
  
       // to add task
    const addForm = forms['task'];
    addForm.addEventListener('submit', function(e){
      e.preventDefault();
  
        // to create element
      const value = addForm.querySelector('input[type="text"]').value;
      const li = document.createElement('li');
      const taskName = document.createElement('span');
      const deleteBtn = document.createElement('span');
  
      //  for adding text content
      taskName.textContent = value;
      deleteBtn.textContent = 'delete';
  
      // adding classes
      taskName.classList.add('name');
      deleteBtn.classList.add('delete');
  
      // append to DOM
      li.appendChild(taskName);
      li.appendChild(deleteBtn);
      list.appendChild(li);
    });
  
    // hide
    const hideBox = document.querySelector('#hide');
    hideBox.addEventListener('change', function(e){
      if(hideBox.checked){
        list.style.display = "none";
      } else {
        list.style.display = "initial";
      }
    });
  
    // filter tasks
    const searchBar = forms['search'].querySelector('input');
    searchBar.addEventListener('keyup', (e) => {
      const term = e.target.value.toLowerCase();
      const books = list.getElementsByTagName('li');
      Array.from(books).forEach((book) => {
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(e.target.value) != -1){
          book.style.display = 'block';
        } else {
          book.style.display = 'none';
        }
      });
    });
  
  })