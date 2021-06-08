import React from 'react'

export default function CreateWorkForm({hash, handleDelete}) {


    function handleCheck(element) {
        const endDate = document.querySelector(`#stopDate${hash}`); // Select stop date
    
        if(element.checked){
          endDate.classList.add("hidden");
        }
        else {
          element.classList.remove("hidden");
        }
    }

    function handleSubmit(e) {
      e.preventDefault();

      console.log(hash, " Submitted");
      
    }

    // When delete btn is pressed
    function callHandleDelete(elementHash) {
      handleDelete(elementHash);
    }

    return (
        <div>
            <form action="#" onSubmit={handleSubmit}>
            <label htmlFor="">
                <p>Job Title: </p>
                <input type="text" name="jobTitle" id="jobTitle" />
              </label>
              <label htmlFor="organisation">
                <p>Organisation: </p>
                <input type="text" name="organisation" id="organisation" />
              </label>
              <label htmlFor="startDate">
                <p>Start Date: </p>
                <input type="month" name="startDate" id="startDate" />
              </label>
              <label htmlFor="workHere">
                <p>Currently work here: </p>
                <input type="checkbox" name="workHere" id="workHere" onClick={(e) => handleCheck(e.target)} />
              </label>
              <label htmlFor="stopDate" id={`stopDate${hash}`}>
                <p>Stop Date: </p>
                <input type="month" name="stopDate" id="stopDate" />
              </label>
              <label htmlFor="">
                <p>Job Description: </p>
                <input type="text" name="" id="" />
              </label>
              <button type="submit">Done</button>
              <button onClick={()=> {callHandleDelete(hash)}}>Delete {hash}</button>
            </form>
            <hr />
        </div>
    )
}
