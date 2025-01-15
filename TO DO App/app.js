let task = [];

const addtask = ()=> {
    const taskinput = document.getElementById('taskinput')
    const text = taskinput.ariaValueMax.trim();

    if(text){
        task.push({ text: text, completed: false });

        updatetasklist();
    }
    
};

const updatetasklist = ()=> {
    const tasklist = document.getElementById('task-list')
    tasklist.innerHTML = "";

    task.forEach((task, index) => {
        const listitem = document.createElement('li')

        listitem.innerHTML = `
        <div class="taskitem">
        <div class="task ${task.completed ? 'completed':''}">
            <input type="checkbox" class="checkbox" ${
                task.completed ? "checked" : ""
            }/>
            <p>Finish this project</p>
        </div>
        <div class="icons">
            <img src="" onclick="edittask(${index})" />
            <img src="" onclick="deletetask(${index})" />
        </div>
    </div>
    `;
    listitem.addEventListener('change', () => toggletaskcomplete())
 tasklist.append(listitem);
})
}

document.getElementById('newtask').addEventListener('click', function(e){
    e.preventDefault();

    addtask();
})
