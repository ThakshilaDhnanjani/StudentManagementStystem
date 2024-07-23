import axios from "axios";
import React, { useState } from "react";


export default function AddStudent() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    function sentData(e){
        e.preventDefault();
        
        const newStudent={
            name,
            age,
            gender
        }
        axios.post("http://localhost:8070/student/add", newStudent).then(()=>{
            alert("Student Added");
            window.location.reload();
        }).catch((err)=>{
            alert(err);
        })

    }
    



    return (
        <div className="Container">

            <form onSubmit={sentData}>
            <div className="mb-3">
                <label for="name" className="form-label">Student Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter Students Name" onChange={(e) => {
                    setName(e.target.value);

                }}/>

            </div>

            <div className="mb-3">
                <label for="age" className="form-label">Age</label>
                <input type="number" className="form-control" id="age" placeholder="Enter Student's age" onChange={(e)=>{
                    setAge(e.target.value);
                }}/>
            </div>

            <div className="mb-3">
                <label for="gender" className="form-label">Gender</label>
                <input type="text" className="form-control" id="gender" placeholder="Enter Student's gender" onChange={(e)=>{
                    setGender(e.target.value);
                }}/>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )}