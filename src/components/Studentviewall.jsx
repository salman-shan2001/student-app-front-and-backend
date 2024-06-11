import React, { useEffect, useState } from 'react'
import Naevebar from './Naevebar'
import axios from 'axios'

const Studentviewall = () => {

    const [data, changeData] = useState([])
    const fetchData = () => {
        axios.get("http://localhost:8083/view").then(
            (reponse) => {
                changeData(reponse.data)
            }
        ).catch().finally()
    }
useEffect(()=>{fetchData()},[])

    return (
        <div>
            <Naevebar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-s-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <center>
                                <h1><u>STUDENT DETAILS</u></h1>
                            </center>
                            {
                                data.map(
                                    (value, index) => {
                                        return <div className="col col-12 col-sm-6 col-md-4 col col-lg-3 col-xl-3 col-xxl-3">
                                            <div class="card" >
                                                <img src="https://t4.ftcdn.net/jpg/02/53/51/67/360_F_253516705_TdhWJkxcWVdmfFEJPDJ3blMds3Oqx1tH.jpg" class="card-img-top" alt="..."></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">{value.name}</h5>
                                                    <p className="card-text">rollno:{value.rollno}</p>
                                                    <a href="#" class="btn btn-primary">{value.age}</a>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                )
                            }


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Studentviewall
