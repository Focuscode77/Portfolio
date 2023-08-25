const getQuote = () => {

    const {

        author,
        quote

    } = getRandomindexFromArray(quotes);

    getById("quoteText").innerText = quote;;
    getById("breakingBadAuthor").innerText = author;

    console.log(getRandomindexFromArray(quotes));
}

getQuote()




