//Flip Coin Function

var heads, tails
//Set parameters at load
init() 

//distinguish winner as first to 5
function winner () {
    if (heads === 5) {
        //Change coin image
        document.getElementById("mainTitle").innerHTML = "Heads is The Winner!"
        //Remove eventListener on coinBtn
        document.getElementById("coinBtn").removeEventListener('click', headsOrTails)
        console.log("Heads Wins!")
    } else if (tails === 5) {
        //Change coin image
        document.getElementById("mainTitle").innerHTML = "Tails is The Winner!"
        //Remove eventListenter on coinBtn
        document.getElementById("coinBtn").removeEventListener('click', headsOrTails)
        console.log("Tails Wins!")
    }    
}

//Random number generator, 1-2
function headsOrTails () {
    let sideUp = Math.floor(Math.random() * 2) + 1 
    if (sideUp === 1) {
        document.getElementById("coinImg").src = "heads.jpg"
        heads = heads + 1
        document.getElementById("scoreHeads").innerHTML = heads  
        console.log('Heads')
    } else {
        document.getElementById("coinImg").src = "tails.jpg"
        tails = tails + 1
        document.getElementById("scoreTails").innerHTML = tails 
        console.log('Tails')
    }
    console.log(heads, tails)
    winner()
}

//Function that sets game back to starting parameters
function init () {
    heads = 0
    tails = 0

    document.getElementById("scoreHeads").innerHTML = heads  
    document.getElementById("scoreTails").innerHTML = tails 
    document.getElementById("coinImg").src = "heads.jpg"
    document.getElementById("mainTitle").innerHTML = "Flip-the-Coin!"
    document.getElementById("coinBtn").addEventListener("click", headsOrTails)
}

//New game button eventListener 
document.getElementById("newGmeBtn").addEventListener("click", init)

