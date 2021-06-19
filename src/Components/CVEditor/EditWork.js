import { useState } from "react";

import CreateWorkForm from "./Creater/CreateWorkForm";

function EditWork({ setWork, work, toggleVisibility }) {
  console.log(work);

  // Array of objects. objects 

  const [workData, setWorkData] = useState(work); // What is looked out at when rendered
  const [finalData, setFinalData] = useState([]) // Will be send to state

  function makeWork(hash) {
    return {
      index: hash,
      jobTitle: " ",
      organisation: " ",
      startDate: "2021-01",
      workHere: false,
      stopDate: "2021-01",
      jobDescription: " ",
    };
  }

  // Adds new work object to array
  function handleAddWork() {
    if (workData.length === 0) {
      // If workData is empty, append freshState.
      const freshState = makeWork(0);
      setWorkData([{ ...freshState }]);
    } else {
      const lastElement = workData.length - 1; // Select our last object
      const lastHash = workData[lastElement].index; // Get the index of selected object
      const newWorkData = makeWork(lastHash + 1); // Make new object with incremented index
      setWorkData([...workData, newWorkData]); // Change state by appending new work Data
    }
  }

  function handleDelete(hash) {
    // filter creates a new array with all enements that pass the test implemented by the provided function.
    setWorkData((hashArray) =>
      hashArray.filter((element) => hash !== element.index)
    ); // Delete the selected element.
  }

  function handleDoneEditing() {
    setWork(finalData);
    
  }

  // Use hash(index) to splice data in.
  // Replace the old version of our data with the new one. It's an array.
  // Going home.
  function appendData(data) {
    setFinalData([...finalData, data]); // Take what was already there and add the new data
  }

  return (
    <div className="">
      {workData.map((hash) => {
        return (
          <CreateWorkForm
            key={hash.index}
            data={hash}
            handleDelete={handleDelete}
            appendData={appendData}
          />
        );
      })}
      <button onClick={handleAddWork}>Add Work</button>
      <button onClick={handleDoneEditing}>Done Editing</button>
    </div>
  );
}

export default EditWork;
