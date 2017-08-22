var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");


router.get('/', function (req, res) {
  burger.selectAll(function(data) {
    var cheeseBurgers = { burgers: data };
    res.render('index', cheeseBurgers);
  });
});

router.post('/burger/create', function (req, res) {
  burger.insertOne(req.body.burger_name, function() {
    res.redirect('/');
  });
});

router.post('/burger/eat/:id', function (req, res) {
  burger.updateOne(req.params.id, function() {
    res.redirect('/');
  });
});
module.exports = router;