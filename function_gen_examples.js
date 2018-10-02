function* idMaker(startingNum = 1) {
    let id = startingNum
    while(id < id + 1)
      yield id++
  }
  
  //Make a new function generator...hint look at the console logs
  //for challenge 2 to see what the yields should be
function* apiGenerator()  {
  let users = [{ name: "Becky" }, { name: "Dan" }, { name: "Sarah"}]
  let online = [{ name: "Becky"}]
  let suggestions = [{ name: "John", sharedFriend: "Dan"}]
  yield users
  yield online
  yield suggestions
} 


  
  function main() {
    let idNum = idMaker()
    let idNextGen = idMaker(18)
  
    // Alter the function generator to take a parameter,
    // that has a default value of 1. This will be the starting
    //value for id and should provide the following id numbers:
    let emp1 = idNum.next().value //1
    let emp2 = idNextGen.next().value //18
    let emp3 = idNum.next().value //2
    let emp4 = idNextGen.next().value //19
  
    console.log("First Challenge:")
    console.log('Emp1: ', emp1)
    console.log('Emp2: ', emp2)
    console.log('Emp3: ', emp3)
    console.log('Emp4: ', emp4)
  
    //Challenge part 2
    let callOurApi = apiGenerator()
    let users = callOurApi.next().value
    let online = callOurApi.next().value
    let suggestions = callOurApi.next().value
  
    console.log('Second Challenge')
    console.log(users) //[{ name: "Becky" }, { name: "Dan" }, { name: "Sarah"}]
    console.log(online) //[{ name: "Becky"}]
    console.log(suggestions) //[{ name: "John", sharedFriend: "Dan"}]
  }
  
  main()
  