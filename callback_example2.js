
function callBackend(isLoggedIn, callback){
    let colors = [ 'red', 'blue', 'green', 'purple']
    setTimeout(() =>{
        if(isLoggedIn){
            callback(colors)
        } else {
            callback([])
        }
    }, 3000)
}



function main(){
    let colors = []

    
    
    
    callBackend(true,)
}

main()