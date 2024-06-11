import React, { useState } from 'react'
import Naevebar from './Naevebar'

const SearchStudent = () => {
  const [data,setdata]=useState(
    {
      "admissionNumber":""
    }
  )

  const inputHandler=(event)=>{
    setdata({...data,[event.target.name] :event.target.value})
  }

  const readValue=()=>{
  console.log(data)
}
  return (
    <div>
         <Naevebar/>
      <div className="container">
        <div className="row">
        <h1><u>SEARCH HERE</u></h1>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">admission Number</label>
                        <input type="text" className="form-control"name='admissionNumber' value={data.admissionNumber} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                       <center> <button className="btn btn-primary" onClick={readValue}>SEARCH</button></center>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SearchStudent
