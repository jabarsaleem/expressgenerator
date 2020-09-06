const express = require('express');

const bodyparser = require('body-parser');
const monogoose = require('mongoose');

const Dishes = require('../models/dishes');


const DishRouter = express.Router();

DishRouter.use(bodyparser.json());

DishRouter.route('/')

    .get((req, res, next) => {
        Dishes.find({})
            .then((dishes) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(dishes);

            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .put((req, res, next) => {

        res.statusCode = 403;
        res.end("this operation is invaild");

    })
    .post((req, res, next) => {

        Dishes.create(req.body)
            .then((dish) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'applicaion/json');
                res.json(dish);
            }, (err) => next(err)).catch((err) => next(err));

    })

    .delete((req, res, next) => {

        Dishes.remove({})
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);
            }, (err) => next(err))
            .catch((err) => next(err));

    });
DishRouter.route('/:dishid')
.get((req,res,next)=>{
    Dishes.findById(req.params.dishid)
    .then((dish)=>{

        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(dish);
    },(err)=>next(err))
    .catch((err)=>next(err));

})

    .delete ((req, res, next) => {
        Dishes.findByIdAndRemove(req.params.dishid)
        .then((resp)=>{

            req.statusCode=200;
            req.setHeader('Content-Type','applicaion/json');
            req.json(resp);
        },(err)=>next(err))
        .catch((err)=>next(err));
    
})

    .post((req, res, next) => {

        res.statusCode = 403;
        res.end("this operation is invaild");

    })
    .put((req, res, next) => {

        Dishes.findByIdAndUpdate(req.params.dishid,{$set:req.body},{new:true})
        .then((dish)=>{

            res.statusCode=200;
            res.setHeader('Content-Type','application/json');
            res.json(dish);
        },(err)=>next(err))
        .catch((err)=>next(err));
        
    });

module.exports = DishRouter;
