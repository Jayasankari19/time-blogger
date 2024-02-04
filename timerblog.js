
const toggleButton = document.getElementById('dark-mode-toggle');
let intervalId
const start=document.getElementById('timer-control')
const timer=document.getElementById("seconds")
const mincount=document.getElementById("minutes")
const hourcount=document.getElementById('hour')
const taskInput = document.getElementById('task');
const descriptionInput = document.getElementById('desc');
const entTable = document.getElementById('entries');
let count=0;

const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});




let constant=0
let taskHistory=[];
function changetime()
{
    constant=constant+1
    timer.textContent=constant

    if(constant===60)
    {
    constant=0
    updateMinute()
    }
    timer.textContent=constant

    timer.textContent=constant.toString().padStart(2,"0")

}
let mins=0
function updateMinute() {
  mins=mins+1
  mincount.textContent=mins

  if(mins===60)
  {
    mins=0
    updateHours()
  }
  mincount.textContent=mins

  mincount.textContent=mins.toString().padStart(2,'0')
}

let ho=0
function updateHours()
{
    ho=ho+1
    hourcount.textContent=ho

    hourcount.textContent=ho.toString().padStart(2,'0')
}

start.addEventListener('click',function()
{
    if(start.textContent==='Start'){
        if (taskInput.value.trim() === '' || descriptionInput.value.trim() === '') {
            // Display an alert if the input fields are empty
            alert('Please fill in both Task and Description before starting the timer.');
        } else {
            changecolor();
            intervalId = setInterval(changetime, 100);
        }
        
    
    }
    else{
        stopTimer()
    }   
})

function changecolor()
{
    
    start.style.setProperty('background-color',"tomato")
    start.textContent='stop'
}

function stopTimer()
{
    clearInterval(intervalId) // dont give it in "" then it becomes string
    start.style.removeProperty('background-color','green')
    start.textContent='Start'
    
    addNewEntry()
    taskInput.value=''
    descriptionInput.value=''
     

    timer.textContent='00'
    mincount.textContent='00'
    hourcount.textContent='00'

}
function addNewEntry(){
    
    count++;
    const entryRow = document.createElement('div');
    entryRow.classList.add('entry'); 
    entryRow.innerHTML+=
    
    entryRow.innerHTML = `
    <div>${taskInput.value}</div>
    <div>${descriptionInput.value}</div>
    <div>${hourcount.textContent}:${mincount.textContent}:${timer.textContent}</div>
    
`;

entryRow.addEventListener('click', function () {
    // Strike out the specific elements within the clicked row
    entryRow.querySelectorAll('div').forEach(div => {
        div.style.textDecoration = 'line-through';
        div.style.textDecorationColor = 'red';
        div.style.textDecorationThickness = '2px';
    });
    
});

entryRow.addEventListener('dblclick', function () {
    count--;
    console.log(`${count} left Remaining`)
    entryRow.remove();
    updateRemainingCount();
});

    entTable.appendChild(entryRow);
    updateRemainingCount();
    
}

function updateRemainingCount() {
    const remainingCount = document.getElementById('remaining-count');
    const remaining =  count; // You can adjust the count as needed
    remainingCount.textContent = `${remaining} left remaining`;
}



