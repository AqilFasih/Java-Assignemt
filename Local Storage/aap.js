// console.log (localStorage)

// //set item
// //2 parameter ,1st men key jaati our dusre main value
// // value hamaisha string me hogi

// localStorage.setItem('email' , 'bilal@gmail.com')
// localStorage.setItem('password', '123456')


// //get item

// var email = localStorage.getItem('email')
// console.log (email)

// //remove item 
// localStorage.removeItem('password')

// //update an item

// // localStorage.setItem('email' , '')

var login_container =document.getElementById('login_container')
var home_container =document.getElementById('home_container')
var user_email =document.getElementById('user_email')
var password =document.getElementById('password')
var email = document.getElementById('email');



function checkIsUserLogin(){
    var email = localStorage.getItem('email')

    if (email){
        login_container.style.display = 'none'
        home_container.style.display = 'block'
        user_email.innerText = email
    } else{
        login_container.style.display = 'block'
        home_container.style.display = 'none'
    }
}

checkIsUserLogin()

function loginUser (){
    if (!email.value || !password.value) return alert ('please add info')
        localStorage.setItem ('email' ,  email.value)
        localStorage.setItem ('password' , password.value)
    checkIsUserLogin()
    email.value = '';
    password.value = '';
}
function logout (){
    localStorage.removeItem('email')
    checkIsUserLogin()
}

