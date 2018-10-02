
async function callBackend() {
  let checkLogStat = await checkToSeeIfUserIsLoggedIn()
  console.log(checkLogStat ? "You're Logged in": "go log in")
}

function checkToSeeIfUserIsLoggedIn() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true)

    }, 2000);
  })
}


function main(){
  callBackend()
}

main()