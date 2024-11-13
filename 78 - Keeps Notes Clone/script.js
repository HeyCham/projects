
const addButton = document.querySelector("#add");
const searchInput = document.getElementById("search-bar");

const updateLSData = () => {
  const notes = [];
  const noteElements = document.querySelectorAll(".note");

  noteElements.forEach((noteElement) => {
    const title = noteElement.querySelector('.title').value;
    const textAreaValue = noteElement.querySelector('textarea').value;

    notes.push({ title, text: textAreaValue });
  });

  localStorage.setItem("notes", JSON.stringify(notes));
};

const addNewNote = (text = "", title = "") => {
  const note = document.createElement("div");
  note.classList.add("note");

  const htmlData = `
    <div class="operation">
        <button class="edit"> <i class="fas fa-edit"></i> </button>
        <button class="delete"> <i class="fas fa-trash-alt"></i> </button>
    </div>
    <input class="title" type="text" placeholder="Title" value="${title}" ${title !== "" ? "readonly" : ""}>
    <div class="main ${text ? "" : "hidden"} ">${text}</div>
    <textarea class="${text ? "hidden" : ""}" placeholder="Write your notes here..">${text}</textarea>`;

  note.insertAdjacentHTML("afterbegin", htmlData);

  const editButton = note.querySelector(".edit");
  const delButton = note.querySelector(".delete");
  const titleInput = note.querySelector(".title");
  const mainDiv = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  delButton.addEventListener("click", () => {
    note.remove();
    updateLSData();
  });

  editButton.addEventListener("click", () => {
    mainDiv.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
    textArea.focus();
    if (titleInput.hasAttribute("readonly")) {
      titleInput.removeAttribute("readonly");
    } else {
      titleInput.setAttribute("readonly", "true");
    }
  });

  textArea.addEventListener("input", (event) => {
    const value = event.target.value;
    mainDiv.innerHTML = value;
    updateLSData();
  });

  titleInput.addEventListener("input", () => {
    updateLSData();
  });

  document.body.appendChild(note);
};

const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
  notes.forEach((note) => addNewNote(note.text, note.title));
}

addButton.addEventListener("click", () => addNewNote());

searchInput.addEventListener("input", (event) => {
  const searchValue = event.target.value.toUpperCase();
  const noteElements = document.querySelectorAll(".note");

  noteElements.forEach((noteElement) => {
    const title = noteElement.querySelector('.title').value.toUpperCase();
    const mainDiv = noteElement.querySelector('.main');

    if (title.includes(searchValue)) {
      noteElement.style.display = "block";
    } else {
      noteElement.style.display = "none";
    }
  });
});

