//USING PROCESS.ARGV TO RETRIEVE RESPONSE FROM TERMINAL
//USING SLICE TO RECIECE PART FROM THE ARRAY GIVEN FROM THE TERMINAL

function calcVat(price){
    //const price = process.argv.slice(2)[0]; --> is the cleaner choice
 console.log(price * 1.17);
}


//use process.argv
//const givenPrice = 10;
//calcVat(givenPrice);

const givenPrice = process.argv.slice(2)[0]; // [''] | IF YOU DONT ADD [0] IT WILL TAKE THE ARRAY ITEM AND NOT WHAT IT IS
console.log('given price = ', givenPrice);
calcVat(givenPrice);
