import React from 'react'
import "./person.css"
export default function EditPatient({handleEditSubmit, selectedEditData}) {
  return (
    <>
    <span>
    <h3  id='editform' >EDIT FORM:</h3></span>
    <form id='editform1' onSubmit={(e)=>handleEditSubmit(e,selectedEditData.patient_id)}>
        Title <input type='text' name='first_name' defaultValue={selectedEditData.first_name}/>
        Message <input type='text' name='last_name' defaultValue={selectedEditData.last_name} />
        Date<input type='date' name='blood' defaultValue={selectedEditData.blood} />

        
        <button id='edit3' type='submit'>EDIT</button>
    </form>
    </>
  )
}
