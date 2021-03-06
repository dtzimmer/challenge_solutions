/*
  This challenge will have 3 parts:
    * Callback Function to handle async
    * Promise to handle async
    * Async/Await to handle async code

  You will need to get all of the code to pass, and will be shown a message of "Yay!!!" when you have succeeded.
*/

// The following data is a representation of what we would have in our db
let users = [{
  name: 'Jane',
  handle: 'e582a642-e400-453f-b0f1-4aaa0a419cb5',
  age: 29
}, {
  name: 'Bruce',
  handle: '239ae3ce-da74-46cd-bd98-b98e9406a80b',
  age: 35
}, {
  name: 'Kim',
  handle: '7e6a2835-0389-42ca-a4f6-321386fd6947',
  age: 43
}, {
  name: 'Sammy',
  handle: 'e7cdc763-c559-4f51-966b-cb3313bcce24',
  age: 15
}, {
  name: 'Dylan',
  handle: '88c76784-14f6-4ca1-8567-5e2cf23fa23c',
  age: 71
}
]

let friends = [{
  user: 'e582a642-e400-453f-b0f1-4aaa0a419cb5',//Jane
  friends: [
    '239ae3ce-da74-46cd-bd98-b98e9406a80b', //Bruce
    'e7cdc763-c559-4f51-966b-cb3313bcce24',//Sammy
    '7e6a2835-0389-42ca-a4f6-321386fd6947'//Kim
  ]
}, {
  user: '239ae3ce-da74-46cd-bd98-b98e9406a80b', //Bruce
  friends: [
    'e582a642-e400-453f-b0f1-4aaa0a419cb5',//Jane
    '7e6a2835-0389-42ca-a4f6-321386fd6947'//Kim
  ]
}, {
  user: '7e6a2835-0389-42ca-a4f6-321386fd6947',//Kim
  friends: [
    'e582a642-e400-453f-b0f1-4aaa0a419cb5'//Jane
  ]
}, {
  user: 'e7cdc763-c559-4f51-966b-cb3313bcce24',//Sammy
  friends: [
    'e582a642-e400-453f-b0f1-4aaa0a419cb5',//Jane
    '88c76784-14f6-4ca1-8567-5e2cf23fa23c'//Dylan
  ]
}, {
  user: '88c76784-14f6-4ca1-8567-5e2cf23fa23c',//Dylan
  friends: [
    'e7cdc763-c559-4f51-966b-cb3313bcce24'//Sammy
  ]
}]


/*
    userHandle -> a guid that represents the user
*/
function fetchFriends(userhandle, callback) {
  let randomTime = Math.random() * (8000 - 200) + 200;
  setTimeout(() => {
    let user = users.filter(u => u.handle === userhandle)
    if(user.length === 0) {
      console.log('This is the sad path')
      callback({ err: true, msg: 'Unknown User' }, [])
    } else {
      console.log("This is the happy path")
      let friendsList = friends.filter(list => list.user === userhandle)
      callback({ err: false, msg: null }, friendsList[0].friends)
    }
  }, randomTime);
}


function addFriend(userhandle, friendhandle) {
  return new Promise((resolve, reject) => {
    let foundUsers = users.filter(u => u.handle === userhandle || u.handle === friendhandle) //filters over users check if userhandle and friendhandle are valid
    let userAndFriends = friends.filter(u => u.user === userhandle)// filters over the friends array to pull out the user and the array of friends
    let friendAndFriends = friends.filter(u => u.user === friendhandle)
    let existingFriend = userAndFriends.filter(u => u.friends === friendhandle) //filters over the users friends to see if it matches the friendhandle
    let addFriendArray = [...userAndFriends[0].friends, friendhandle]
    let addFriendsFriendArray = [...friendAndFriends[0].friends, userhandle]
    friends.map(u => {
      switch(u.user){
        case (userhandle):
        u.friends = addFriendArray, 
        console.log("friend 1", u.friends)
        break
        case (friendhandle):
        u.friends = addFriendsFriendArray,
        console.log("friend 2", u.friends)
        break
        default:
        u = u
      }
      })
    if (!foundUsers){
      reject("One of them or both don't exist")
    } else if(!existingFriend === []){
      console.log(existingFriend)
      reject("These users are already friends")
    } else {resolve(userAndFriends)}
    }
  )};
  //You will need to complete this part....

  //First create a new promise (check out mdn if lost)

  //inside the promise check to see if both the userhandle
  //and the friendhandle exist as users and that they
  //are not friends. If either they don't exist or they
  //are already friends then reject the promise

  //Otherwise change the friends array at the top so the userhandle
  //will have the friendhandle in the friends sub array...also you
  //need add the user to the friend's list (both should have them listed as friends)

  //return the promise



//This function declaration should be changed in order to say it will carry out async code
async function fetchUser(userhandle) {
  let randomTime = Math.random() * (8000 - 200) + 200;
  await setTimeout(() => {
    let user = users.filter(u => u.handle === userhandle)
    console.log('User Name', user[0].name, 'Friends', friends[4].friends)
    if(user.length === 0) {
      throw new Error('Unknown User')
    } else {
      if (user[0].name === 'Dylan' && friends[4].friends.length === 2 && 
      friends[4].friends.indexOf('7e6a2835-0389-42ca-a4f6-321386fd6947')> -1)
        console.log("Yay!!!!!")
      else
        console.log('Something went wrong')

      return user[0]
    }
  }, randomTime);
}

function main() {
  const callback = (errObj, friends) => {
    //Test errObj to see if it has an error. If so call fetchFriends(//Pass in Kim's handle)
    if (errObj.err){
      console.log('Error', errObj.msg, friends)
      fetchFriends('7e6a2835-0389-42ca-a4f6-321386fd6947', callback)
    } else {
    console.log("We are outside the conditional for errors this must be happy path", friends)
    //add Dylan as a friend
    const results = addFriend('7e6a2835-0389-42ca-a4f6-321386fd6947','88c76784-14f6-4ca1-8567-5e2cf23fa23c')
    results
    .then ((data) => {
      console.log("I made it here", data)
      // let newFriendsArray = friends.push(data)
      fetchUser('88c76784-14f6-4ca1-8567-5e2cf23fa23c')
    })
    .catch((error) => {
        console.log('Oh no something went wrong', error)
    })
}
    }
  
  //You need to create the callback
  //note that the callback needs to take an object as the first parameter and an array as the seconde
  //The object (first parameter) will be the error object if it comes back with an error you will call
  //fetchFriends again but with Kim's handle and handle the results
  //Handle the results by adding Dylan as her friend
  //You will need to call the addFriend mehtod with the correct info
  //This method will return a promise so you need to add a .then to handle a success and a .catch for any failures
  //If it is a success then you will finally call the fetchUser method with Dylan's info...if you did everything correctly
  //you will see the Yay message
  //also console.log the user that is returned from fetchUser


  // Note I purposefully put a typo in the user handle... it is missing the last character (don't correct this)
  fetchFriends('e582a642-e400-453f-b0f1-4aaa0a419cb', callback)

}

main()
