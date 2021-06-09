import { useState } from "react";

import CreateWorkForm from "./Creater/CreateWorkForm";

function EditWork({ setWork, toggleVisibility }) {
  // const freshState = {
  //   index: 0,
  //   title: "",
  //   organisation: "",
  //   startDate: "",
  //   workHere: "",
  //   stopDate: "",
  //   jobDescription: "",
  // };
  const [hashCount, setHashCount] = useState([]); // Fresh start

  function makeWork(hash) {
    return {
      index: hash,
      title: "",
      organisation: "",
      startDate: "",
      workHere: "",
      stopDate: "",
      jobDescription: "",
    };
  }
  // Adds count to array
  function handleAddEducation() {
    if (hashCount.length === 0) {
      // If hashCount is empty, append freshState.
      const freshState = makeWork(0);
      setHashCount([{ ...freshState }]);
    } else {
      const lastElement = hashCount.length - 1; // Select our last object
      const lastHash = hashCount[lastElement].index; // Get the index of selected object
      const newWorkData = makeWork(lastHash + 1); // Make new object with incremented index
      setHashCount([...hashCount, newWorkData]); // Change state by appending new work Data
    }
  }

  function handleDelete(hash) {
    // filter creates a new array with all enements that pass the test implemented by the provided function.
    setHashCount((hashArray) =>
      hashArray.filter((element) => hash !== element.index)
    ); // Delete the selected element.
  }

  return (
    <div className="">
      {hashCount.map((hash) => {
        return (
          <CreateWorkForm
            key={hash.index}
            data={hash}
            handleDelete={handleDelete}
          />
        );
      })}
      <button onClick={handleAddEducation}>Add Education</button>
    </div>
  );
}

export default EditWork;
