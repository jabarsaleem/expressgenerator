const express = require('express');

const bodyparser = require('body-parser');

const leaderrouter = express.Router();

leaderrouter.use(bodyparser.json());

leaderrouter.route('/')
    .all( (req, res, next) => {

        res.statusCode = 200;
        res.setHeader("content-type", "text/plain");
        next();
    })

    .get( (req, res, next) => {


        res.end("it will show all details of leaders");

    })

    .put((req, res, next) => {

        res.statusCode = 403;
        res.end("this operation is invaild");

    })
    .post( (req, res, next) => {


        res.end("it will add a leader with name " + req.body.name + " and his/her details are" + req.body.details);

    })

    .delete((req, res, next) => {


        res.end("it will delete all details of leaders");

    });

    

    leaderrouter.route('/:ltid')
    .get((req, res, next) => {


        res.end("it will show details of the leader with ID numbder " + req.params.ltid);
    
    })
    
    .delete((req,res,next)=>{
    res.end("it will delete a leader with ID number "+ req.params.ltid);
    })
    
    .post((req, res, next) => {
    
        res.statusCode = 403;
        res.end("this operation is invaild");
    
    })
    .put((req, res, next) => {
    
    
        res.write("update the leader with ID " + req.params.ltid);
        res.end("updated the leader with name " + req.body.name + "and the new details are " + req.body.details);
    });
    


module.exports = leaderrouter;
