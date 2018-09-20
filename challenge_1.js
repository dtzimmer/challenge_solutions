function determineBonus(employees) {
  let today = Date.now()

  let bonuses = []

  for (let i = 0; i < employees.length; i++) {
    let date1 = employees[i].hireDate
    let yearsDiff = Math.floor(Math.abs((date1 - today) / 1000 / 3600 / 24 / 365))

    if (yearsDiff > 15) {
      bonuses.push(Math.round((employees[i].salary * 0.05)*100)/100)}
    else if (yearsDiff > 12){
      bonuses.push(Math.round((employees[i].salary * 0.04)*100)/100)}
    else if (yearsDiff > 9){
      bonuses.push(Math.round((employees[i].salary * 0.03)*100)/100)}
    else if (yearsDiff > 6){
      bonuses.push(Math.round((employees[i].salary * 0.02)*100)/100)}
    else if (yearsDiff > 3){
      bonuses.push(Math.round((employees[i].salary * 0.01)*100)/100)}
    else { }
  }
  console.log(bonuses)
  return(bonuses)
}

//Write a loop to calculate each employee's bonuses

//For every 3 years the person has been employeed, increase their
//salary by 1 %, but do not increase anyones over 5 %

function determine401kAmount(employees, percent) {
  let reduced = []

  for (let i = 0; i < employees.length; i++) {
    reduced.push(Math.floor(((employees[i].salary * percent * 0.01)/12)*100)/100)
  }
  console.log(reduced)
  return(reduced)
}

//Calculate the amount reduced from each check to put into
//the employee's 401K it should be the <percent> over the
//course of the year

  function main() {
    //Here's a sample piece of data
    let employees = [{
      name: 'Jane',
      salary: 152178,
      hireDate: new Date('December 17, 1995 03:24:00')
    }, {
      name: 'John',
      salary: 83210,
      hireDate: new Date('May 28, 2011 08:24:00')
    }]

    const bonus = determineBonus(employees)
    const retirement = determine401kAmount(employees, 3)

    if (typeof bonus === 'undefined' || bonus.length === 0 || bonus[0] !== 7608.90) {
      console.log('You have an error with your bonus function')
    }
    if (typeof retirement === 'undefined' || retirement.length === 0 || retirement[1] !== 208.02) {
      console.log('You have an error with your 401k function')
    }
  }


  main()