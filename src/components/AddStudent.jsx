import React, { useState } from 'react'
import Naevebar from './Naevebar'
import axios from 'axios'

const AddStudent = () => {

    const [data,setData] = useState(
        {
            "name":"",
            "rollno":"",
            "admissionno":"",
            "college":""
        }
    )


    const inputHandler = (event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }

    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8083/add",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("student added successfuly")
                } else {
                    alert ("error")
                }
            }
        ).catch().finally()
    }

    return (
        <div>
            <Naevebar />
            <div className="container">
                <div className="row">
                    <center><h1><u>WELCOME TO FISAT</u></h1></center>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label" >Name</label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Addmission Number</label>
                                <input type="text" className="form-control" name='addmissionno' value={data.addmissionno} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Roll Number</label>
                                <input type="text" className="form-control" name='rollno' value={data.rollno} onChange={inputHandler} />
                            </div>
                            
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">college name</label>
                                <input type="text" className="form-control" name='college' value={data.college} onChange={inputHandler} />
                            </div>
                            
                            
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <center><button className="btn btn-success" onClick={readValue}>Register</button></center>                    </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddStudent
