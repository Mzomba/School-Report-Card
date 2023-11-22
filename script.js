const subjectName = document.getElementById("subject");
const studentMark = document.getElementById("mark");
const reportCreatorElement = document.getElementById("report-creator");
const reportCreatorBtn = document.getElementById("report-creator-btn");
const reportElement = document.getElementById("report");
const saveBtn = document.getElementById("save-btn");

const reportCreator = (learnersName, learnersMark) => {
  let subDiv = document.createElement("div");
  subDiv.classList.add("sub-div");
  reportElement.append(subDiv);
  subDiv.innerHTML = `<p class="subject">${learnersName}</p> <p class="score">${learnersMark}</p>`;

  let editButton = document.createElement("button");
  editButton.classList.add("edit-btn");
  let editIcon = new Image();
  editIcon.src = "edit.png";
  editIcon.style.fontSize = "1.2em";
  editIcon.style.height = "20px";
  editIcon.style.width = "20px";
  editButton.append(editIcon);
  subDiv.append(editButton);
  editButton.addEventListener("click", () => {
    modification(editButton, true);
  });

  let deletebtn = document.createElement("button");
  deletebtn.classList.add("delete-btn");
  let deleteIcon = new Image();
  deleteIcon.src = "trash.jpg";
  deleteIcon.style.fontSize = "1.2em";
  deleteIcon.style.width = "40px";
  deleteIcon.style.height = "30px";
  deletebtn.append(deleteIcon);
  subDiv.append(deletebtn);

  deletebtn.addEventListener("click", () => {
    modification(deletebtn);
  });
};

const modification = (element, edit = false) => {
  let parentDiv = element.parentElement;
  let parentMark = parentDiv.querySelector(".score").innerText;
  if (edit) {
    let parentSubject = parentDiv.querySelector(".subject").innerText;
    subjectName.value = parentSubject;
    studentMark.value = parentMark;
    disableButton(true);
  }
  parentDiv.remove();
};

const disableButton = (bool) => {
  let editButtons = document.getElementsByClassName("edit-btn");
  Array.from(editButtons).forEach((element) => {
    element.disabled = bool;
  });
};

reportCreatorBtn.addEventListener("click", () => {
  if (studentMark.value === "" || subjectName.value === "") {
    alert("Fill in all spaces");
  } else {
    reportCreator(subjectName.value, studentMark.value);
  }
  reportElement.classList.remove("hide");
  studentMark.value = "";
  subjectName.value = "";
});

saveBtn.addEventListener("click", () => {
  reportCreatorElement.classList.add("hide");
  let editButtons = document.getElementsByClassName("edit-btn");
  Array.from(editButtons).forEach((element) => {
    element.classList.add("hide");
  });
  let deleteBtns = document.getElementsByClassName("delete-btn");
  Array.from(deleteBtns).forEach((element) => {
    element.classList.add("hide");
  });
  saveBtn.classList.add("hide");

  //
});
