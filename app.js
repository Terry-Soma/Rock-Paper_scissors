let GameOver;
const user = document.querySelector(".user"),
    AI = document.querySelector(".ai"),
    ertext = document.getElementById("text"),
    com = document.querySelector(".com.flex"),
    win = document.getElementById("win");
function initGame() {
    GameOver = false;
    score[0]=0;
    score[1]=0;
    user.textContent = score[0];
    AI.textContent = score[0];
    win.textContent = "Let's fight versus noob AI";
    ertext.textContent = "";
    ai.textContent = 0;
    com.innerHTML= "";
}
let score = [0, 0];
function initDisplay(up = 0, ap = 0, aa, text = "") {
    document.getElementById("score").style.visibility = "unset";
    com.style.visibility = "unset";
    AI.textContent = ap;
    user.textContent = up;
        ertext.textContent = text;
    com.innerHTML = `<div class="bor"><img src="${aa.url}" alt="${aa.alt}"></div>`;


}
const ai = [
    {
        alt: "scissors",
        url: "./scissors.png"
    },
    {
        alt: "paper",
        url: "./paper.png"
    },
    {
        alt: "rock",
        url: "./rock.png"
    },
];

// vs click
document.getElementById("vs").addEventListener("click", function () {

    if (GameOver) {
        alert("Please restart the game");
    } else {


        if (document.querySelector(".bor.chosen")) {
            ertext.textContent = "";
            let AIid = Math.floor(Math.random() * 3);
            const id = parseInt(document.querySelector(".bor.chosen").dataset.id);

            if (id === AIid) {

                initDisplay(score[0], score[1], ai[AIid],"TIED TRY AGAIN");

            } else if ((id === 0 && AIid === 1) || (id === 1 && AIid === 2) || (id === 2 && AIid === 0)) {
                score[0]++;
                initDisplay(score[0], score[1], ai[AIid],"Hurray YOU WIN This time");
                // console.log("ggg");
                // console.log(AIid);
            }else{
                score[1]++;
                initDisplay(score[0], score[1], ai[AIid],"Greeting Ai xd i win");
            }

            console.log(id);

        } else {
            alert("Sorry, you need first choose your weapon XD");
        }
        if(score[0] ===3)
        { /* i know it is not dry but this situation XD */
            GameOver=true;
            win.textContent = `HURRAY YOU WIN `;


        } else if(score[1] === 3){
            GameOver=true;
            win.textContent = `Sorry Ai win `;
        }
        // console.log();

    }
});

document.getElementById("res").addEventListener("click", ()=>{
    initGame();
});

/*change img border */
document.querySelector(".flex").addEventListener("click", e => {
    const div = document.querySelector(".bor.chosen");
    if (div) {
        div.classList.remove("chosen");
    }
    e.target.parentElement.classList.toggle("chosen");
});
