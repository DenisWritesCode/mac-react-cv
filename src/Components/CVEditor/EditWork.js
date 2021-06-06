import {useState} from 'react';

import CreateWorkForm from './CreateWorkForm';

function EditWork({setWork, toggleVisibility}) {

  const [hashCount, setHashCount] = useState([0]);

  function handleSubmit(e) {
    e.preventDefault();
  };

  function handleAddEducation(){
   
    const lastElement = hashCount.length - 1;
    const lastHash = hashCount[lastElement];
    const newElement = lastHash + 1

    setHashCount([...hashCount, newElement]);
  };

  function handleCurrent(element) {
    const endDate = document.querySelector("#stopDateLabel"); // Select stop date

    if(element.checked){
      endDate.classList.add("hidden");
    }
    else {
      endDate.classList.remove("hidden");
    }
  }

  return (
    <div className="">
      {hashCount.map((hash) => {
        return(
          <CreateWorkForm hash={hash} />
        )
      })}
      <button onClick={handleAddEducation}>Add Education</button>
    </div> 
  );
}

export default EditWork;
