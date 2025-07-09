let list = document.querySelector("#to-do-list");
let toDoData = {};

// Event Listeners
list.addEventListener("click", (e) => {
  let closestCheck = e.target.closest("input[type='checkbox']");
  if (closestCheck === null) {
    return;
  }

  let parent = closestCheck.parentElement;
  let checked = closestCheck.checked;
  if (checked) {
    parent.classList.add("completed");
  } else {
    parent.classList.remove("completed");
  }
});

list.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "Enter":
      addItem();
      break;
    case "Backspace":
    case "Delete":
      deleteItem(e.target.closest("li"));
      break;
  }
});

//TODO make this a factory function, supply a Node element in place of list
list.addEventListener("blur", (e) => {
  let closestCheck = e.target.closest("input[type='text']");
  if (closestCheck === null) {
    return;
  }
  document.cookie = "object=" + JSON.stringify(list);
  console.log("I WAS CALLED");
});

window.onload = () => {
  if (list === undefined) {
    return;
  }

  if (document.cookie !== undefined) {
    //list = JSON.parseJSON(document.cookie)
    // list = decodeURIComponent(document.cookie).split(';');
    // console.log(document.cookie);
    // console.log(list);
  }

  let template = list.querySelector("li");
  template.querySelector("input[type='text']").focus();
};

function addItem() {
  if (list === undefined) {
    return;
  }
  // var paragraph = document.createElement("p");
  let template = list.querySelector("li").cloneNode("true");
  for (let i of template.childNodes) {
    // console.log(i.nodeName);
    if (i.nodeName === "INPUT") {
      i.value = "";
      i.checked = false;
    }
  }
  template.classList.remove("completed");
  list.appendChild(template);
  // list.childNodes[list.childNodes.length - 2].focus();
  template.querySelector("input[type='text']").focus();
}

function deleteItem(itemToDelete) {
  let textInput = itemToDelete.querySelector("input[type='text']");

  if (list.querySelectorAll("li").length <= 1) {
    return;
  }

  if (textInput === undefined || textInput.value !== "") {
    return;
  }

  list.removeChild(itemToDelete);
  let listOfListItems = list.querySelectorAll("li");
  let previousListItem = listOfListItems[listOfListItems.length - 1];
  previousListItem.querySelector("input[type='text']").focus();
}
