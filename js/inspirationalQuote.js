
const dailyMemoDay = getById("dailyMemoDay");
const dailyMemoDateNumber = getById("dailyMemoDateNumber");
const dailyMemoTop = getById("dailyMemoTop");
const dailyMemoBottom = getById("dailyMemoBottom");
const dailyInspirationalQuote = getById("dailyInspirationalQuote");
const inspirationalQuote = getById("inspirationalQuote");
//https://type.fit/api/quotes
//Get



const getInspiirationalQuote = () => {

    fetch("https://type.fit/api/quotes").then(data => {

        data.json().then(data => {
            const randomQuote = getRandomindexFromArray(data);
            dailyInspirationalQuote.innerText = randomQuote.text;

        })

    }).catch(err => console.log(err));




}

getInspiirationalQuote();





const setQuoteDate = () => {

    const date = new Date();
    const dateString = date.toDateString();
    const dateArray = dateString.split(" ");
    dailyMemoDay.innerText = `${dateArray[0]} ${dateArray[1]}`;
    dailyMemoDateNumber.innerText = dateArray[2];

}


setQuoteDate();