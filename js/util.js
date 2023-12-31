const offscreen = "offscreen";
const toggleAttribute = (ele, attr, value = "") => {
    const hasAttribute = ele.hasAttribute(attr);
    if (hasAttribute) {
        // remove the offset attribute
        ele.removeAttribute(attr);

    } else {
        // add the offset attribute
        ele.setAttribute(attr, value);
    }

}



// Grabing elements from Html Document

const getById = id => {
    const ele = document.getElementById(id);

    return ele;

}



//Random char genrartor 

const getRandomCharFromString = string => {

    const index = Math.floor(Math.random() * string.length);

    return string[index];

}


//Random array genrartor 

const getRandomindexFromArray = array => {

    const index = Math.floor(Math.random() * array.length);

    return array[index];

}


const setAttr = (ele, attr, value = "") => {

    ele.setAttribute(attr, "");

}



const removeAttr = (ele, attr) => {

    ele.removeAttribute(attr);

}


const addClass = (ele, className) => {
    ele.classList.add(className);

}


const removeClass = (ele, className) => {
    ele.classList.remove(className);

}