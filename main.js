console.log('JSK');

function msg(message) {
    console.log(message);
}
//1.blank array create &txtbox value lai store on blank array
todo = [];

function addTodo(text) {
    return {
        id: Date.now(),
        text,
        is_complete: false
    }
}

function displayTodo(todoObj) {
    let ul = document.getElementById('todo-ul');
    let li = document.createElement('li');
    li.setAttribute('class', 'list-group-item')
    console.log(todoObj.text);
    li.innerHTML = `
    <div class="mb-3 form-check" id="div-${todoObj.id}">
    <input type="checkbox" id="checkbox-${todoObj.id}" class="form-check-input" onclick="checkTodo(${todoObj.id})" data-todo_id="${todoObj.id}">

    <label class="form-check-label" for="exampleCheck1"><h5 id="text-${todoObj.id}">${todoObj.text}</h5></label>

    <button id="delete-${todoObj.id}" onclick="deleteTodo(${todoObj.id})" class="btn btn-danger" data-todo_id="${todoObj.id}">X</button>
    </div>`;
    ul.appendChild(li);
    console.log(todo);
}

function checkTodo(checkID) {
    let checkbox = document.getElementById(`checkbox-${checkID}`);
    let txt = document.getElementById(`text-${checkID}`);
    console.log(checkbox);
    let find = todo.find((object) => object.id == checkID);
    console.log(find)

    txt.style = `${checkbox.checked ? 'text-decoration:line-through' : 'none'};`;
    // if (checkbox.checked === true) {
    //     txt.style = `text-decoration: line-through;`
    // }else{
    //     txt.style  = `none`;
    // }

}

function deleteTodo(deleteId){
    let deletebtn = document.getElementById(`div-${deleteId}`);
    console.log(deletebtn)
    deletebtn.remove(deleteId);
    todo = todo.filter((obj) => obj.id !== deleteId);
    console.log(todo);

}


//2.submit ni id lai ema click event add kri.
document.getElementById('submit-btn').addEventListener("click", function () {
    // alert('click');
    let inputTxt = document.querySelector('#txtbox').value;

    if (inputTxt === '') {
        console.log('Plz Enter Text');
    } else {
        // todo.push(inputTxt);
        let todoObj = addTodo(inputTxt);
        todo.push(todoObj);
        console.log(todoObj);
        console.log(todo);
        displayTodo(todoObj);
    }

});