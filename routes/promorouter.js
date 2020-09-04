const express = require('express');

const bodyparser = require('body-parser');

const promorouter = express.Router();

promorouter.use(bodyparser.json());

promorouter.route('/')
    .all((req, res, next) => {

        res.statusCode = 200;
        res.setHeader("content-type", "text/plain");
        next();
    })

    .get((req, res, next) => {


        res.end("it will show all details of promotions");

    })

    .put((req, res, next) => {

        res.statusCode = 403;
        res.end("this operation is invaild");

    })
    .post((req, res, next) => {


        res.end("it will add a promotion with name " + req.body.name + " and his/her details are" + req.body.details);

    })

    .delete((req, res, next) => {


        res.end("it will delete all details of promotions");

    });

promorouter.route('/:promoid')
    .get((req, res, next) => {


        res.end("it will show details of the promotion with ID numbder " + req.params.promoid);

    })

    .delete((req, res, next) => {
        res.end("it will delete a promotion with ID number " + req.params.promoid);
    })


    .post((req, res, next) => {
        res.statusCode = 403;
        res.end("this operation is invaild");

    })
    .put((req, res, next) => {


        res.write("update the promotion with ID " + req.params.promoid);
        res.end("updated the promotion with name " + req.body.name + "and the new details are " + req.body.details);
    });





module.exports = promorouter;
