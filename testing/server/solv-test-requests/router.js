const { generateTestData } = require('./model')

module.exports = router = require('express').Router()

router.get('/', (req, res) => {
    res.json(generateTestData(req.query['id']))
})