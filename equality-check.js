function main() {
    //Do not change the varialbes themselves, but jump down to the conditional checks.
    let personOne = "Bryce"
    let personTwo = "Bruce"
  
    //This conditional should check that the two variables (personOne, personTwo) are not equal
    //Only change the check portion of the conditional
    if (personOne !== personTwo) {
      let job = true
      let user = {
        name: 'Dylan',
        age: 18,
        employer: 'HP'
      }
  
      //This time you will write all of the conditional and check that job is true (without using any equality)
      if (job) {
  
        //This is the last conditional. You will check the user object to see if the name is Samantha and the age is older than 16 or if the employer is 'HP'
        if(user.name ==='Samantha' && user.age === 18 || user.employer === 'HP') {
          console.log("Congrats you're making amazing progress with conditionals.")
        }
      }
    }
  }
  
  main()