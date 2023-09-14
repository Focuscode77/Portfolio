memoryGame = "mgReset";
TicTak = "tttReset";
Wam = "wamReset";

const resetScores = () => {
    //mgReset
    const memoryGameReset = getById(memoryGame);
    const ticTakGameReset = getById(TicTak);
    const wamGameReset = getById(Wam);

    if (memoryGameReset.checked) {

        localStorage.removeItem("mgHighScore")
        console.log("Hello memory Game");

    }
    if (ticTakGameReset.checked) {

        localStorage.removeItem("ticTacToeScore")
        console.log("Hello Tic Tak Toe");


    }
    if (wamGameReset.checked) {

        localStorage.removeItem("whacAMoleScore")

        console.log("Hello Wac a mole");


    }
    window.location.reload()

}