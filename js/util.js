const offscreen = "offscreen";
const toggleAttribute = (ele, attr, value = "") => {
    const hasAttribute = ele.hasAttribute("offscreen");
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



//Random genrartor 


const getRandomCharFromString = string => {

    const index = Math.floor(Math.random() * string.length);

    return string[index];

}