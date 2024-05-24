//Dom And Function 

//A JavaScript function is a block of code designed to perform a particular task.
 //Function ko banana
 //function ko call karna 


//  function hello (){
//     alert ('Hello')
//  }
//  hello ()

//  function Name (msg){
//     alert (msg)
//  }
// Name ('Your First Name')
// Name ('Your Last Name')
// Name ('Your Father Name')
// Name ('Your Email Name')



var heading = document.getElementById('heading')
var para = document.getElementById('para')
heading.innerText = 'We are learning Dom'
heading.style.color="red" 
heading.style.backgroundColor="pink"
para.style.backgroundColor="lightgreen"
console.log(para)

function changecolor (color){
    heading.style.color = color
    para.style.color= color
}