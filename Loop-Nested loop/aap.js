// for (i=0 ;i <= 10 ; i ++) {
//     console.log("i",i);
//     for (var j=0; j < 3; j++) {
//         console.log ("j",j);
//     }
// }

 
var pass = ['Bilal', 'Raza' , 'Attari', 'Qadri', 'Ahmed']
var fail = ['Khuram', 'khalid' , 'Ahmed', 'Ali' , 'Bilal']

var duplicates = []
for (var i=0 ; i < pass.lenght; i++){
   console.log( 'i=>', pass [i])
for (var j=0; j < fail.lenght; j++){
   console.log( 'j=>' , fail [j])
   if (pass[i] === fail[j]) {
    duplicates.push(passs[i])
   }
} 
  
}