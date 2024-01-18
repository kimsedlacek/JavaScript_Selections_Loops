console.log("Hello World!\n==========\n");

// Exercise 1 Section

console.log("EXERCISE 1:\n==========\n");
for(let i = 1; i <= 100; i++) {
    if(i % 2 != 0){

        console.log(i)
    }else continue;
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(let i = 1; i <= 100; i++) {
    if(i % 3 == 0 && i % 5 == 0){
    console.log(`${i}:FIZZBUZZ`);
    }else if(i % 3 == 0){
        console.log(`${i}:FIZZ`)
    }else if(i % 5 == 0){
        console.log(`${i}:BUZZ`)
    }else continue;
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\nwhile and do while loop");
let i = 1;

while(i <= 100){
    if (i % 2 != 0){
    console.log(i);
    }
    i++;
}

console.log("__________________");
let x = 1;

do{  
    if (x % 2 != 0){
    console.log(x);
    }   
    x++;
    }while (x <= 100);
    

    console.log("__________________");
let fb = 1;

while(fb <= 100){
    if (fb % 3 == 0 && fb % 5 == 0){
    console.log(`${fb}:FIZZBUZZ`);
    }else if (fb % 3 == 0){
        console.log(`${fb}:FIZZ`);
    }else if (fb % 5 == 0){
        console.log(`${fb}:BUZZ`);
    }
    fb++;
}

console.log("__________________");
let FB = 1;

do{
    if (FB % 3 == 0 && FB % 5 == 0){
        console.log(`${FB}:FIZZBUZZ`);
    }else if (FB % 3 == 0){
        console.log(`${FB}:FIZZ`);
    }else if (FB % 5 == 0){
        console.log(`${FB}:BUZZ`);
        }    FB++;
    }while (FB <= 100);

console.log("__________________");
console.log("EXERCISE 4:\n==========\n");

//Exercise 4 Section
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for(let n = 100; n <= 500; n++){
    if (n == value){
        console.log(`Found value!`);
        break;
    }else if(n != value){
        console.log(`Did not find value`);
    }
}
        
console.log("__________________");
console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000

for(i = start; i<= end; i++){
    if (i % 3 == 0){
        console.log(`${i}:FIZZ`);
    }else if (i % 5 == 0){
        console.log(`${i}:BUZZ`);
    }else break;
}

//fizzDivisor and buzzDivisor as the dependent values ?