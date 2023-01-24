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
    day of the week. The associated number value 
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

let totalAcres = null
let sum = 0

for(let i= 0; i < fujiAcres.length; i++){
   sum += fujiAcres[i]

   totalAcres = sum
}

for(let i= 0; i < galaAcres.length; i++){
    sum += galaAcres[i]
 
    totalAcres = sum
 }

 for(let i= 0; i < pinkAcres.length; i++){
    sum += pinkAcres[i]
 
    totalAcres = sum
 }
console.log(totalAcres)



// For problem 1 I created a variable called totalAcres equal to null and a variable 
// called sum and set it equal to 0. I then created a for loop that allowed me to 
// itterate through each index in the fujiAcres. With each loop I add the value of
//  the fujiAcres index into the sum variable. Once the 1st for loop is finished the
// 2nd and 3rd for loops do the same thing for the galaAcres and pinkAcres. Once
// all the for loops end I have the total number of all the acres put together in sum so 
// I set that value equal to the totalAcres variable. 



// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/


let averageDailyAcres = totalAcres/7;
console.log(averageDailyAcres)


// In problem 2, I  created a variable called averageDailyAcres and set that equal
// to totalAcres divided by 7 days to get the average number of acres picked per day.



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

while(acresLeft > 0){
    days += 1;
    acresLeft-= averageDailyAcres;
}
console.log(days)



// In problem 3, I created a while loop where acresLeft was greater than 0 and 
// had days equal itself plus 1 to find out how many days where needed to finish the 
// remainder acresLeft, while also setting the acresLeft equal to itself minus the 
// averageDailyAcres. Using += or -= helps with keeping the values of the variables the
// same after the loop until its added or subtacted by the number to the right of it.



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

let fujiTons = fujiAcres.slice(0,7)
let galaTons = galaAcres.slice(0,7)
let pinkTons = pinkAcres.slice(0,7)

for(i= 0; i < fujiTons.length; i++){
    fujiTons[i] *= 6.5;
}

for(i= 0; i < galaTons.length; i++){
    galaTons[i] *= 6.5;
}

for(i= 0; i < pinkTons.length; i++){
    pinkTons[i] *= 6.5;
}

console.log(fujiTons)
console.log(galaTons)
console.log(pinkTons)



// In problem 4, I used the slice method on each of the Acres variables setting them 
// equal to the corosponding Tons variable. With the slice method I knew that I wanted 
// to copy the whole arrays without changing the original, so I used 0 being the 1st 
// index and 7 being that it would include index 6 in the new array. Next I created 3
// for loops for the fujiTons, galaTons and pinkTons to do the same thing. Once the for
// loop iterates over an index, its multiplied by 6.5. 



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

let sumFujiTons= 0
let sumGalaTons= 0
let sumPinkTons= 0

let fujiPounds = null
let galaPounds = null
let pinkPounds = null

for(let i= 0; i < fujiTons.length; i++){
    sumFujiTons += fujiTons[i]
 
    fujiPounds = sumFujiTons * 2000
 } 
 
 for(let i= 0; i < galaTons.length; i++){
    sumGalaTons += galaTons[i]
 
    galaPounds = sumGalaTons * 2000
 } 

 for(let i= 0; i < pinkTons.length; i++){
    sumPinkTons += pinkTons[i]
 
    pinkPounds = sumPinkTons * 2000
 } 
 
 console.log(fujiPounds)
 console.log(galaPounds)
 console.log(pinkPounds)



// In problem 5, I created a for loop for each apple type, created a variable for the 
// sum of each apple type and also set the variable for the apple types pounds to null. 
// In the 1st for loop I made the sumFujiTons equal to itself plus each fujiTons index
// value, this gave me the total number of fuji apples in tons. After, I set the fujiPounds
// equal to the fujiTons times 2000 because 2000 pounds equals 1 ton, which gives me the
// total pounds for fuji apples. I repeated this process for both gala and pink apples
// as well.



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
let galaProfit = galaPounds * fujiPrice
let pinkProfit = pinkPounds * pinkPrice

console.log(fujiProfit)
console.log(galaProfit)
console.log(pinkProfit)



// In problem 6, I set fujiProfit set to fujiPounds times fujiPrice. This totals out to
// be how much profit would be made off of fuji apples. I repeated this for both gala and 
// pink apples. 




// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

let totalProfit = fujiProfit + galaProfit + pinkProfit

console.log(totalProfit)



// In problem 7, I just simply created a variable called totalProfit and set it equal to
// each of the apple prfoits all being added together.
