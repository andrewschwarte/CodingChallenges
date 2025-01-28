// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).
/*

P: # of days. the two cases are 7 or more days and 3 or more days
R: returns total amount
E: 2 days = $80 --> 40x2
   3 days = $100 --> 40x3 = 120 - 20(discount) = 100
   7 days = $230 --> 40x7 = 280 - 50(discount) = 230
 P: create a function that takes in a number of days. Do some comparisons for the sweet deal. return the amount
*/

function rentalCarCost(d){
    let total = d * 40;
    if(d>=3 && d<7)
        total -= 20
    else if(d>=7)
        total -=50
    
    return total
}

console.log(rentalCarCost(3))
