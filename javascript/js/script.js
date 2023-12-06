function Person(name,age,mobile){
    this.name = name;
    this.age = age;
    this.mobile = mobile;

    this.setName = function(name){
        this.name = name;
    }

    this.getName = function(){
        return this.name;
    }
}

p1 = new Person("Lion",23,"1234697010")
p2 = new Person("Tiger",25,"4568791230")

console.log(p1)
console.log(p2)

function Car(name, model){
    this.name = name;
    this.model = model;

    this.setInfo = function(name){
        this.name = name;
        this.model = model;
    }

    this.getInfo = function(){
        return this.name;
    }
}

c1 = new Car("Lambo","Gallardo");
c2 = new Car("Maruti","Alto");

console.log(c1)
console.log(c2)

// let person={
//     name:"Umesh",
//     age:45,
//     mobile:"564568435",
    
//     getName:function(){
//         return this.name;
//     },

//     setName:function(name){
//         this.name = name;
//     },

//     getMobile:function(){
//         return this.mobile;
//     },

//     setMobile:function(mobile){
//         this.mobile = mobile
//     }

// }

// console.log(person.age)
