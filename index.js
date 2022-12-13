/* Your Code Here */
function createEmployeeRecord (array){
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}
function createEmployeeRecords (employeeRecord) {
    return employeeRecord.map(function(array){
        return createEmployeeRecord(array)
    })
}
function createTimeInEvent(dateStamp){
    let [date, hour] = dateStamp.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}
function createTimeOutEvent(dateStamp){
    let [date, hour] = dateStamp.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}
function hoursWorkedOnDate(workDate){
    let atWork = this.timeInEvents.find((e) => e.date === workDate)
    let fromWork = this.timeOutEvents.find((e) => e.date === workDate)
    return (fromWork.hour - atWork.hour)/100
}
// function wagesEarnedOnDate(workDate){
//     let wage = hoursWorkedOnDate.call(this,workDate)* this.payPerHour
//     return(wage.toString())
//     }
let wagesEarnedOnDate = function(dateSought){
    let wage = hoursWorkedOnDate.call(this, dateSought)
        * this.payPerHour
    return parseFloat(wage.toString())
}

function findEmployeeByFirstName(srcArray, firstName) {
        return srcArray.find(function(c){
          return c.firstName === firstName
        })
    }
function findEmployeeByFirstName (srcArray, firstName) {
    return srcArray.find(function(record){
      return record.firstName === firstName
    })
  }
let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return allWagesFor.call(rec)+memo}, 0)
}

//   function calculatePayroll(recordsArray){
//     return recordsArray.reduce(function(acc, record){
//         return acc+ allWagesFor.call(record)
//     }, 0)
// }
// /*
//  We're giving you this function. Take a look at it, you might see some usage
//  that's new and different. That's because we're avoiding a well-known, but
//  sneaky bug that we'll cover in the next few lessons!

//  As a result, the lessons for this function will pass *and* it will be available
//  for you to use if you need it!
//  */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })
    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!
    return payable
}

