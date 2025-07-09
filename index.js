let list = document.querySelector("#to-do-list");

// Event Listeners
list.addEventListener("click", (e) => {
  let closestCheck = e.target.closest("input[type='checkbox']");
  if (closestCheck === null){
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

window.onload = () => {
  if (list === undefined) {
    return;
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

function checkKeyPress(keyPressEvent) {
  if (keyPressEvent.key === "Enter") {
    addItem();
  }
  if (keyPressEvent.key === "Delete" || keyPressEvent.key === "Backspace") {
    deleteItem(keyPressEvent);
  }
  
}

// function toggleCompleteTask(eventToToggle) {
//   let parent = eventToToggle.target.parentElement;
//   let checked = eventToToggle.target.checked;
//   if (checked) {
//     parent.classlist.add("completed");
//   } else {
//     parent.classlist.remove("completed");
//   }
// }

function deleteItem(itemToDelete) {
  // let list = document.querySelector("#to-do-list");
  
  // let individuallistItem = textInput.parentElement;
  
  // if (individuallistItem === undefined){
    //   return;
    // }
    
    // if (list === undefined) {
      //   return;
      // }

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

  // // var paragraph = document.createElement("p");
  // let template = list.querySelector("li").cloneNode("true");
  // for (let i of template.childNodes){
  //   // console.log(i.nodeName);
  //   if (i.nodeName === "INPUT"){
  //     i.value = "";
  //     i.checked = false;
  //   }
  // }
  // template.classlist.remove("completed")
  // list.appendChild(template);
}
