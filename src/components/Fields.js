import React from 'react'

export default function Fields() {
  return (
    <div>
        <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          className="form-control"
        
        />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          className="form-control"
         
        />
      </div>
      <div className="form-group">
        <label>E-mail</label>
        <input
          type="text"
          className="form-control"

        
        />
      </div>
     
      <button className="btn btn-primary" >
        Submit
      </button>
    </div>
  )
}
