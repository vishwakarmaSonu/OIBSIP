import React from 'react'

export default function AddPatient({handleAddSubmit, handleCancelBtn}) {
  return (
    <>
    <h3 id='addform' >ADD FORM:</h3>
    <form id='addform2' onSubmit={handleAddSubmit}>
        Title<input type='text' name='first_name' />
        Message<input type='text' name='last_name' />
        Date<input type='date' name='blood' />
        <button id='sub' type='submit'>ADD</button>
        <button id='can' onClick={handleCancelBtn}>Cancel</button>

    </form>
    </>
  )
}
