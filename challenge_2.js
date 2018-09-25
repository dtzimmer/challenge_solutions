/*
  This is the first challenge that will help us prepare to create
  a tic-tac-toe website. You are given a couple of different games
  (represented by an array of arrays). Your goal is to complete the
  checkForWinner function to determine IF there is a winner. Determining
  on the status (x won, o won, or cats game) you will return a string
  of the status (see the conditional checks below to see what is expected).
*/

function checkForWinner(game) {
  let winner = 'cat'

  let playsMadeByO = {
    column0: 0,
    column1: 0,
    column2: 0
  }

  let playsMadeByX = {
    column0: 0,
    column1: 0,
    column2: 0
  }

  for(let row = 0; row < game.length; row++ ) {
      let numberOfTimesPlayedInRowForO= 0
      let numberOfTimesPlayedInRowForX= 0

    for(let column = 0; column < game[row].length; column++){
      if(game[row][column] === 'o'){
        numberOfTimesPlayedInRowForO++
        playsMadeByO[`column${column}`] += 1
        }  
      if(game[row][column] === 'x'){
        numberOfTimesPlayedInRowForX++
        playsMadeByX[`column${column}`] += 1
        }  
    }
    if(numberOfTimesPlayedInRowForO === game[row].length){
      winner = 'o'
      break
    }
    if(numberOfTimesPlayedInRowForX === game[row].length){
      winner = 'x'
      break
    }
    if(playsMadeByO.column0 === game[row].length|| playsMadeByO.column1 === game[row].length || playsMadeByO.column2  === game[row].length){
      winner = 'o'
      break
    }
    if(playsMadeByX.column0 === game[row].length || playsMadeByX.column1 === game[row].length || playsMadeByX.column2 === game[row].length){
      winner = 'x'
      break
    }
    
  }
  // console.log('Plays Made by o in columns:', playsMadeByO.column0, playsMadeByO.column1, playsMadeByO.column2)
  // console.log('Plays Made by x in columns:', playsMadeByX.column0, playsMadeByX.column1, playsMadeByX.column2)
  return winner
  }

  //use for loops

     /*
      Hint you need to use a loop, but you will problably need more than one ;-)
      In fact you will probably need a loop inside a loop. Don't forget that
      some variables will need to be created before the loops to track the
      results of what is calculated inside of the loops. this is similar to what
      we did in the first challenge.
    */
  
  function main() {
    let gameOne = [
      [ 'x', 'o', 'x'],
      [ 'x', '-', 'o'],
      [ 'x', '-', 'o']
    ]
  
    let gameTwo = [
      [ 'o', 'o', 'o'],
      [ '-', 'x', '-'],
      [ '-', '-', 'x']
    ]
  
    // let gameThree = [
    //   [ 'x', 'o', 'o'],
    //   [ 'o', 'x', 'x'],
    //   [ 'x', 'o', 'x']
    // ]
  
    let gameThree = [
      [ 'o', 'x', 'o'],
      [ 'o', 'x', 'x'],
      [ 'x', 'o', 'x']
    ]

    const gameOneWinner = checkForWinner(gameOne)
    const gameTwoWinner = checkForWinner(gameTwo)
    const gameThreeWinner = checkForWinner(gameThree)
  
    const checkGameOne = gameOneWinner === 'x'
    const checkGameTwo = gameTwoWinner === 'o'
    const checkGameThree = gameThreeWinner === 'cat'
  
    if(!checkGameOne && !checkGameTwo && !checkGameThree) {
      console.log('checkForWinner is not working for: \n Any of the examples provided')
    } else if(!checkGameOne && !checkGameTwo && checkGameThree) {
      console.log('checkForWinner is not working for: \n games one and two')
    } else if(!checkGameOne && checkGameTwo && !checkGameThree) {
      console.log('checkForWinner is not working for: \n games one and three')
    } else if(checkGameOne && !checkGameTwo && !checkGameThree) {
      console.log('checkForWinner is not working for:\n games two and three')
    } else if(!checkGameOne && checkGameTwo && checkGameThree) {
      console.log('checkForWinner is not working for:\n game one')
    } else if(checkGameOne && !checkGameTwo && checkGameThree) {
      console.log('checkForWinner is not working for:\n game two')
    } else if(checkGameOne && checkGameTwo && !checkGameThree) {
      console.log('checkForWinner is not working for:\n game three')
    } else {
      console.log("Your code works for all of the examples provided...be careful there are other use cases!!!!")
    }
  
  
  }
  
  main()