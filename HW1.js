//task 1

let power = function(num, pow) {
    if (pow === 0) return 1;
    else {
      return pow > 0 ? num * power(num, pow - 1) : power(num, pow + 1) / num;
    }
 };
 console.log(power(8, 2));
 console.log(power(12, -2));
 console.log(power(12, 0));



 //task 2 with apply()

let numArray = [10, 2, 33, 4, 5];

 function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
 }

 function getMinOfArray(numArray){
    return Math.min.apply(null, numArray)
 }

 console.log(getMaxOfArray(numArray))
 console.log(getMinOfArray(numArray))

//task 2 with spread operator
let arr = [12, 24, 13];
let max = Math.max(...arr);
let min = Math.min(...arr);

console.log(max)
console.log(min)

//task 3

let carFirst = { 
    registrationNumber: "KA12345",
    brand: "Toyota",
    color: "red",
}
let carSecond = { 
    registrationNumber: "BA12545",
    brand: "Infinity",
    color: "grey",
}
let carThird = { 
    registrationNumber: "DA12345",
    brand: "Honda",
    color: "black",
}

function displayDetails(ownerName) {
    console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand + " " + this.color );
}
displayDetails.call(carFirst, "Andrew"); 
displayDetails.call(carSecond, "Marta"); 
displayDetails.call(carThird, "Oleg"); 



//task 4

function greet (person) {
    if (person.name === 'amy') {
      return 'hey amy'
    }
    return 'hey arnold'
  }

  console.log(greet({ name: 'amy' }))




// task 5
for (let i = 0; i < 4; i++) {
  setTimeout(() =>{ console.log(i); }, 4)
}
//or :
for (let i = 0; i < 4; i++) {
    (function (i) {
      setTimeout(() => console.log(i), 0)
    })(i)
  }

