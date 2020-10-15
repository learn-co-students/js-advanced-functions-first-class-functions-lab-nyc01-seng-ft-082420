// Code your solution in this file!


let arrayDrivers = ['Sally', 'Bob', 'Freddy', 'Claudia']


// const returnFirstTwoDrivers = function firstTwoDrivers()  {
    
//     const drivers = function(array) {
//         return array.slice(0, 2)

//     }
//     return drivers
// }

// const returnLastTwoDrivers = function lastTwoDrivers() {
//     const drivers = function(array) {
//         return array.slice(2)
//     }
//     return drivers
// }



const returnFirstTwoDrivers = function(array) {
    return array.slice(0, 2)
}


const returnLastTwoDrivers = function(array) {
    return array.slice(2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiple) {
    return function(integer) {
        return integer * multiple
    }
}

// const fareDoubler = function(fn) {
//     return fn * 2
// }



//}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(array, fn) {
    return fn(array)
}