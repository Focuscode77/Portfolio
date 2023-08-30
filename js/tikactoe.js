let isCpuTurn = false;
const no_display = "nodisplay";
const mgStartBtn = getById("mgStartBtn");
const gameDirections = getById("gameDirections");
const tikTacToeBoard = getById("tikTacToeBoard");
const selectX = "x"
const selectO = "o"

let tttScore;

const ttKey = "ticTacToeScore";

const showDirections = () => {
    setAttr(mgStartBtn, no_display);
    removeAttr(gameDirections, no_display);
    console.log("starting");
}

const startGame = () => {
    setAttr(gameDirections, no_display);
    removeAttr(tikTacToeBoard, no_display);
}


const selectSquare = () => {

}




const hasX = id => {

    return getById(id).classList.contains(selectX);

}


const hasO = id => {
    return getById(id).classList.contains(selectO);
}


const hasXorO = id => {

    return hasX(id) || hasO(id);

}

const arr = [
    [true, true, true, 1],
    [true, false, true, 2],


]

const getScoringId = array => {
    for (let i = 0; i < array.length; i++) {

        const data = array[i];

        if (data[0] && data[1] && data[2]) {

            return data[3];


        }


    }

}
console.log(arr);




