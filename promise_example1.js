//Back End - Creation of the promise =====================================

const kitchenJJ = (order) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const randomNumber1n2 = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
            if(randomNumber1n2 === 1){
                resolve(order)
            } else {
                reject('Sorry out of materials')
            }

        }, 1500)
    })
}


//Front End - Consume the promise ===============================
// let myRequest = 'Ham'

// let whatIGotFromJJ = kitchenJJ(myRequest)

// whatIGotFromJJ
// .then((bag) => {
//     console.log('What I got inside the bag:', bag)
// })
// .catch((err)=>{
//     console.log("JJ says: ", err)
// })

//Front End - Using Async and Await ================================

const myFuncToRequestSandwich = async () => {
    try {
    const whatIgotfromJJ = await kitchenJJ('Ham')
    console.log("Inside of the bad: ", whatIgotfromJJ)
    }
    catch (error) {
        console.log('Sorry:', error)
    }
}

myFuncToRequestSandwich()