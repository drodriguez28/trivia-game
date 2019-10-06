var mathSuccess = false;
var usSuccess = false;
var sportsSuccess = false;
var animeSuccess = false; 
var musicSuccess = false; 


function updateGameStatus(question, answer) {
    if (mathSuccess && usSuccess && sportsSuccess && animeSuccess && musicSuccess) {
        console.log ("you won the game") 
    }

    if (question === "math") {
        mathSuccess = answer; 
        console.log("Math Success: " + mathSuccess)
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


// THIS SECTION IS JUST FOR THE MATH PART

document.getElementById('math-submit-1').addEventListener('click', MathCheckAnswerHandler);
document.getElementById('math-submit-2').addEventListener('click', MathCheckAnswerHandler);
document.getElementById('math-submit-3').addEventListener('click', MathCheckAnswerHandler);

function MathCheckAnswerHandler(event)
{
    console.log(event.target.value);

    if (event.target.value === "yes") {
        document.getElementById('mathSuccessID').style.backgroundColor = "lime";
        updateGameStatus("math", true)
    } else {
        document.getElementById('mathSuccessID').style.backgroundColor = "red";
        updateGameStatus("math", false)

    }

}