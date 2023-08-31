
const upperCaseLetters = "upperCaseLetters";
const lowerCaseLetters = "lowerCaseLetters";
const passwordNumbers = "passwordNumbers";
const specialCharacters = "specialCharacters";
const allNumbers = "123456789";
const specialChar = "@#&*(*&^";
const upperCase = "ABCDEFEFG";
const upperCheckBoxId = "upperCaseLettersCheckbox";
const lowerCheckBoxId = "lowerCaseLettersCheckbox";
const passwordCheckBoxId = "passwordNumbersCheckbox";
const specialCheckBoxId = "specialCharactersCheckbox";




const getAllFields = () => {

    return {

        upperCaseLetters: getById(upperCaseLetters),
        lowerCaseLetters: getById(lowerCaseLetters),
        passwordNumbers: getById(passwordNumbers),
        specialCharacters: getById(specialCharacters)

    }


}




const setTextOfGenrator = (allFields) => {

    for (let key in allFields) {

        const element = allFields[key];

        if (key === upperCaseLetters) {

            element.innerText = upperCase;

        } else if (key === lowerCaseLetters) {

            element.innerText = upperCase.toLowerCase();

        } else if (key === passwordNumbers) {

            element.innerText = allNumbers;


        } else {

            element.innerText = specialChar;

        }

    }

}



const getRandomCharacters = (array, rc = "") => {

    let randomCharacters = rc;

    array.forEach(data => {


        if (data === upperCaseLetters) {

            const char = getRandomCharFromString(upperCase)
            randomCharacters += char;

        } else if (data === lowerCaseLetters) {

            const char = getRandomCharFromString(upperCase.toLowerCase())
            randomCharacters += char;


        } else if (data === passwordNumbers) {

            const char = getRandomCharFromString(allNumbers)
            randomCharacters += char;


        } else {

            const char = getRandomCharFromString(specialChar)
            randomCharacters += char;

        }


    });

    //Passes in 8 Characters
    if (randomCharacters.length < 8) {

        return getRandomCharacters(array, randomCharacters)

    } else {

        return randomCharacters;

    }

    console.log(randomCharacters);

}




const generatePassword = () => {

    const allBoxesChecked = getCheckedBoxes();
    //getRandomCharacters(allBoxesChecked);
    const passwordBtn = getById("passwordBtn");
    passwordBtn.innerText = getRandomCharacters(allBoxesChecked);

}

const copyPassword = () => {
    const passwordBtn = getById("passwordBtn").innerText;
    navigator.clipboard.writeText(passwordBtn).then(() => {

        getById("passwordBtn").innerText = "Copied"

        console.log("copied to clipboard");
        setTimeout(() => {

            getById("passwordBtn").innerText = passwordBtn;

        }, 2000)

    }).catch(err => {

        console.log(err);

    })

}





const getCheckedBoxes = () => {
    // Checkbox ids"

    const upperCaseLettersCheckbox = getById(upperCheckBoxId)
    const lowerCaseLettersCheckbox = getById(lowerCheckBoxId)
    const passwordNumbersCheckbox = getById(passwordCheckBoxId)
    const specialCharactersCheckbox = getById(specialCheckBoxId)

    const upperIsChecked = upperCaseLettersCheckbox.checked;
    const lowerIsChecked = lowerCaseLettersCheckbox.checked;
    const numIsChecked = passwordNumbersCheckbox.checked;
    const charIsChecked = specialCharactersCheckbox.checked;

    const allCheckedValues = [];


    if (upperIsChecked) {

        allCheckedValues.push(upperCaseLetters)

    }
    if (lowerIsChecked) {

        allCheckedValues.push(lowerCaseLetters)

    }
    if (numIsChecked) {

        allCheckedValues.push(passwordNumbers)

    }
    if (charIsChecked) {

        allCheckedValues.push(specialCharacters)

    }

    return allCheckedValues;

}

const setPasswordOptions = () => {

    const allFields = getAllFields();

    setTextOfGenrator(allFields);


}

setPasswordOptions();