
let random = null;

let initialCount = 0;

let goHome = false;

let canClick = true;

const wamKey = "whacAMoleScore";

let whacAMoleScore;

const whacAMoleText = {
    intro: "Whak the mole to score! Click to play.",
    endText: "You have scored X"
}

const whacPositions = [
    "topOne",
    "topTwo",
    "topThree",
    "middleOne",
    "middleTwo",
    "middleThree",
    "bottomOne",
    "bottomTwo",
    "bottomThree"
];

const flashRed = className => {
    const square = document.querySelector(`.whacAMole.${className}`);
    square.classList.add('hitMole');
    setTimeout(() => {
        square.classList.remove('hitMole');

    }, 300)
}


const changeMolePosition = () => {
    const mole = document.querySelector(".whacAMole.mole");
    mole.classList.remove("mole");
    const randomIndex = Math.floor(Math.random() * whacPositions.length);
    const newMolePosition = whacPositions[randomIndex];
    document.querySelector(`.whacAMole.${newMolePosition}`).classList.add("mole");
}

const increamentWhacCount = () => {
    const currentCount = parseInt(getById("whacAMoleCount").innerText);
    getById("whacAMoleCount").innerText = currentCount + 1;
}

const whacMole = className => {
    const hitMole = document.querySelector(
        `.whacAMole.${className}`
    ).classList.contains("mole");
    if (hitMole) {
        increamentWhacCount();
        flashRed(className);
    }
}

const randomizeMole = () => {
    changeMolePosition();
    random = setInterval(() => {
        changeMolePosition();
    }, 1000);
}

const whacAMoleMenuStart = () => {
    toggleAttribute(getById("whacAMoleHome"), "nodisplay");
    console.log("I am in the function");

    const whacAMoleDirections = getById("whacAMoleDirections");
    toggleAttribute(whacAMoleDirections, "nodisplay");
    whacAMoleDirections.innerText = whacAMoleText.intro;
}

const resetwhacAMoleGame = () => {
    const whacAMoleDirections = getById("whacAMoleDirections");

    toggleAttribute(whacAMoleDirections, "nodisplay");
    toggleAttribute(whacAMoleDirections, "opacity");

    whacAMoleDirections.innerText = whacAMoleText.endText.replace(
        "X",
        getById("whacAMoleCount").innerText
    );

    clearInterval(random);
    canClick = false;
    setTimeout(() => {
        getById("whacAMoleCount").innerText = 10;

        toggleAttribute(whacAMoleDirections, "opacity");
        toggleAttribute(whacAMoleDirections, "nodisplay");

        const whacAMoleBoard = getById("whacAMoleBoard");
        toggleAttribute(whacAMoleBoard, "nodisplay");

        const whacAMoleHome = getById("whakAMoleHome");
        toggleAttribute(whacAMoleHome, "nodisplay");

        canClick = true;
    }, 2000);
}

const setWhakAMoleHighScoreIfHigher = () => {
    const score = parseInt(getById("whacAMoleCount").innerText);
    if (score > whacAMoleScore) {
        setWhacAMoleHighScore(score);
    }
}


const startTimer = () => {

    const countDown = 20;
    getById("whacAMoleCountDown").innerText = countDown;
    let check = setInterval(() => {
        const seconds = parseInt(getById("whacAMoleCountDown").innerText);
        const count = seconds - 1;
        if (count === 0) {
            clearInterval(check);
            resetwhacAMoleGame();
            setWhakAMoleHighScoreIfHigher();
        } else {
            getById("whacAMoleCountDown").innerText = count;
        }
    }, 1000);
}

const whacAMoleStart = () => {
    if (canClick) {
        const whacAMoleDirections = getById("whacAMoleDirections");
        toggleAttribute(whacAMoleDirections, "nodisplay");

        const whacAMoleBoard = getById("whacAMoleBoard");
        toggleAttribute(whacAMoleBoard, "nodisplay");

        randomizeMole();
        startTimer();
        getById("whacAMoleCount").innerText = initialCount;

    }



    const setWhacAMoleHighScore = score => {
        whakAMoleScore = localStorage.getItem(wamKey);
        if (!whacAMoleScore) {
            localStorage.setItem(wamKey, 0);
        }
        if (score) {
            localStorage.setItem(wamKey, score);
        }
        whacAMoleScore = parseInt(localStorage.getItem(wamKey));
        getById("whacamoleScore").innerText = whacAMoleScore;
    }


    setWhacAMoleHighScore();
}

