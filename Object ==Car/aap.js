

var car = {
    company : "BMW" ,//string
    color : "silver" , //string
    Price : "30000",  //number
    isNew : false ,  //boolean
    getDiscountedValue: function(disc){
        console.log ("This==>", this)
        var discount = this .price * disc /100
        console.log ("Discount==>", discount)
        var discountedPrice = this.price - discount
        return discountedPrice
    }


} 

//add object property
car.type = 'Electric Car'

//edit object property 
car.color = 'red'
//console.log ("car==> car")
//remove car property
delete car.isNew
//console.log ("After Delete==>" car)
//call a method

console.log (car .getDiscountedValue(50))