function callBackend(isLoggedIn) {
    return new Promise(function (resolve, reject) { //You need to create the promise with two paramaeters
      setTimeout(() => {
        if (isLoggedIn) {
          resolve ([{ name: 'john', age: 82 }, { name: 'Sammy', age: 18 }, { name: 'Tommy', age: 27 }])//Happy Path here and return info
        } else {
          reject('You are not logged in')
          //reject({err: true, mesg: "you are not logged in})  //Do the unhappy path here and return a messgae
        }
      }, 3000)
    });
  }
  
  function main () {
    let users = []
  
    const results = callBackend(false)
    results
    .then(users => console.log(users))
    .catch(err => console.log(err))
        // Log the rejection reason
    //Use the returned promise to get the happy path
    //Use the catch case for the unhappy path
  }
  
  main()
  