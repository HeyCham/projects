const ulLists = document.querySelector('.store-items ul');
const addBtn = document.querySelector('button');
const inputText = document.getElementById('input');
const removeBtn = document.getElementById('remove');
const boxError = document.querySelector('.box');



document.addEventListener('DOMContentLoaded', () => {
  const storedItems = JSON.parse(localStorage.getItem('items')) || [];
  for (const item of storedItems) {
    createListItem(item.text, item.isChecked);
  }
});


function createLists() {
  const inputValue = inputText.value.trim();
  if (inputValue !== '') {
    createListItem(inputValue);
    inputText.value = '';

    saveToLocalStorage();
  }
  else {
    boxError.style.visibility = 'visible';
    boxError.classList.add('shake');
    setTimeout(() => {
      boxError.classList.remove('shake');
      boxError.style.visibility = 'hidden';
    }, 600);
  }
}

function createListItem(text, isChecked = false) {
  const li = document.createElement('li');
  li.innerHTML = text;
  ulLists.appendChild(li);

  const span = document.createElement('span');
  span.innerHTML = `<i class='fas fa-times'></i>`;
  li.appendChild(span);

  if (isChecked) {
    li.classList.add('checked');
  }
}


addBtn.addEventListener('click', () => {
  createLists();
});

ulLists.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
    saveToLocalStorage();
  } else if (event.target.tagName === 'I') {
    const li = event.target.closest('li');
    li.remove();
    saveToLocalStorage();
  }
});

function saveToLocalStorage() {
  const items = [];
  const listItems = ulLists.children;

  for (const li of listItems) {
    const text = li.innerText;
    const isChecked = li.classList.contains('checked');
    items.push({ text, isChecked });
  }

  localStorage.setItem('items', JSON.stringify(items));
}
