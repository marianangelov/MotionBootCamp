const env = process.env.NODE_ENV || 'development';
const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost:27017/unidb';
// const { MOCK } = require('./MOCK_DATA')
const grid = require('./model/grid');

mongoose.connect(dbUrl).then(() => {
    const express = require('express');
    const app = express();
    var cors = require('cors');
    const port = 5500;

    app.use(cors());

    app.get('/', (req, res) => {
        grid.find().then(data => {
            res.json(data.sort((a, b) => {
                return a.id - b.id
            }))
        })


    });
    app.get('/filter/:key', (req, res) => {
        grid.find().then(data => {
            res.send(data.filter(x => x.department === req.params.key))
        })

    });
    app.get('/sort/:key', (req, res) => {
        if (req.params.key !== 'id') {
            grid.find().then(data => {
                res.send(data.sort((a, b) => {
                    return a[req.params.key].localeCompare(b[req.params.key])
                }))
            })

            return
        } else {
            grid.find().then(data => {
                res.send(data.sort((a, b) => {
                    return a.id - b.id
                }))
            })
        }

    });


    app.listen(port, () => { console.log('Server is listening on 5500...') });


}).catch(console.error)



