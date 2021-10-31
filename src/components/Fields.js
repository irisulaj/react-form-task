import React from 'react'
import Select from "react-select";

export default function Fields(props) {
  const {formInfo,handleFieldsChange,handleHobbiesChange,handleSubmit,emailErr}=props;

  const options = [{
    label:'football',
    value:'football,'
  },
  {
    label:'baseball',
    value:'baseball,'
  },
  {
    label:'tennis',
    value:'tennis,'
  },
  {
    label:'swimming',
    value:'swimming,'
  },


]
  return (
    <div>
        <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          className="form-control"
          name="firstname"
          value={formInfo.firstname.replace(/[^a-z ]/g, "")}
          onChange={handleFieldsChange}
        />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          className="form-control"
          name="lastname"
          value={formInfo.lastname.replace(/[^a-z ]/g, "")}
          onChange={handleFieldsChange}
        />
      </div>
      <div className="form-group">
        <label>E-mail</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={formInfo.email}
          onChange={handleFieldsChange}
        
        />
        {console.log({emailErr})}
        {emailErr && <div className="alert">
          <p>Email should be in correct format!</p>
          </div>}
      </div>
      <div className="form-group">
        <label>Hobbies</label>
        <Select
          options={options}
          isMulti
          onChange={(el)=>handleHobbiesChange(el)}
        />
        {console.log(formInfo,'formInfo')}
      </div>
      <button className="btn btn-success" onClick={handleSubmit} >
        Submit
      </button>
    </div>
  )
}
