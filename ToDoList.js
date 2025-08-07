let input = document.getElementById('input');
let add = document.querySelector('button');
let tasks = document.querySelector('ol');
let div = document.querySelector('#div')
let date = document.querySelectorAll('.div')

let d = new Date().toDateString();

date.forEach(task => {
  task.innerHTML = d;
});

add.addEventListener('click',()=>{
     let task
    let li = document.createElement('li');

    let checkbox = document.createElement('input');
    checkbox.type='checkbox';

    li.appendChild(checkbox);

    if(!input.value.trim()){
        alert("Please enter the valid tasks to be added!");
        return;
    }
    else{
       task = document.createElement('span');
       task.innerHTML = input.value;
        li.appendChild(task);
        input.value=''
    }

    let Remove= document.createElement('button');
    Remove.innerHTML='Remove';

    Remove.className = 'bg-black text-white rounded-md p-1 flex items-center   '

    Remove.addEventListener('click',()=>{
        li.remove()
    })
 
    li.appendChild(Remove);
    li.className =  'flex w-80 justify-between m-4 '


    checkbox.addEventListener('change',()=>{
        if(checkbox.checked){
            task.className = 'line-through';
           
        }
        else{
            task.className = 'none';
        }
    })

    tasks.appendChild(li);
})
