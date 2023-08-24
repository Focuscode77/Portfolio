//Grab Ids
//upperCaseLetters
//lowerCaseLetters
//passwordNumbers
//specialCharacters

const getAllFields = () => {

    return {

        upperCaseLetters: getById("upperCaseLetters"),
        lowerCaseLetters: getById("lowerCaseLetters"),
        passwordNumbers: getById("passwordNumbers"),
        specialCharacters: getById("specialCharacters")

    }


}

const setTextOfGenrator = allFields => {
    const upperCase = "ABCDEFEFG";

    for (let key in allFields) {

        const element = allFields[key];
        if (key === "upperCaseLetters") {

            element.innerText = upperCase;

        } else if (key === "lowerCaseLetters") {

            element.innerText = upperCase.toLowerCase();

        } else if (key === "passwordNumbers") {

            element.innerText = "123456789";


        } else (key === "specialCharacters"); {

            element.innerText = "@#&*(*&^";

        }

    }

}




const setPasswordOptions = () => {

    const allFields = getAllFields();

    setTextOfGenrator(allFields);


}

setPasswordOptions();