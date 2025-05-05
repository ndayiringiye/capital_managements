console.log("hello world");


function greet(name) {
    return `Hello, ${name}!`;
  }
  console.log(greet("david"))

  const sayHello = function(num) {
    return num + 7
  };
  console.log(sayHello(4))

// arrow function
 const welcame = (name) => `welcame ${name}` ;
 console.log(welcame("diane"))
 const comment = (name = "danny") => `${name}`
 console.log(comment());

 function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  console.log(sum());

//   if conditions

const age = 60;

if(age >= 7){
    console.log("your application has reviewed")
}else{
    console.log("your application not viewed now")
}

if (age >= 18) {
    console.log("Adult");
  } else if (age >= 13) {
    console.log("Teenager");
  } else {
    console.log("Child");
  }
//   tenary operator

const status1 = age >= 45 ? "is aged" :" is not aged";
console.log(status1)