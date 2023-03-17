import React, { useEffect, useState } from 'react'
import { getpatient, addpatient, editpatient , deletepatient} from '../services/ApiService'
import AddPatient from './AddPatient'
import EditPatient from './EditPatient'
import "./person.css"

export default function PatientList() {

const [patients, setPatients] = useState([])
const [showAddPatientForm, setShowAddPatientForm] = useState(false)
const [showEditPatientForm, setShowEditPatientForm] = useState(false)
const [selectedEditData, setSelectedEditData] = useState()

useEffect(() => {
    let mount = true
    getpatient()
    .then(res => {console.log("res from api", res)
        setPatients(res)
        return() => mount = false
    })
}, [])

const handleAddSubmit = (e) => {
    addpatient(e.target)
    .then(res => {
        setPatients(res)
    })
}

const handleEditBtn = (patient) => {
    setSelectedEditData(patient)
    console.log("patient selected is", patient)
    setShowEditPatientForm(true)
    setShowAddPatientForm(false)
}

const handleEditSubmit = (e, id) => {
    editpatient(id, e.target)
    .then(res => {
        setPatients(res)
    })
}
function handleCancelBtn() {
    setShowAddPatientForm(false)
}
const handleDeleteBtn = (id) => {
    deletepatient(id)
    .then(res => {
        setPatients(patients.filter(p=> p.patient_id !== id))
    })
}

  return (
    
    <>
       
  
  
     
    <table id='tab'  border={"1px"} cellPadding={"50px"}>
    <caption> <div id='todo'>
            
            <h1>TODO WEB APP</h1>
             </div>
             <div  id='add2'>
   {showAddPatientForm && <AddPatient handleAddSubmit={handleAddSubmit} handleCancelBtn = {handleCancelBtn}/>}

   </div>
   <button className='add' onClick={()=>setShowAddPatientForm(true)}><h3>Add</h3></button>
   <div id='edit2'>
   {showEditPatientForm && <EditPatient handleEditSubmit={handleEditSubmit} selectedEditData = {selectedEditData}/>}

   </div>
             
             </caption>
 
        <thead id='thead'>
            <tr>
                <td> <h3>Title </h3></td>
                <td><h3>Message</h3></td>
                <td><h3>Date</h3></td>
                <td><h3>Action</h3></td>
            </tr>
        </thead>
        <tbody>
          
            {patients.map(patient => {
                return <tr key={patient.patient_id}>
                <td> <b>{patient.first_name}</b></td>
                <td><b>{patient.last_name}</b></td>
                <td><b>{patient.blood}</b></td>
                <td><button id='edit' onClick={()=>handleEditBtn(patient)}><h3>Edit</h3>
                </button> <button id='delete' onClick={()=>handleDeleteBtn(patient.patient_id)}> <h3>Delete </h3></button>
                <button className='add' onClick={()=>setShowAddPatientForm(true)}><h3>Add</h3></button></td>
            </tr>
            })}
            
        </tbody>
    </table>
    
</>

  )
}
