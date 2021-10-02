function renderTodo() {
    let inputTxt = document.querySelector('#txtbox').value;

    //3.ul id fetch and create li element and store input value in li to list
    let ul = document.getElementById('todo-ul');
    let li = document.createElement('li');
    li.setAttribute('class', "list-group-item");
    li.setAttribute('id', "todo-list");
    li.append(inputTxt);
    console.log(inputTxt);
    ul.appendChild(li);
    // console.log(li);
    console.log(ul);
}

//static create todoObj.
function addTodo(text) {
    let todoObj = {
        id: Date.now(),
        text,
        is_complete: false
    }
    console.log(todoObj);
}
addTodo();

li.setAttribute('class', "list-group-item");
li.setAttribute('id', "todo-list");
li.append(inputTxt);
console.log(todoObj);
ul.append(li);
console.log(ul);

