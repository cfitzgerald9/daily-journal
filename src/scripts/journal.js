fetch("http://localhost:3000/journalEntries")
    .then(response=>response.json())
    .then(myParsedEntries => {
        myParsedEntries.forEach(entries => {
            document.querySelector("#entryLog").innerHTML +=
            `<div>
                <h2>${entries.date}</h2>
                <h3>${entries.concepts}</h3>
                <p>${entries.entry}
                <aside>${entries.mood}</aside>`
        })
    })
