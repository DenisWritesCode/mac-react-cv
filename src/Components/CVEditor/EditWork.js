import {useState} from 'react';

import CreateWorkForm from './Creater/CreateWorkForm';

function EditWork({setWork, toggleVisibility}) {

  const [hashCount, setHashCount] = useState([0]);

  function handleSubmit(e) {
    e.preventDefault();
  };

  // Adds count to array
  function handleAddEducation(){
   
    const lastElement = hashCount.length - 1;
    const lastHash = hashCount[lastElement];
    const newElement = lastHash + 1

    setHashCount([...hashCount, newElement]);
  };

  function handleDelete(hash) {
    // filter creates a new array with all enements that pass the test implemented by the provided function.
    setHashCount((hashArray) => hashArray.filter((element) => hash != element)); // Delete the selected element.
    console.log(hashCount);
  }
  

  return (
    <div className="">
      {hashCount.map((hash) => {
        return(
          <CreateWorkForm key={hash} hash={hash} handleDelete={handleDelete} />
        )
      })}
      <button onClick={handleAddEducation}>Add Education</button>
    </div> 
  );
}

export default EditWork;
