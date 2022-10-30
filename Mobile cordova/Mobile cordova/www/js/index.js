function addTask(){

    let listitem = document.createElement("li");
    listitem.appendChild(document.createTextNode(task.value));
    taskList.appendChild(listitem);

    $(listitem).on('swiperight', function(){
        if (listitem.className.indexOf('task-done') == -1){
            listitem.classList.add("task-done");
        }else{
            listitem.className = listitem.className.replace('task-done', '');
        }
    })
    $(listitem).on('swipeleft', function(){
        let deleteDirectly = true;

        if (listitem.className.indexOf('task-done') == -1){
            deleteDirectly = confirm("Tache non terminée. Supprimer??")
        }
        if (deleteDirectly){
            $(listitem).hide('slow', function(){
                listitem.remove();
            });
        }
        
    })
    task.value = '';
    task.focus();
    $(taskList).listview('refresh');
}

function reinitialiser(){
    let listTask = document.getElementById('taskList')

    listTask.innerHTML = ''
}