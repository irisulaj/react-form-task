import React,{useState} from 'react'
import Fields from './Fields'
export default function Form() {
  const [formInfo,setFormInfo]=useState({
    firstname: "",
    lastname: "",
    email: "",
    hobbies: [],
  
  })
  return (
    <div className="row">
       <div className="col-md-6">
        <Fields/>
      </div>
      <div className="col-md-6">
        2
      </div>
    </div>
  )
}
