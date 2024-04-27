// document.write('<br>')

// document.write('<h4> Q5. Print number like this ,10,9,8,7,6,5,4,3,2,1<h4>')

// for(var i =1; i <= 10; i++) {

// }

// var prizeBond = [224,452,544,757,752,444,123,545,477,545,477,464,456]

// var userNmber = prompt ('your price bond number')

// for(var i=)


var prizebond = [123, 231, 321, 456, 465, 546,645, 787, 778 , ]

var userNumber= prompt('your prize bond number')
var userWin  = false 
for (var i = 0; i < prizebond.length; i++) {
    console.log(i)
    if (userNumber == prizebond[i]) {
        userWin = true 
        break;
    }
}

if (userWin == true){
    document.write('Mubarak hpo aap ka inaam nikla hy')
} else {
    document.write ('Sorry Try again')
}