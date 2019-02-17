var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
const config = require('../config/database');

var db = mongojs(config.database, ['reviews']);
router.get('/reviews', function(req, res, next){
    db.reviews.find(function(err, reviews){
        if(err){
            res.send(err);
        }
        res.json(reviews);
    });
});

// Get Single Task
router.get('/task/:id', function(req, res, next){
    db.reviews.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
});

//Save Task
router.post('/task', function(req, res, next){
    var task = req.body;
    if(!task.imgurl || !(task.from_team) ,!(task.to_team),!(task.date_match), !(task.match_desc), !(task.to_imgurl), !(task.from_imgurl), !(task.team_one_11), !(task.team_two_11), !(task.dream11)) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });   
    } 
    else {
        db.reviews.save(task, function(err, task){
            if(err){
                res.send(err);
            }
            res.json(task);
        });
    }
    
});

// Delete Task
router.delete('/task/:id', function(req, res, next){
    db.reviews.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
});

// Update Task
router.put('/task/:id', function(req, res, next){
    var task = req.body;
    var updTask = {};
    
    if(task.imgurl){
        updTask.imgurl = task.imgurl;
    }
    if(task.from_team){
        updTask.from_team = task.from_team;
    }
          
    if(task.to_team){
        updTask.to_team = task.to_team;
    }
    if(task.date_match){
        updTask.date_match = task.date_match;
    }
    if(task.match_desc){
        updTask.match_desc = task.match_desc;
    }
    if(task.to_imgurl){
        updTask.to_imgurl = task.to_imgurl;
    }
    if(task.from_imgurl){
        updTask.from_imgurl = task.from_imgurl;
    }
    if(task.team_one_11){
        updTask.team_one_11 = task.team_one_11;
    }
    if(task.team_two_11){
        updTask.team_two_11 = task.team_two_11;
    }
    if(task.dream11){
        updTask.dream11 = task.dream11;
    }
    
    
   
    if(!updTask){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
        db.reviews.update({_id: mongojs.ObjectId(req.params.id)},updTask, {}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
    }
});

module.exports = router;