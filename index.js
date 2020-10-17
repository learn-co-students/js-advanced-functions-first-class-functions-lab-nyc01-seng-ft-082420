const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers) {
  let length = drivers.length
  return drivers.slice(length-2,length)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(mult) {
  return function(num) {
    return mult * num
  }
  return newFunction
}

const fareDoubler = function(fare) {
  return fare * 2
}

const fareTripler = function(fare) {
  return fare * 3
}

const selectDifferentDrivers = function(arrayofDrivers, funk) {
  return funk(arrayofDrivers)
}
