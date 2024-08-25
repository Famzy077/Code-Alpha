let addTask = document.getElementById('Add_Task');
let errors = document.getElementById('errors');
let ul = document.getElementById('ul')
addTask.addEventListener('click', (f)=>{
    let toDoList = document.getElementById('To_Do_List').value;
    if(toDoList.trim() == ''){
        errors.innerHTML = 'Please enter Task to continue'
        errors.style.display = 'block'
        return
    }
     else{
        let li = document.createElement('li')
        let x_span = document.createElement('span')
        let checkBox = document.createElement('input')
        checkBox.type = 'checkbox'
        x_span.addEventListener('click', ()=>{
            li.style.display = 'none'
           
        })
        console.log(ul)
        x_span.innerHTML = 'x';
        li.innerHTML = toDoList;
        li.appendChild(checkBox)
        li.appendChild(x_span)
        ul.appendChild(li)
        errors.style.display = 'none';
        document.getElementById('To_Do_List').value = '';
    }

})