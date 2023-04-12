const { readFile, writeFile} = require('fs');

readFile('./content/first.txt', 'utf8', (err, response) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = response;
    readFile('./conent/second.txt', 'utf8', (err, response) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = response
        writeFile('./content/tweofileAsync.txt',
            `here is the reuslt: ${first} and ${second}`, (err, response) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(response);
            })
    })

})

    