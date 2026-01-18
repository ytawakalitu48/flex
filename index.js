//number 3
let number = 12;
if(number > 0) {
    console.log("the number is positive");
} else if (number < 0) {
    console.log("the number is negative");
} else {
    console.log("the number is zero");
}
//number5
if (10>5) {
    console.log ("yes");
} else{
    console.log("no")
}
//number7
function add(a,b){
    return a+b;
}add(5,6)
console.log(add(5,6))
//number8
const checkevenorodd = (num) => (num %2 === 0 ? "even":"odd");
console.log(checkevenorodd(4))

//number 10
const num = (a,b) =>(a+b);
    console.log(num(5,6))
let userage=23
        if (userage <  18) {
            console.log("you are a minor")
        } else if (userage <= 59) {
            console.log("you are  an adult")
        } else {
            console.log("you are a senior citzen")
        }

        let  no = 6
        if (no % 2 === 0){
            console.log("even")
        }else{
            console.log("odd")
        }

        let score = 100
        if(score => 100){
            console.log("A")
        } else if ( score => 89 ) {
            console.log("B")
        } else if ( score => 79 ) {
            console.log("C")
        }   else if ( score => 69 ) {
            console.log("D")
        }    else  {
            console.log("Fail")
        }

        let day = 3;

          switch (day) {
      case 1:
        console.log("monday");
        break;
      case 2:
        console.log("tuesday");
        break;
          case 3:
        console.log("wednesday");
        break;
          case 4:
        console.log("thursday");
        break;
          case 5:
        console.log("friday");
        break;
          case 6:
        console.log("saturday");
        break;
      default:
        console.log("sunday")
          } 

        let fruit = "Apple";

switch (fruit) {
  case "Apple":
    console.log("Apple is red");
    break;
  case "Banana":
    console.log("Banana is yellow");
    break;
  case "Orange":
    console.log("Orange is orange");
    break;
  default:
    console.log("Unknown fruit");
}
let num3 = 15;
console.log(num3 > 10 ? "big number" : "small number");
 let year = 100
console.log(
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    ? "Leap year"
    : "Not a leap year"
);

let balance = 6000;
let amount = 4000;
if (balance >= amount){
    console.log("withdrawal succesful")
} else {
    console.log("insufficient balance")
}
let light = "red";

switch (light) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Get ready");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid color");
}