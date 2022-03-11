let a = 10;
let b = 6;

//basic operators
console.log(a + b);
console.log(a * b);
console.log(a - b);
console.log(a / b);
console.log(a % b);

//urinary operator
console.log(a++);
console.log(a);
console.log(++a);

console.log(a--);
console.log(a);
console.log(--a);

// comparison
let c = "10";
console.log(a < b);
console.log(a > b);
console.log(a == b);
console.log(a == c);
console.log(a === c);

//Control flow
let score = 86;

if (score >= 80){
    console.log("You had A");
}
else if (score >= 75){
    console.log("You had B+");
}
else if (score >= 70){
    console.log("You had B");
}
else if(score >= 65){
    console.log("You had C+");
}
else if (score >= 60){
    console.log("You had C");
}
else if (score >= 55){
    console.log("You had D+");
}
else if(score >= 50){
    console.log("You had D");
}
else {
    console.log("You had E");
}


const gender = "Male";

switch (gender){
    case "Male" :
        console.log("Go to the Male Ward");
        break;

    case "Female" :
        console.log("Go to the Female Ward");
        break;
    
    default:
        console.log("You are probably staff");
        break;    
}


for(let count = 1; count < 10; count++){
    console.log(count);
}
for(let count = 1; count < 10; ++count){
    console.log(count);
}

let count = 10;
while (count < 100) {
    console.log(count);
    count++;
}
