// // function add(a,b){
//     // Implementation 
//     let result = a+b;
//     return result;
// }

// var students =["Kishore"]
// var add1 =    (a,b)=> {
//     console.log(students)
//     let result = a+b;
//     return result;
// }

// function calculate(radius){
//     let result= (22/7)*radius*radius;
//     return result;
// }

// let r = calculate(7)
// console.log(r)
 
// const double = x =>{
//     return 2*x;
// };

// double(2);

function higher(fn,times){
    for(let i=1;i<=times;i++){
        fn(100)
    }
}
 
function createMultiplier(n) {
   console.log(n*n);
  }
  
higher(createMultiplier,10)


//   const num=[1,2,3,4,5]
//   const squares= num.map(num => num*num)
//   const s1 = num.filter(num=> num%2==0)
//   console.log(squares)

// const num=[1,2,3,4,5]
// const squares= num.reduce((acc,product)=>num*num);
// console.log(squares);


// const person = { name: "Alice", age: 30 }; 
// function introduce(city, country) { 
//  console.log(`I'm ${this.name}, ${this.age} years old, from
// ${city}, ${country}.`); 
// } 
// introduce.call(person,"nellore","ap")

// const person = { name: "Alice", age: 30 }; 
// function introduce(city, country) { 
//  console.log(`I'm ${this.name}, ${this.age} years old, from
// ${city}, ${country}.`); 
// } 
// introduce.apply(person,["nellore","ap"])
 
