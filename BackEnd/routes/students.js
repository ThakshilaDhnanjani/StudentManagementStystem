const router = require('express').Router();
let Student = require('../models/student');


// Add Student
router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    const newStudent = new Student({
        name,
        age,
        gender
});

    newStudent.save().then(()=>{
        res.json("Student Added");
    }).catch((err)=>{
        console.log(err);
    });
});

// Get All Students

router.route("/").get((req, res)=>{
    Student.find().then((students)=>
    res.json(students)).catch((err)=>{
        console.log(err);
    });
})

//update student

router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const {name,age,gender} = req.body;        //D structure

    const updateStudent = {
        name,
        age,
        gender
    }

    const update = await Student.findByIdAndUpdate(userId,updateStudent).then(()=>{
    res.status(200).send({status: "Student Updated"});//then-catch alternative
    }).catch((err)=>{
        console.log(err.message);//goes to terminal
        res.status(500).send({status: "Error with updating data", error: err.message});//goes to front end
    })
})

//delete student
router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;

    await Student.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "Student Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with deleting data", error: err.message});
    })
})

//take data from one user
router.route("/get/:id").get(async(req,res)=> {
    let userId =req.params.id;
    await Student.findById (userId).then((Student)=> {
        res.status(200).send({status: "user fetched" , Student});
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message})
    })
})

module.exports = router;

