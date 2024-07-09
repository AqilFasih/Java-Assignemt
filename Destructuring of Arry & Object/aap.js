// let batch_11 = {
//     student : 50,
//     startDate : "01-01-2024",
//     endDate: "31-11-2024",
//     isClassesContinoue : "true",

// };
//  let startDate = batch_11.startDate;
//  let endDate = batch_11.endDate;

// console.log ( "startDate=> ", startDate);
// console.log( "endDate=>", endDate);



//Spread operator
//...   

// let batch_11 = { 
//     student : 50,
//     startDate : "01-01-2024",
//     endDate: "31-11-2024",
//     isClassesContinue : true,
//     currentTopic  : "esc"
// };

// let batch11MWF  = {
//     ...batch_11,
//     currentTopic:"FireBase",
// };

// console.log(batch_11)
// console.log(batch11MWF);


// let num = [1, 2, 3, 4, 5, 6];
// let num1 = [7, 8, 9, 10,];


// var combinedArr = [...num , ...num1]

// console.log (combinedArr)


//Default parameter & Rest Parameters

// function sum (a= 0 , b= 0){
// console.log("a=>", a);
// console.log("b=>", b);
// return a+b; 
// }

// console.log (sum(20 + 20));


// let batch_11 = { 
//          student : 50,
//          startDate : "01-01-2024",
//          endDate: "31-11-2024",
//          isClassesContinue : true,
//          currentTopic  : "esc",
//          noOfQuiz : 12,
// };

// let { noOfQuiz = 3 , student, ...rest }  = batch_11;
// console.log(rest); 


let arry = [ 
    {task : "ABC", status: "done" },
    {task : "ABC", status: "pending" },
    {task : "ABC", status: "rejected" },
]

function getColor (status){
    if (status == "done"){
        return 
    }
}



