var express = require('express')
var bodyparser = require('body-parser')
var app = express()
app.use(bodyparser.urlencoded({ extended: true }))
app.get('', (req, res) => {
    res.sendFile(__dirname + '/calc.html')
});

app.post('/', (req, res) => {
    const val1 = Number(req.body.userInput1);
    const val2 = Number(req.body.userInput2);
    const add = val1 + val2;

    res.send('The Sum of the value is : ' + add);
})

app.listen(8080, (res) => {
    console.log('server started at port 8080')
});