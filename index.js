const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('Hello World!')
  });
  


app.get('/city', (req, res) => {
    res.json([
        'Grozny',
        'Casablanca',
        'Cosovo'
    ]
    )
});





app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})