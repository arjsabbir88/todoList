const inputField = document.getElementById("input-field");
const toDoBtn = document.getElementById("toDoBtn");
const addedTask = document.getElementById("addedTask");
toDoBtn.addEventListener("click", function(){
    const createElement = document.createElement("h2");
    createElement.textContent = inputField.value;
    createElement.classList = "border-b-2 border-slate-800 p-2 text-xl"
    addedTask.appendChild(createElement);
    inputField.value = "";
})