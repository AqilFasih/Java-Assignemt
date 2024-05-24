var Btn = document.getElementById('addBtn')
var hsitoryDiv = document.getElementById('historyDiv')
var todo = document.getElementById('todo')

Btn.addEventListener('click', function(){
    if (todo.ariaValueMax.trim()=== '')return alert
    ('Please Add Todo')
})

var now = new Date()
var time = now.toLocaleDateString()

var li =`<li>${tp()}`