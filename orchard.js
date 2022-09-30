///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day off the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
let totalAcres = 0, totalFuji = 0, totalGala = 0, totalPink = 0

for (let i = 0; i < fujiAcres.length; i++) {
    totalFuji += fujiAcres[i];
}
//console.log(totalFuji)

for (let i = 0; i < galaAcres.length; i++) {
    totalGala += galaAcres[i];
}
//console.log(totalGala)

for (let i = 0; i < pinkAcres.length; i++) {
    totalPink += pinkAcres[i];
}
//console.log(totalPink)

totalAcres = totalFuji + totalGala + totalPink
console.log("The total number of harvested acres is " + totalAcres)


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
let averageDailyAcres = totalAcres / 7
console.log("The total average number of acres harvested per day is " + averageDailyAcres)

//I wasn't sure if you meant to calculate the average number of acres harvested each day or to just divide the total acres / 7 and get that version of the average so I went ahead and calculated what each day's average was and put it in the averageAcresPerDay array.

let averageAcresPerDay = []
let dailyAverage = 0

for (let i = 0; i < fujiAcres.length; i++) {
    dailyAverage = (fujiAcres[i] + galaAcres[i] + pinkAcres[i]) / 3
    averageAcresPerDay.push(dailyAverage)
}
console.log("This array shows each day's individual average number of acres picked across the three fields: " + averageAcresPerDay)


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE
while (acresLeft > 0) {
    acresLeft -= dailyAverage;
    days++
}
console.log("There are this many days of work left: " + days)


// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

//I just learned how to use the array.map function so I used it here to get the answer and it was a lot easier, but I understand how to loop the old arrays and push them into a new array.
let fujiTons = fujiAcres.map((e, i, a) => e * 6.5)
let galaTons = galaAcres.map((e, i, a) => e * 6.5)
let pinkTons = pinkAcres.map((e, i, a) => e * 6.5)

console.log("Fuji tons is " + fujiTons)
console.log("Gala tons is  " + galaTons)
console.log("Pink tons is  " + pinkTons)




// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

let fujiPounds = 0
let galaPounds = 0
let pinkPounds = 0

for (let i = 0; i < fujiTons.length; i++) {
    fujiPounds = fujiTons[i] * 2000;
}
for (let i = 0; i < galaTons.length; i++) {
    galaPounds = galaTons[i] * 2000;
}
for (let i = 0; i < pinkTons.length; i++) {
    pinkPounds = pinkTons[i] * 2000;
}

console.log("Fuji pounds is " + fujiPounds)
console.log("Gala pounds is " + galaPounds)
console.log("Pink pounds is " + pinkPounds)


// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

let fujiProfit = fujiPounds * fujiPrice
let galaProfit = galaPounds * galaPrice
let pinkProfit = pinkPounds * pinkPrice

console.log("Fuji profit is " + fujiProfit)
console.log("Gala profit is " + galaProfit)
console.log("Pink profit is " + pinkProfit)




// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
let totalProfit = fujiProfit + galaProfit + pinkProfit
console.log("Total profit is " + totalProfit)