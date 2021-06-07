import React from 'react'

export default function CreateWorkForm({hash, handleDelete}) {


    function handleCurrent(hash) {
        const endDate = document.querySelector(`#stopDateLabel${hash}`); // Select stop date
    
        if(endDate.checked){
          endDate.classList.add("hidden");
        }
        else {
          endDate.classList.remove("hidden");
        }
    }

    // When delete btn is pressed
    function callHandleDelete(elementHash) {
      handleDelete(elementHash);
    }

    return (
        <div>
          <p>Hash: {hash}</p>
          <button onClick={()=> {callHandleDelete(hash)}}>Delete {hash}</button>
          <hr />
            <form action="#">

            </form>
        </div>
    )
}
