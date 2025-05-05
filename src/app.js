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