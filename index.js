function addItem() {
  alert("test")
}

function completeTask(eventToComplete){
  let parent = eventToComplete.target.parentElement;
  let checked = eventToComplete.target.checked;
  if (checked){
    parent.classList.add("completed");
  }
  else{
    parent.classList.remove("completed");
  }
}