let GameOver;
const user = document.querySelector(".user"),
    AI = document.querySelector(".ai"),
    ertext = document.getElementById("text"),
    com = document.querySelector(".com.flex");
function initGame() {
    GameOver = false;
    user.textContent = 0;
    ai.textContent = 0;
}
let score = [0, 0];
function initDisplay(up = 0, ap = 0, text = "", aa) {
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

                initDisplay(score[0], score[1], "TIED TRY AGAIN", ai[AIid]);

            } else if ((id === 0 && AIid === 1) || (id === 1 && AIid === 2) || (id === 2 && AIid === 0)) {
                initDisplay(score[0], score[1], ai[AIid]);
                // console.log("ggg");
                // console.log(AIid);
            }

            console.log(id);
        } else {
            alert("Sorry, you need first choose your weapon XD");
        }
        // console.log();

    }
});

document.getElementById("res").addEventListener("click", initGame());

/*change img border */
document.querySelector(".flex").addEventListener("click", e => {
    const div = document.querySelector(".bor.chosen");
    if (div) {
        div.classList.remove("chosen");
    }
    e.target.parentElement.classList.toggle("chosen");
});
