// Write Arrow Functions
//ES5

function getSum(a, b) {
  return a + b;
}

// ES6

const getSum = (a, b) => a + b;

//Use Template Literal
// ES5

var name = "Bilal";
console.log("My name is " + name);

// ES6

const name = "Bilal";
console.log(`My name is ${name}`);

//Use const & let
//They have block scope. Variables with const declaration can't be changed but with let, they are mutable
// ES5

var fruits = ["apple", "banana"];

// ES6

let fruits = ["apple", "banana"];
fruits.push("mango");

const workingHours = 8;

//Object Destructuring

var person = {
  name: "John",
  age: 40,
};

// ES5

var name = person.name;
var age = person.age;

// ES6

const { name, age } = person;

//Defining Objects

var name = "John";
var age = 40;
var designations = "Full Stack Developer";
var workingHours = 8;

// ES5

var person = {
  name: name,
  age: age,
  designation: designation,
  workingHours: workingHours,
};

// ES6

const person = { name, age, designation, workingHours };

//Don't Forget key Prop With map in JSX

const students = [{id: 1, name: 'Bilal'}, {id: 2, name: 'Haris'}];

// in return function of component
<ul>
  {students.map(({id, name}) => (
    <li key={id}>{name}</li>
  ))}
</ul>;

//Component Name Should be in PascalCase

const helloText = () => <div>Hello</div>; // wrong

const HelloText = () => <div>Hello</div>; // correct

//Variable & Function Names Should be in camelCase

const working_hours = 10; // bad approach

const workingHours = 10; // good approach

const get_sum = (a, b) => a + b; // bad approach

const getSum = (a, b) => a + b; // good approach

//ID & Class Names Should be in kebab-case

<!--bad approach-->
<div className="hello_word" id="hello_world">Hello World</div>

<!--good approach -->
<div className="hello-word" id="hello-world">Hello World</div>

//Always Check null & undefined for Objects & Arrays
//Neglecting null and undefined in the case of objects & arrays can lead to errors.

So, always check for them in your code
const person = {
  name: "Haris",
  city: "Lahore",
};
console.log("Age", person.age); // error
console.log("Age", person.age ? person.age : 20); // correct
console.log("Age", person.age ?? 20); //correct

const oddNumbers = undefined;
console.log(oddNumbers.length); // error
console.log(oddNumbers.length ? oddNumbers.length : "Array is undefined"); // correct
console.log(oddNumbers.length ?? "Array is undefined"); // correct

//Avoid Inline Styling
//Inline styling makes your JSX code messy. It is good to use classes & ids for styling in a separate .css file

const text = <div style={{ fontWeight: "bold" }}>Happy Learing!</div>; // bad approach

const text = <div className="learning-text">Happy Learing!</div>; // good approach
in .css file:
.learning-text {
  font-weight: bold;
}
//Avoid DOM Manipulation
//Try to use React state instead of DOM manipulation as

Bad approach
<div id="error-msg">Please enter a valid value</div>
document.getElementById("error-msg").visibility = visible;
Good approach
const [isValid, setIsValid] = useState(false);

<div hidden={isValid}>Please enter a valid value</div>;
Set isValid false or true where you have logic of validating a value

//Always Remove Every Event Listener in useEffect
//Don't forget to write cleanup function in useEffect to remove event listener you added before

const printHello = () => console.log("HELLO");
useEffect(() => {
  document.addEventListener("click", printHello);
  return () => document.removeEventListener("click", printHello);
});
//Avoid Repetition, Use Generic Components
//It is the best thing to make your code cleaner. Write a generic component for similar group of elements and render them on the basis of props

passed to it
const Input=(props)=>{
  const [inputValue, setInputValue]=useState('');
  return(
    <label>{props.thing}</label>
    <input type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
  )
}
In other component you can use Input component as
<div>
  <Input thing="First Name" />
  <Input thing="Second Name" />
</div>

//Use Ternary Operator Instead of if/else if Statements
//Using if/else if statements makes your code bulky. Instead try to use ternary operator where possible to make code simpler & cleaner

// Bad approach
if (name === "Ali") {
  return 1;
} else if (name === "Bilal") {
  return 2;
} else {
  return 3;
}

// Good approach
name === "Ali" ? 1 : name === "Bilal" ? 2 : 3;

//Make index.js File Name to Minimize Importing Complexity
//If you have a file named index.js in a directory named actions and you want to import action from it in your component, your import would be like this

import { actionName } from "src/redux/actions";
actions directory path is explained in the above import . Here you don't need to mention index.js after actions like this
import { actionName } from "src/redux/actions/index";

//Destructuring of Props
//If you want to get rid of writing an object name again and again to access its properties, then destructuring of that object is the best solution for you.
//Suppose your component is receiving some values like name, age and designation as props

// Bad approach
const Details = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.age}</p>
      <p>{props.designation}</p>
    </div>
  );
};

// Good approach
const Details = ({ name, age, designation }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{designation}</p>
    </div>
  );
};
//Don't Try to Access Modified State Variable in the Same Function
//In a function, if you are assigning a value to a state variable then you won't be able to access that assigned value even after it has been assigned in that function

const Message = () => {
  const [message, setMessage] = useState("Hello World");
  const changeMessage = (messageText) => {
    setMessage("Happy Learning");
    console.log(message); // It will print Hello World on console
  };

  return <div>{message}</div>;
};
Use === Operator instead of ==
While comparing two values, strictly checking both values and their data types is a good practice.
"2" == 2 ? true : false; // true
"2" === 2 ? true : false; // false