const button1 = document.getElementById('buttonMathID')
button1.addEventListener('click', () => {
    console.log('blah')

    var x = document.getElementById("mathID");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }


})

const button2 = document.getElementById('buttonUSID')
button2.addEventListener('click', () => {
    console.log('que onda wei')
    var x = document.getElementById("usID");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

})

const button3 = document.querySelector('.buttonSports')
button3.addEventListener('click', () => {
    console.log('aye wei')
    var x = document.getElementById("sportsID");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }



})
const button4 = document.querySelector('.buttonAnime')
button4.addEventListener('click', () => {
    console.log('nomaches')
})
const button5 = document.querySelector('.buttonMusic')
button5.addEventListener('click', () => {
    console.log('viva mexico')
})