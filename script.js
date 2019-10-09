var mathSuccess = false;
var usSuccess = false;
var sportsSuccess = false;
var animeSuccess = false;
var musicSuccess = false;

 
 

function updateGameStatus(question, answer) {
    if (mathSuccess && usSuccess && sportsSuccess && animeSuccess && musicSuccess) {
        console.log("you won the game")
    }

    if (question === "math") {
        mathSuccess = answer;
        console.log("Math Success: " + mathSuccess)
    }
    if (question === "us") {
        usSuccess = answer;
        console.log(" US Success: " + usSuccess)
    }
    if (question === "sports") {
        sportsSuccess = answer;
        console.log("Sports Success:" + sportsSuccess)
    }
    if (question === "anime") {
        animeSuccess = answer;
        console.log("Anime Success:" + animeSuccess)
    }
    if (question === "music"){
        musicSuccess = answer;
        console.log("Music Success:" + musicSuccess)

    }



}


const button1 = document.getElementById('buttonMathID')
button1.addEventListener('click', () => {
    //console.log('blah')
    document.getElementById("mathID").style.display = "flex";
    document.getElementById("usID").style.display = "none";
    document.getElementById("sportsID").style.display = "none";
    document.getElementById("animeID").style.display = "none";
    document.getElementById("musicID").style.display = "none";
    
})

const button2 = document.getElementById('buttonUSID')
button2.addEventListener('click', () => {
    //console.log('que onda wei')
    document.getElementById("mathID").style.display = "none";
    document.getElementById("usID").style.display = "flex";
    document.getElementById("sportsID").style.display = "none";
    document.getElementById("animeID").style.display = "none";
    document.getElementById("musicID").style.display = "none";


})

const button3 = document.querySelector('.buttonSports')
button3.addEventListener('click', () => {
    //console.log('aye wei')
    document.getElementById("mathID").style.display = "none";
    document.getElementById("usID").style.display = "none";
    document.getElementById("sportsID").style.display = "flex";
    document.getElementById("animeID").style.display = "none";
    document.getElementById("musicID").style.display = "none";
})

const button4 = document.querySelector('.buttonAnime')
button4.addEventListener('click', () => {
    //console.log('nomaches')
    document.getElementById("mathID").style.display = "none";
    document.getElementById("usID").style.display = "none";
    document.getElementById("sportsID").style.display = "none";
    document.getElementById("animeID").style.display = "flex";
    document.getElementById("musicID").style.display = "none";
})

const button5 = document.querySelector('.buttonMusic')
button5.addEventListener('click', () => {
    //console.log('viva mexico')
    document.getElementById("mathID").style.display = "none";
    document.getElementById("usID").style.display = "none";
    document.getElementById("sportsID").style.display = "none";
    document.getElementById("animeID").style.display = "none";
    document.getElementById("musicID").style.display = "flex";
})
let right= 0



// THIS SECTION IS JUST FOR THE MATH PART

document.getElementById('math-submit-1').addEventListener('click', MathCheckAnswerHandler);
document.getElementById('math-submit-2').addEventListener('click', MathCheckAnswerHandler);
document.getElementById('math-submit-3').addEventListener('click', MathCheckAnswerHandler);
const correct = document.getElementById('correct')
const incorrect = document.getElementById('incorrect')




function MathCheckAnswerHandler(event) {
    console.log(event.target.value);

    if (event.target.value === "yes") {
        right++
        document.getElementById('mathSuccessID').style.backgroundColor = "lime";
        correct.style.display = "flex";
        updateGameStatus("math", true)
        setTimeout (() => {
            correct.style.display = "none";
        }, 1000)
        document.getElementById("mathID").style.display = "none";
        if ( right >= 5) {
            document.getElementById('wonGame').innerHTML= " Congrats you've won !"
        }


        
    } else {
        document.getElementById('mathSuccessID').style.backgroundColor = "red";
        incorrect.style.display = "flex"
        updateGameStatus("math", false)
        setTimeout (() => {
            location.reload()
            incorrect.style.display = "none";
        }, 3000)
        


    }

}


// THIS SECTION IS JUST FOR THE US PART

document.getElementById('ushistory-submit-1').addEventListener('click', USCheckAnswerHandler);
document.getElementById('ushistory-submit-2').addEventListener('click', USCheckAnswerHandler);
document.getElementById('ushistory-submit-3').addEventListener('click', USCheckAnswerHandler);




function USCheckAnswerHandler(event) {
    console.log(event.target.value);

    if (event.target.value === "yes") {
        right++
        document.getElementById('usSuccessID').style.backgroundColor = "lime";
        correct.style.display = "flex";
        updateGameStatus("us", true)
        setTimeout (() => {
            correct.style.display = "none";
        }, 1000)
        document.getElementById("usID").style.display = "none";
        if ( right >= 5) {
            document.getElementById('wonGame').innerHTML= " Congrats you've won !"
        }


    } else {
        document.getElementById('usSuccessID').style.backgroundColor = "red";
        incorrect.style.display = "flex"
        updateGameStatus("us", false)
        setTimeout (() => {
            location.reload()
            incorrect.style.display = "none";
        }, 3000)


    }

}

// THIS SECTION IS JUST FOR THE SPORTS PART
document.getElementById('sports-submit-1').addEventListener('click', SportsCheckAnswerHandler);
document.getElementById('sports-submit-2').addEventListener('click', SportsCheckAnswerHandler);
document.getElementById('sports-submit-3').addEventListener('click', SportsCheckAnswerHandler);

function SportsCheckAnswerHandler(event) {
    console.log(event.target.value);

    if (event.target.value === "yes") {
        right++
        document.getElementById('sportsSuccessID').style.backgroundColor = "lime";
        correct.style.display = "flex";
        updateGameStatus("sports", true)
        setTimeout (() => {
            correct.style.display = "none";
        }, 1000)
        document.getElementById("sportsID").style.display = "none";
        if ( right >= 5) {
            document.getElementById('wonGame').innerHTML= " Congrats you've won !"
        }

    } else {
        document.getElementById('sportsSuccessID').style.backgroundColor = "red";
        incorrect.style.display = "flex"
        updateGameStatus("sports", false)
        setTimeout (() => {
            location.reload()
            incorrect.style.display = "none";
        }, 3000)

    }

}

// THIS SECTION IS JUST FOR THE ANIME PART

document.getElementById('anime-submit-1').addEventListener('click', AnimeCheckAnswerHandler);
document.getElementById('anime-submit-2').addEventListener('click', AnimeCheckAnswerHandler);
document.getElementById('anime-submit-3').addEventListener('click', AnimeCheckAnswerHandler);

function AnimeCheckAnswerHandler(event) {
    console.log(event.target.value);

    if (event.target.value === "yes") {
        right++
        document.getElementById('animeSuccessID').style.backgroundColor = "lime";
        correct.style.display = "flex";
        updateGameStatus("anime", true)
        setTimeout (() => {
            correct.style.display = "none";
        }, 1000)
        document.getElementById("animeID").style.display = "none";
        if ( right >= 5) {
            document.getElementById('wonGame').innerHTML= " Congrats you've won !"
        }

    } else {
        document.getElementById('animeSuccessID').style.backgroundColor = "red";
        incorrect.style.display = "flex"
        updateGameStatus("anime", false)
        setTimeout (() => {
            location.reload()
            incorrect.style.display = "none";
        }, 3000)

    }

}

// THIS SECTION IS JUST FOR THE MUSIC PART
document.getElementById('music-submit-1').addEventListener('click', MusicCheckAnswerHandler);
document.getElementById('music-submit-2').addEventListener('click', MusicCheckAnswerHandler);
document.getElementById('music-submit-3').addEventListener('click', MusicCheckAnswerHandler);

function MusicCheckAnswerHandler(event) {
    console.log(event.target.value);

    if (event.target.value === "yes") {
        right++
        document.getElementById('musicSuccessID').style.backgroundColor = "lime";
        correct.style.display = "flex";
        updateGameStatus("music", true)
        setTimeout (() => {
            correct.style.display = "none";
        }, 1000)
        document.getElementById("musicID").style.display = "none";
        if ( right >= 5) {
            document.getElementById('wonGame').innerHTML= " Congrats you've won !"
        }


    } else {
        document.getElementById('musicSuccessID').style.backgroundColor = "red";
        incorrect.style.display = "flex"
        updateGameStatus("music", false)
        setTimeout (() => {
            location.reload()
            incorrect.style.display = "none";
        }, 3000)

    }

}





