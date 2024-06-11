// Constructure Function 

function Student(name,fatherName,rollNo, dob , attendence){
    console.log (this);
    this.name = name;
    this.fatherName = fatherName;
    this.rollNo = rollNo;
    this.dob = dob ;
    this.attendence = attendence;
    this.totalClasses = 50;
    this.calculateAge = function (){
        var studentDob = new Date (this.dob).getFullYear();
        var currentYear = new Date (this.currentYear).getFullYear();
        var age = currentYear - studentDob ; 
        return age ;}  
        this.inpunctual = function (){};
    }
    

var student1 = new Student('Ahmed','Ali','Wali','10-3-2000',30)
var student2 = new Student('Raza','Ali','coldrink','10-3-2001', 45)
var student3 = new Student('Faizan','Ali','Chashma', '10-3-2002', 43) 
var student4 = new Student('Daniyal','Ali','Qadri','10-3-2004' , 23)
var student5 = new Student('Zohaib','Ali','Khan','10-3-2005', 44)
var student6 = new Student('Mahad','Ali','Naseem', '10-3-2006', 35)

console.log (student3); 
