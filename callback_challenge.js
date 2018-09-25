//Backend
function callBackend(isLoggedIn, userCallback) {
  let usersOnbackend = [{ name: 'john', age: 82 }, { name: 'Sammy', age: 18 }, { name: 'Tommy', age: 27 }]
  setTimeout(() => {
    if (!isLoggedIn) {
      userCallback(true, [])
    } else {
      userCallback(false, usersOnbackend)
    }
  }, 3000);
}

//Frontend
function main () {
  let users = []

  callBackend(true, function (err, data) { users.push(data); console.log(users) });
  callBackend(false, function (err, data) { if(err) {console.log('You are not signed in', data)} });
}

main()

//Frontend
function main() {
  let users = []
  function firstCallback (err, data) {
    console.log('Here', err, data)
    if(err) {
      console.log('There was an error')
    } else {
      users= data
      console.log("Here are my friends", users)
    }
  }
  callBackend(true, firstCallback)
  callBackend(false, firstCallback)
}