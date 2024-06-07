import React from 'react'
import Naevebar from './Naevebar'

const Delete = () => {
  return (
    <div>
         <Naevebar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">STUDENT ADMISSION NUMBER</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                       <center> <button className="btn btn-danger">DELETE</button></center>
                       <center><h1>thank you</h1></center>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Delete
