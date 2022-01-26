const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json('World')
});

app.get('/users', (req, res) => {
    res.json(["user1", "user2", "user3"])
});

app.post('/users', (req, res) => {
    res.send("Юзер добавлен")
});

app.delete('/admin', (req, res) => {
    res.send("не хватает прав доступа")
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})