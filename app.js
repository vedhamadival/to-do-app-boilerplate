let button=document.getElementById("button")
let input = document.getElementById("input")
let todolist=document.getElementById("todolist")
let arr = []

//add button functionality

button.onclick=function(){
    arr.push(input.value)
    input.value= ""
    console.log(arr)
    appendlist()
}

//to append the data from array to the list displayed

function appendlist(){
    todolist.innerHTML=""
    for(let i=0;i<arr.length;i++){

        // let new_list = document.createElement("li")
        // new_list.innerText = arr[i]
        // todolist.append(new_list)

        todolist.innerHTML+= `<li> ${arr[i]} <a onclick=editList(${i})>Edit</a><a onclick=deleteitem(${i})>x| </a></li>`
    }
}

function editList(index){
    let text= prompt("Enter new value")
    if(text!== null && text!==""){
    arr[index] = text
    appendlist()
    }
}

function deleteitem(index){
    arr.splice(index,1)
    appendlist()
}


