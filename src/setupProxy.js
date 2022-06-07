const body = require('body-parser')
const data = require('./mock/index')
const tableData = [
    {
        name: '标题1',
        price: '10',
        id: 1
    },
    {
        name: '标题2',
        price: '10',
        id: 2
    },
    {
        name: '标题3',
        price: '10',
        id: 3
    },
]
module.exports = app => {
    app.use(body.json())
    app.post('/api/data', (req, res) => {
        res.send({
            code: 200,
            data: tableData
        })
    })
    app.post('/api/car', (req, res) => {
        res.send({
            code: 200,
            data: data
        })
    })
}