const inputField = document.getElementById("input-field");
const toDoBtn = document.getElementById("toDoBtn");
const addedTask = document.getElementById("addedTask");
toDoBtn.addEventListener("click", function(){

    if(inputField.value == ""){
        alert("please write something");
    }else{
        const createElement = document.createElement("h2");
        createElement.textContent = inputField.value;
        addedTask.appendChild(createElement);
        const i = document.createElement("i");
        i.classList = "fa-solid fa-xmark cursor-pointer text-red-500";
        createElement.appendChild(i);
        createElement.classList = "border-b-2 border-slate-800 p-2 text-xl"
        inputField.value = "";
        

        i.addEventListener("click", function(){
            addedTask.removeChild(createElement);
        })
    }

})