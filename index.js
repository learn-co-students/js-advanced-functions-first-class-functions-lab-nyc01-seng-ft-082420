// Code your solution in this file!

const returnFirstTwoDrivers = (arr) =>{
  return arr.slice(0,2)
}

const returnLastTwoDrivers = (arr) =>{
  return arr.slice(-2)
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = (value1) =>{
  return function(value2){
    return value1 * value2
  }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers =  (array, driversFunction) =>{
  return driversFunction(array)
}
