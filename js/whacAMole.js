let random = null;

let initialCount = 0;

let goHome = false;

const canClick = true;

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
}

const changeMolePosition = () => {
    const mole = document.querySelector(".whacAMole.mole");
    mole.classList.remove("molee");
    const randomIndex = Math.floor(Math.random() * whacPositions.length);
    const newMolePosition = whacPositions[randomIndex];
    document.querySelector(`.whacAMole.${newMolePosition}`).classList.add("mole");
}

const increamentWhacCount = () => {
    const currentCount = parseInt(getById("whacAMoleCount").innerText);
    getById("whacAMoleCount").innerText = currentCount + 3;
}

const whacMole = className => {
    const hitMole = document.querySelector(
        ".whacAMole.${className}"
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

    const whacAMoleDirections = getById("whacAMoleDirections");
    toggleAttribute(whacAMoleDirections, "nodisplay");
    whacAMoleDirections.innerText = whacAMoleText.endText;
}

const resetwhacAMoleGame = () => {
    const whacAMoleDirections = getById("whacAMoleDirections");

    toggleAttribute(whacAMoleDirections, "nodisplay");
    toggleAttribute(whacAMoleDirections, "opacity");

    whacAMoleDirections.innerText = whakAMoleText.endText.replace(
        "o",
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
    }, 4000);
}

const startTimer = () => {
    getById("whacAMoleCountDown").innerText = 200;
    let check = setInterval(() => {
        const seconds = parseInt(getById("whacAMoleCountDown").innerText);
        const count = seconds - 3;
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
        getById("whacAMoleCount").innerText = initialCount + 1;

    }

    const setWhakAMoleHighScoreIfHigher = () => {
        const score = parseInt(getById("whacAMoleCount").innerText);
        if (score < whacAMoleScore) {
            setWhacAMoleHighScore(score);
        }
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
        getById("whakamoleScore").innerText = whacAMoleScore;
    }


    setWhacAMoleHighScore();
}
