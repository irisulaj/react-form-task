import React,{useState} from 'react'
import Fields from './Fields'
export default function Form() {
  const [formInfo,setFormInfo]=useState({
    firstname: "",
    lastname: "",
    email: "",
    hobbies: [],
  
  })
  const [emailErr,setEmailErr]=useState(false)
  const [displayFieldValue,setDisplayFieldValue]=useState(false)
  const handleFieldsChange = (e) =>{
    setFormInfo({
      ...formInfo,
      [e.target.name]:e.target.value
    })
    setEmailErr(false)

  }
  const handleHobbiesChange = (hobby) =>{
    setFormInfo({
      ...formInfo,
      hobbies:hobby
    })
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    const validate = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!validate.test(formInfo.email)){
      setEmailErr(true)
      return;
    }
    if(Object.keys(formInfo).length != 0){
      setDisplayFieldValue(true)
    }
   
  }
  return (
    <div className="row">
       <div className="col-md-6">
        <Fields
         formInfo={formInfo}
         handleFieldsChange={handleFieldsChange}
         handleHobbiesChange={handleHobbiesChange}
         handleSubmit={handleSubmit}
         emailErr={emailErr}
         />
         
      </div>
      <div className="col-md-6">
        {displayFieldValue ? JSON.stringify(formInfo,null,3) : null }
      </div>
    </div>
  )
}
