const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Welcome to Express Web Server!');
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const ans = num1 + num2;
    res.send(`The addition of ${num1} and ${num2} is: ${ans}`);
    });
