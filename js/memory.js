//Grab Id's
//mgTopLeft
//mgTopRight
//mgCount
//mgBottomLeft
//mgBottomRight
//mgStartBtn
//mgDirections
const mg_nodisplay = "nodisplay";
const mgDirections = getById("mgDirections");
const mgBoard = getById("mgBoard");
const mgHomeScreen = getById("mgHomeScreen");



const showMGDirections = () => {

    removeAttr(mgDirections, mg_nodisplay)

    setAttr(mgHomeScreen, mg_nodisplay)

}


const memoryGameStart = () => {

    console.log("starting game....");
    setAttr(mgDirections, mg_nodisplay)
    removeAttr(mgBoard, mg_nodisplay)


}

const addHighlight = position => {

    getById(id).classList.add()


}




const removeHighlight = position => {

    getById(id);
}







