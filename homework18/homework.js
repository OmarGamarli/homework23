// 1)
//что выведет в консоли функция call
const person = {
    name: 'Alex',
    age: 24,
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}
// Alex=24


// 2)
//получите доступ к методу call и запустите его
const person1 = {
    name: 'Alex',
    age: 24,
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
    
}
person1.call()
// 3)
//выведите в консоли все ключи из обьекта с помощью for
const person2= {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}
for(let key in person2){
    console.log(key)
}


// 4)
//выведите в консоли все значения из обьекта с помощью for
const person3 = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}
for (let i in person3) {
    console.log(person3[i]);
  }


// 5)
//преобразуйте обьект ниже в массив
const person4 = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}
const arr=Object.values(person4)

// 6)
//преобразуйте обьект ниже в строку
const person5 = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}
const string=JSON.stringify(person5)

// 7)
//преобразуйте обьект ниже в конструктор функции
function Person(name,age, isMarried,hasCar,hasJob,job, childs,awards){
    this.name=name
    this.age=age
    this.isMarried=isMarried
    this.hasCar=hasCar
    this.hasJob=hasJob
    this.job=job
    this.childs=childs
    this.awards=awards
}
const person6=new Person('Alex',24,false,false,true,'Programmer',['Hanz','Marry'],{itMaster: 'Legend rang',driver: 'Fast man'})
console.log(person6)


// 8)
//перечисли встроенные конструкторы javascript
new String()
new Number()
new Boolean()
new Object()
new Array( )
new RegExp()
new Function()
new Date()

// 9)
//создайте новый обьект используя конструктор ниже
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}
const person7=new Person('Omar',13,'Programmer')
