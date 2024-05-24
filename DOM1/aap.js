var btn = document.getElementById('addBtn')
var historyDiv = document.getElementById('historyDiv')

btn.addEventListener('click', function (){
    var now = new Date()
    var time = now.toLocaleDateString()
    console.log (historyDiv.innerHTML)
    historyDiv.innerHTML+=`<h5> User Click on ${time}</h5>`
})