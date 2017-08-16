let express = require('express');
let router = express.Router();
let mongoose = require("mongoose");
let Student = require("../models/student");

mongoose.connect('mongodb://localhost:27017/student');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/saveStudent',function(req,res){
  const grade=req.body.grade,
        name=req.body.name,
        age=req.body.age,
        sex=req.body.sex;
  const student = new Student({
      grade : grade,
      name: name,
      age : age,
      sex : sex
  });
  const studentSave = student.save(function(err,data){
    if(err){
        console.log(err.message);
    }else{
      res.json(data._id);
    }
  });
})

router.post('/fixStudent',function(req,res){
    const grade=req.body.grade,
        name=req.body.name,
        age=req.body.age,
        sex=req.body.sex,
        id=req.body.id;
    Student.update({_id:id},{
        grade : grade,
        name: name,
        age : age,
        sex : sex
    },function(err,data){
      if(err){
        console.log(err);
      }else{
        res.json('update success');
      }
    })
})

router.post('/delStudent',function(req,res){
  const id=req.body.id;
  if(id){
      Student.remove({_id:id},function(err,data){
        if(err){
          console.log(err);
        }else{
          res.json('delete success');
        }
      })
  }
})
module.exports = router;
