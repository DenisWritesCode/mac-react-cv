import { useState } from "react";

import CreateWorkForm from "./Creater/CreateWorkForm";

function EditWork({ setWork, toggleVisibility }) {
  const [hashCount, setHashCount] = useState([0]); //Should be an object

  // Adds count to array
  function handleAddEducation() {

    if(hashCount.length === 0) {
      // If hashCount is empty, append 0.
      setHashCount([0]); // An object
    } else {
      const lastElement = hashCount.length - 1;
      const lastHash = hashCount[lastElement];
      setHashCount([...hashCount, lastHash + 1]);
    }
  }

  function handleDelete(hash) {
    // filter creates a new array with all enements that pass the test implemented by the provided function.
    setHashCount((hashArray) => hashArray.filter((element) => hash !== element)); // Delete the selected element.
    if (hashCount.length < 1) {
      hashCount.push(0);
      console.log("Pushed: ",hashCount);
    }
  }

  return (
    <div className="">
      {hashCount.map((hash) => {
        return (
          <CreateWorkForm key={hash} hash={hash} handleDelete={handleDelete} />
        );
      })}
      <button onClick={handleAddEducation}>Add Education</button>
    </div>
  );
}

export default EditWork;
