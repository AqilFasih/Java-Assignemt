// ye Lenght ka Used case hen

// var userName = prompt ('Add Your Name')

//   if (userName.length>3 && userName.length<12 ){ 
//    console.log ('Good')
//   }

//   else {
//     console.log ( "Wrong")
//   }


  //charAt 

  var qoute = 'Har Shaks apne maqsaad me kamiyab hona chahata hy'
   var count =0      

  for (var i = 0; i < qoute.lenght; i++){
    console.log(qoute.charAt(i))
    if (qoute.charAt(i) =='a'){
        count++
      }
  }
  console.log(count);

 