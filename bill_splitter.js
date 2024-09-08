// Task 1: Calculate the Tip
let bill = 275
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20

// Task 2: Output details
console.log(`The bill was $${bill}, the tip was $${tip}, and the total value is $${bill + tip}`)

// Task 3: Create a function 
function calculateTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20
}
console.log(calculateTip(100))

// Task 4 & 5: Utilize Arrays and Test Data
   // Data Set 1
const bills1 = [275, 40, 430]
const tips1 = bills1.map(bill => calculateTip(bill))
const totals1 = bills1.map((bill, index) => bill + tips1[index])

console.log(bills1, tips1, totals1)

   // Data Set 2
const bills2 = [125, 555, 44]
const tips2 = bills2.map(bill => calculateTip(bill))
const totals2 = bills2.map((bill, index) => bill + tips2[index])

console.log(bills2, tips2, totals2)

