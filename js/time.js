// get by id and display for the time for that field
//hr
//min
//sec

const addZeroToNumbeerIfLessThan10 = num => {
    if (num < 10) {
        return "0" + num;

    }
    return num;

};
console.log(addZeroToNumbeerIfLessThan10(1))

const getHr = () => {
    const time = new Date();
    const hr = time.getHours();
    return hr;
};

const getMin = () => {
    const time = new Date();
    const min = time.getMinutes();
    return min;
};

const getSec = () => {
    const time = new Date();
    const sec = time.getSeconds();
    return sec;

};

const getTimeOfDay = () => {



};




const setHTML = (hr, min, sec, timeOfday) => {
    const hour = document.getElementById("hr");
    const mintue = document.getElementById("min");
    const second = document.getElementById("sec");

    hour.innerText = hr;
    mintue.innerText = min;
    second.innerText = sec;

};

const setDate = () => {
    const hr = getHr();
    const min = getMin();
    const sec = getSec();
    setHTML(hr, min, sec);
};


setInterval(() => {
    setDate()

}, 1000);

