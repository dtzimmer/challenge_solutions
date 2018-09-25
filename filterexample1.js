function main() {
    let users = [
        {
            name: "John",
            age: 18,
        },
        {
            name: "Kim",
            age: 32
        },
        {
            name: "Bob",
            age: 55
        }
]

let filterUsers = []
//Using a for loop_______________________________________________
for (let i =0; i < users.length; i++) {
    if (users[i].age >= 20) {
        filterUsers.push(users[i])
    }
}
console.log('For loop method', filterUsers)


//Using the filter method_____________________________________________
const filtered = users.filter(function(user) {return user.age >= 20})
console.log('New method filter:', filtered)
const filteredShort = users.filter(user => user.age >= 20)
console.log('New method shorthand:', filteredShort)

//Challenge step two
//filter out anyone who's name is less than 4 characters

const filterName = users.filter(user => user.name.length >= 4)
console.log(filterName)

}

main()