let todoInput = document.getElementById("todoInput");

let addButton = document.getElementById("addButton");

let todoList = document.getElementById("todoList");

let priorityIn = document.getElementById("priorityIn");

addButton.addEventListener("click",addTodo)


let todoAry = [];

function compareTodo(a,b){

    if(a.priority < b.priority){
        return 1;
    }

    if (a.priority > b.priority){
        return -1;
    }

    return 0;
}


function renderTodo(){
    todoList.innerHTML = `
        <tr>
            <th>Todo</th>
            <th>優先度</th>
        </tr>        
    `;

    for(let i = 0; i < todoAry.length; i++){

        let todo = todoAry[i];
        
        let tr = document.createElement("tr")

        let td = document.createElement("td");

        td.textContent = todo.text;


        let td2 = document.createElement("td");
        td2.textContent = todo.priority;
        
        
        let td3 = document.createElement("td");
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "削除";

        deleteButton.addEventListener("click",function(){

            let result = window.confirm("本当に項目「" + todoAry[i].text + "」を削除したいですか？");
            if(result){
                todoAry.splice(i,1);
                renderTodo();
            }
        });

        td3.appendChild(deleteButton);

        tr.appendChild(td);
        tr.appendChild(td2);
        tr.appendChild(td3);

        todoList.appendChild(tr);
    }
}


function addTodo(){
    let text = todoInput.value;
    let tr = document.createElement("tr");
    let td = document.createElement("td");


    let priority = priorityIn.value;
    let td2 = document.createElement("td");
    

    
    todoAry.push({
        text: text,
        priority:Number(priority)
    });

    todoAry.sort(compareTodo);

    renderTodo();

    todoInput.value = "";
    priorityIn.value = "4";
}