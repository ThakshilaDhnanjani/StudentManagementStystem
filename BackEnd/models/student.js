const mongoose= require('mongoose');

const Shema= mongoose.Schema;

const studentSchema= new Shema({
    name: {
        type : String,
        required: true
    },
    age: {
        type : Number,
        required: true
    },
    gender : {
        type : String,
        required: true
    }
});

const Student = mongoose.model('Student', studentSchema);

module.exports= Student;