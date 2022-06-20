const express = require('express');
const router = express.Router();
const collegesName = require('./collegeList');
// const collegeJson = JSON.stringify(collegesName)

// List of all Colleges
router.get('/', (req, res) => {
    res.send(collegesName);
})


module.exports = router;