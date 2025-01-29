// Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

// Note to Tax: not the invested principal is taxed, but only the year's accrued interest

// Example:

//   Let P be the Principal = 1000.00      
//   Let I be the Interest Rate = 0.05      
//   Let T be the Tax Rate = 0.18      
//   Let D be the Desired Sum = 1100.00


// After 1st Year -->
//   P = 1041.00
// After 2nd Year -->
//   P = 1083.86
// After 3rd Year -->
//   P = 1128.30

// Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.

// Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

// Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.
/*
P: Create a funciton that takes in all 4 of principle, interest, tax, and desired. The princeiple is how much Mr. Scrooge wants to invest. Interest is a decimal, as is tax. Tax is only applied to what is made on that year. see example
R: returns the number of years until desired amount is achieved
E: start with $1000. 0.05 interest means it goes to 1050. then taxed .18 but not the whole thing, only on the amount made. Scrooge made $50 that year so tax .18 of 50 which is 9. Amount after year 1 is 1041.
P: create a funciton with 4 arguments, P, I, T, D.
*/

function calculateYears(principal, interest, tax, desired){
    let years = 1
    let interestForYear = (principal * interest) //50
    let taxForYear = (interestForYear * tax) //9
    let total = (interestForYear - taxForYear) + principal
    if(desired == principal)
        return 0
    while(total < desired){
        interestForYear = total * interest //52.05
        taxForYear = (interestForYear * tax) //9.369
        total = (interestForYear - taxForYear) + total
        years++
    }
    return years
}

console.log(calculateYears(1000.00, 0.05, 0.18, 1100.00))
