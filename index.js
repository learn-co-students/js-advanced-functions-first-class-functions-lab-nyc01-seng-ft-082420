const returnFirstTwoDrivers = (driver) => {
  return driver.slice(0, 2)
}

const returnLastTwoDrivers = (driver) => {
  return driver.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (num) => {
  return function(fare){
    return num * fare
  }
}

const fareDoubler = fare => fare * 2;

const fareTripler = fare => fare * 3;

const selectDifferentDrivers = (driver, fns) => fns(driver);
