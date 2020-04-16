const express = require('express');
const app = express();
var cors = require('cors');
const port = 5500;
const { MOCK } = require('./MOCK_DATA')

app.use(cors());

app.get('/', (req, res) => {
    res.json(MOCK)
});
app.get('/filter/:key', (req, res) => {
    res.json(MOCK.filter(x => x.department === req.params.key))
});
app.get('/sort/:key', (req, res) => {
    if (req.params.key !== 'id') {
        res.json(MOCK.sort((a, b) => {
            return a[req.params.key].localeCompare(b[req.params.key])
        }))
        return
    } else {
        res.json(MOCK)
    }

})

app.listen(port, () => { console.log('Server is listening on 5500...') });

