var ulist = document.getElementById("list");
function addTodo() {
    var todo_item  = document.getElementById("todo-item");
    
    
    var li = document.createElement("li");
    var li_text = document.createTextNode(todo_item.value);
    li.appendChild(li_text);

    var del_btn = document.createElement("button");
    var del_text = document.createTextNode("DELETE");
    del_btn.setAttribute("class","btn");
    del_btn.setAttribute("onClick","deleteitem(this)");
    del_btn.append(del_text);
    // console.log(del_btn);
    li.appendChild(del_btn);

    var ed_btn = document.createElement("button");
    var ed_text = document.createTextNode("EDIT");
    ed_btn.setAttribute("class","btn");
    ed_btn.setAttribute("onClick","editItem(this)");
    ed_btn.append(ed_text);
    li.appendChild(ed_btn);

    
    
    ulist.appendChild(li);
    todo_item.value = "";
}

function deleteitem(e) {
    // console.log(e.parentNode);
    e.parentNode.remove();
}

function deleteAll() {
    ulist.innerHTML = "";
}

function editItem(e) {
    var todo_item  = prompt("Enter new value",e.parentNode.childNodes[0].nodeValue);
    e.parentNode.childNodes[0].nodeValue = todo_item;
}