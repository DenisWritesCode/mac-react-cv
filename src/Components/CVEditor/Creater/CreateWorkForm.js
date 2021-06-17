import React, { useState } from "react";

export default function CreateWorkForm({ data, handleDelete, appendData }) {
  const hash = data.index; // Makes every form unique

  const [jobTitle, setJobTitle] = useState(data.jobTitle);
  const [organisation, setOrganisation] = useState(" ");
  const [startDate, setStartDate] = useState("2021-01");
  const [stopDate, setStopDate] = useState("2021-01");
  const [jobDescription, setJobDescription] = useState(" ");
  const [workHere, setWorkHere] = useState(false);

  function handleChange(e) {
    const name = e.name;
    const value = e.value;

    switch (name) {
      case "jobTitle":
        setJobTitle(value);
        break;
      case "organisation":
        setOrganisation(value);
        break;
      case "startDate":
        setStartDate(value);
        break;
      case "workHere":
        setWorkHere((prevCheck) => !prevCheck);
        break;
      case "stopDate":
        setStopDate(value);
        break;
      case "jobDescription":
        setJobDescription(value);
        break;
      default:
        console.log("Something weird changed");
        break;
    }

    data = {
      index: hash,
      jobTitle: jobTitle,
      organisation: organisation,
      startDate: startDate,
      workHere: workHere,
      stopDate: stopDate,
      jobDescription: jobDescription,
    };

    appendData(data);

  }

  function handleSubmit(e) {
    e.preventDefault();

    const form = document.querySelector(`#form${hash}`);

    // Fill in this form's data.
    
    //form.classList.add("hidden"); // Take that form from the DOM.
  }

  // When delete btn is pressed
  function callHandleDelete() {
    handleDelete(hash);
  }

  return (
    <div>
      <form action="#" id={`form${hash}`} onSubmit={handleSubmit}>
        <label htmlFor="">
          <p>Job Title: </p>
          <input
            type="text"
            name="jobTitle"
            id="jobTitle"
            value={jobTitle}
            onChange={(e) => handleChange(e.target)}
          />
        </label>
        <label htmlFor="organisation">
          <p>Organisation: </p>
          <input
            type="text"
            name="organisation"
            id="organisation"
            value={organisation}
            onChange={(e) => handleChange(e.target)}
          />
        </label>
        <label htmlFor="startDate">
          <p>Start Date: </p>
          <input
            type="month"
            name="startDate"
            id="startDate"
            value={startDate}
            onChange={(e) => handleChange(e.target)}
          />
        </label>
        <label htmlFor="workHere">
          <p>Currently work here: </p>
          <input
            type="checkbox"
            name="workHere"
            id="workHere"
            checked={workHere}
            onChange={(e) => handleChange(e.target)}
          />
        </label>
        {/* If workHere is TRUE, show stopDate */}
        {!workHere && (
          <label htmlFor="stopDate" id={`stopDate${hash}`}>
            <p>Stop Date: </p>
            <input
              type="month"
              name="stopDate"
              id="stopDate"
              value={stopDate}
              onChange={(e) => handleChange(e.target)}
            />
          </label>
        )}
        <label htmlFor="">
          <p>Job Description: </p>
          <textarea
            name="jobDescription"
            id="jobDescription"
            value={jobDescription}
            onChange={(e) => handleChange(e.target)}
          />
        </label>

        <button
          type="button" // By default any button submits form. Add this to show this one is not supposed to submit.
          onClick={() => {
            callHandleDelete();
          }}
        >
          Delete {hash}
        </button>
        <br />
        <button type="submit">Done</button>
      </form>
      <hr />
    </div>
  );
}
