import {useState} from 'react';

import Navbar from './Components/Navbar.js';
import CVEditor from './Components/CVEditor.js';
import CVRender from './Components/CVRender.js';

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

  const data = {
    seeContact,
    seeWork,
    seeEducation,
    seeCompetencies,
    seeInterests
  };

  return (
    <div className="App">
      <Navbar toggleVisibility={toggleVisibility} {...data} />
      <hr/>
      <h2 className="sectionHeading">CV Editing Pad</h2>
      <CVEditor {...data} />
      <hr/>

      <section className="displayCV">
        <h2 className="sectionHeading">CV Render</h2>
        <CVRender {...data} />
      </section>

    </div>
  );
}

export default App;
