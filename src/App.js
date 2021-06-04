import {useState} from 'react';

import Navbar from './Components/Navbar.js';

function App() {

  const [seeContact, setSeeContact] = useState(false);
  const [seeWork, setSeeWork] = useState(false);
  const [seeEducation, setSeeEducation] = useState(false);
  const [seeCompetencies, setSeeCompetencies] = useState(false);
  const [seeInterests, setSeeInterests] = useState(false);

  function toggleVisibility(section) {
    switch (section) {
      case 'contact':
        setSeeContact((prev) => !prev); // Toggle from Visible to NotVisible.
        //setSeeContact(!seeContact);
        break;
      case 'work':
        setSeeWork((prev) => !prev);
        break;
      case 'education':
        setSeeEducation((prev) => !prev);
        break;
      case 'competencies':
        setSeeCompetencies((prev) => !prev);
        break;
      case 'interests':
        setSeeInterests((prev) => !prev);
        break;
      default:
        console.log("The gods must be crazy");
    }
  }

  return (
    <div className="App">
      <Navbar toggleVisibility={toggleVisibility} />
      <hr/>
      <h2 className="sectionHeading">CV Editing Pad</h2>
      {seeContact && <p>Contact Details</p> }

      {seeWork && <p>Work Experience</p> }

      {seeEducation && <p>Education History</p> }

      {seeCompetencies && <p>Competencies</p> }
      {seeInterests && <p>Other Interests</p> }
      <hr/>

      <section className="displayCV">
      <h2 className="sectionHeading">CV Render</h2>
        {!seeContact && <p>Contact CV Part</p>}
        {!seeWork && <p>Work CV Part</p> }
        {!seeEducation && <p>Education CV Part</p> }
        {!seeCompetencies && <p>Competencies CV Part</p> }
        {!seeInterests && <p>Interests CV Part</p> }
      </section>

    </div>
  );
}

export default App;
