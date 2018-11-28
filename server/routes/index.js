const express = require('express');
const router = express.Router();
const expenses = require('../controller/index');

router.post('/addExpense', function(req, res){
    let response = expenses.add(req);
    return res.status(response[0]).send(response[1]);
});

router.post('/readExpense', function(req, res){
    let response = expenses.read(req);
    return res.status(response[0]).send(response[1]);
});

router.post('/removeExpense', function(req, res){
    let response = expenses.remove(req);
    return res.status(response[0]).send(response[1]);
});

router.get('/getAllExpenses', function(req, res){
    let response = expenses.read_all(req);
    return res.status(response[0]).send(response[1]);
});

module.exports = router;
