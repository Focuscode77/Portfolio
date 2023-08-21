// get by id and display for the time for that field
//hr
//min
//sec

const addZeroToNumberIfLessThan10 = num => {
    if (num < 10) {
        return "0" + num;

    }
    return num;

};
console.log(addZeroToNumberIfLessThan10(1))

const getHr = () => {
    const time = new Date();
    let hr = time.getHours();

    if (hr > 12) {

        hr = hr - 12;

    }
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
    const time = new Date();
    const hr = time.getHours();
    let timeOfDay = "AM";

    if (hr > 11) {

        timeOfDay = "PM";

    }
    return timeOfDay;


};




const setHTML = (hr, min, sec, timeOfday) => {
    const hour = getById("hr");
    const mintue = getById("min");
    const second = getById("sec");
    const dayTime = getById("dayTime");

    hour.innerText = addZeroToNumberIfLessThan10(hr);
    mintue.innerText = addZeroToNumberIfLessThan10(min);
    second.innerText = addZeroToNumberIfLessThan10(sec);
    dayTime.innerText = getTimeOfDay();

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

