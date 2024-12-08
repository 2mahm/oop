// oop => object oriented programing
//parasigm => stayle of code 
//car =>pop         method  
// langauge => syntax
// 1960 => c++ java,python ,C#
// inheritance /polymorphism/abstraction/Encapsulation
// 1. Inheritance 
//object
// let person={
//     name:"john",
//     age:25,
//     address:"egypt",
//     isadmin:true
  
// }

// // console.log(person.address);
// // dot notation
// // braket notation
// console.log(person["age"]);
// nested object
// let person={
//     firstname:"john",
//     lastname:"doe",
//     age:25,
//     address:{
//         egypt:"cairo",
//         ksa:"maka",
//         usa:"los"

//     },
//     isadmin:true,
//     getFullname:function(){
//         return this.firstname+" "+person.lastname
//     }

  
// }


// console.log(person.address.ksa);
// console.log(person.firstname +" "+person.lastname);
// console.log(person.getFullname());


// console.log(this);

// let person = new Object();

// person.firstname="ahmed"
// person.lastname="mohamed"
// person.getFullname=function(){
//     return this.firstname+" "+this.lastname
// }
// console.log(person);
// let person={
//     firstname:"john",
//     lastname:"doe",
//     age:25,
//     address:{
//         egypt:"cairo",
//         ksa:"maka",
//         usa:"los"

//     },
//     isadmin:true,
//     getFullname:function(){
//         return this.firstname+" "+person.lastname
//     }

  
// }
// let person1=Object.create(person)
// console.log(person1.age);
// terrnry operator
// let isadmin=true
// if(isadmin){
//     console.log("admin")
// }
// if(isadmin){
//     console.log("admin");
// }else{
//     console.log("not admin");
// }

// isadmin?console.log("is admin"):console.log("not admin");

// isadmin && console.log("is admin")




// let oldobject={
//     hasaccount:true,
//     ShowMess:function(){
//         return `You ${this.hasaccount?" ":"do not"} have an account`
//     }

// }
// console.log(oldobject.ShowMess());

// let newobject=Object.create(oldobject)
// newobject.hasaccount=false

// console.log(newobject.ShowMess());

//constractor =============
// init object
//function constractor
// function Phone(barand,color,price){
//     this.barand=barand
//     this.color=color
//     this.price=price*2
// }
// let Phone2=new Phone("apple","red",1000)
// let Phone1=new Phone("samsung","black",2000)
// let Phone3=new Phone("samsung","black",4000)
// console.log(Phone1.price);
// console.log(Phone2.price);
// console.log(Phone3.price);
// console.log(Phone2);

// class templet  create object 

// let x=5
// x=10
// console.log(x);


// class Phone{
//     constructor(barand,color="red",price=1000){//
//         this.name=barand
//         this.color=color
//         this.price=price
//     }
//     Gitinfo(){
//         return `name:${this.name},color:${this.color},price:${this.price}`
//     }

// }
// let Phone1=new Phone("apple","blue")/// constractor overlooding
// console.log(Phone1.Gitinfo());

// let Phone2=new Phone("samsung","red",8000)/// constractor overlooding
// console.log(Phone1);

// class Car{
//     constructor(name,color,year,price){
//         this.name=name
//         this.color=color
//         this.year=year
//         this.price=price-1000
//     }
//     walk(){
//         console.log("the car is wake");
        
//     }
//     stope(){
//         console.log(`the ${this.name} is stoped`);
        
//     }
// }

// let obj1=new Car("bmw","red",2023,20000)
// let obj2=new Car("verna","red",2023,12000)
// console.log(obj1.price);
// console.log(obj2.price);




//inheritance
class Animal{
    constructor(name,type,abc){
        this.name=name
        this.type=type
        this.abc=abc
    }
    sound(){
        console.log('ginirec sound');
        
    }
    
}

// let obj1=new Animal("dog")
// console.log(obj1.name);

class Dog extends Animal{

constructor(name,type,age,year){
super(name,type)
this.age=age
this.year=year
}
sound(){
    console.log(`${this.name} dog`);
    
}
}
// let obj2=new Dog("dog","pop",1,2023)//
// console.log(obj2);

class cat extends Animal{
constructor(name,type,color,abc){
super(name,type,abc)
this.color=color
}
sound(){
    console.log(`${this.name} cat`);
}
}

let obj1=new Animal("don","pop","lkj")
console.log(obj1.sound());

let obj2=new Dog("ggerman","pop","lkj")
console.log(obj2.sound());
let obj3=new cat("small ","pop","lkj")
console.log(obj3.sound());

//



