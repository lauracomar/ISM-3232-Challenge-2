// Task 1: Calculate tip
let bill = 100; //Example value
let tip = (bill>=50 && bill<=300)?(bill*0.15):(bill*0.2); // Ternary operator to calculate tip based on bill

//Task 2: Output Details
console.log ('The bill was $${bill}, the tip was $${tip}, and the total value is $${bill+tip}');
//Display message to show bill amount, the tip amount, and the total amount

// Task 3: Create a Function
function calculatetip(bill) {
    return (bill>=50 && bill<=300)?(bill*0.15):(bill*0.2);
}

//Test
let billtest = 100;
let tiptest = calculatetip(billtest);
console.log ('The bill was $${billtest}, the tip was $${tiptest}, and the total value is $${billtest+tiptest}');
