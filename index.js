
// 1---------------
function calculateDifference (item1, item2){
    return  item1 - item2;
}


console.log(calculateDifference(50, 30));



// 2-----------------
function isOdd (number){
    return number % 2 !== 0;
}

console.log(isOdd(5));



// 3-----------------
function findMin(numbers){
    return Math.min(...numbers);
}

console.log(findMin([3,4,1,4,6,7,12,53,6,1,0,9]));



// 4-----------------
function filterEvenNumbers (number1){
    return number1.filter(num => num % 2 === 0);
}

console.log(filterEvenNumbers([34,243,342,3,6,3,7,9]));


// 5------------------
function sortArrayDesceding (number2){
    return [...number2].sort((a, b) => b -a);
}

console.log(sortArrayDesceding([12,42,12,23,64,67]));


// 6-----------------
function lowercaseFirstLetter (str){
    return str.charAt(0).toLowerCase() + str.slice(1);
}


console.log(lowercaseFirstLetter("Hi, I am Rifat"));


// 7-----------------
function findAverage(numbers){
    const sum = numbers.reduce((total, num) => total + num, 0);
    return sum / numbers.length;
}

console.log(findAverage([23, 34, 54, 65, 23, 1, 13, 78]));



// 8------------------
function isLeapYear(year){
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}


console.log(isLeapYear(2024));
