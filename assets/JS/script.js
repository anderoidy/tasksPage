//credit to reproduct this project available in 
//https://ichi.pro/pt/fazendo-uma-lista-de-tarefas-com-html-css-e-javascript-23399950151862

const todoObjectList = [];

class Todo_Class {
  constructor(item) {
    this.ulElement = item;
  }

  add() {
    const todoInput = document.querySelector("#myInput").value;
    if (todoInput == "") {
      alert("You did not enter any item!");
    } else {
      const todoObject = {
        id: todoObjectList.length,
        todoText: todoInput,
        isDone: false,
      }

      todoObjectList.unshift(todoObject);
      this.display();
      document.querySelector("#myInput").value = '';

    }
  }

  done_undone(x) {
    const selectedTodoIndex = todoObjectList.findIndex((item) => item.id == x);
    console.log(todoObjectList[selectedTodoIndex].isDone);
    todoObjectList[selectedTodoIndex].isDone == false ? todoObjectList[
selectedTodoIndex].isDone = true : todoObjectList[selectedTodoIndex].isDone = false;
    this.display();
  }

  deleteElement(z) {
    const selectedDelIndex = todoObjectList.findIndex((item) => item.id == z);

    todoObjectList.splice(selectedDelIndex,1);

    this.display();
  }


  display() {
    this.ulElement.innerHTML = "";

    todoObjectList.forEach((object_item) => {

      const liElement = document.createElement("li");
      const delBtn = document.createElement("i");

      liElement.innerText = object_item.todoText;
      liElement.setAttribute("data-id", object_item.id);

      delBtn.setAttribute("data-id", object_item.id);
      delBtn.classList.add("far", "fa-trash-alt");

      liElement.appendChild(delBtn);

      delBtn.addEventListener("click", function (e) {
        const deletedId = e.target.getAttribute("data-id");
        myTodoList.deleteEment(deletedId);
      })

      liElement.addEventListener("click", function (e) {
        const selectedId = e.target.getAttribute("data-id");
        myTodoList.done_undone(selectedId);
      })

      if (object_item.isDone) {
        liElement.classList.add("checked");
      }

      this.ulElement.appendChild(liElement);
    })
  }
}

////----MAIN PROGRAM-------
const listSection = document.querySelector("#myList");

const myTodoList = new Todo_Class(listSection);

//iniciamos o script adicionando um evento de clique ao botão Adicionar.
document.querySelector(".addBtn").addEventListener("click", function () {
  myTodoList.add()
})
