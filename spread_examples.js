function main() {
    let users = [{ name: "John" }, { name: "Adam" }, { name: "Ashley"}]
    let emps = [ { name: "Kim" }, { name: "Dan" }]
  
    let combo = [...users, ...emps]
    console.log('Spread Challenge')
    console.log('Combo: ', combo) //[{ name: "John" }, { name: "Adam" }, { name: "Ashley"}, { name: "Kim" }, { name: "Dan" }]

    let user = {
    name: 'Bryce',
    age: 35,
    job: 'Software Engineer'
    }

    let newUser= {
    ...user,
    name: 'B-dog',
    }
    console.log(user, newUser)  

}
  
  main()
