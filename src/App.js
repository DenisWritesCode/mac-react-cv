import {useState} from 'react';

import Navbar from './Components/Navbar.js';
import CVEditor from './Components/CVEditor.js';
import CVRender from './Components/CVRender.js';

function App() {

  // Controls what components to show
  const [seeContact, setSeeContact] = useState(false);
  const [seeWork, setSeeWork] = useState(false);
  const [seeEducation, setSeeEducation] = useState(false);
  const [seeCompetencies, setSeeCompetencies] = useState(false);
  const [seeInterests, setSeeInterests] = useState(false);

  // Contact Data
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const [work, setWork] = useState([])

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

  // Variables for handling viewing the Data
  const viewData = {
    seeContact,
    seeWork,
    seeEducation,
    seeCompetencies,
    seeInterests
  };

  // Method for working with the State.
  const setMethods = {
    setContact,
    setWork
  };


  const userData = {
    contact,
    work
  }

  return (
    <div className="App">
      <Navbar toggleVisibility={toggleVisibility} {...viewData} />
      <hr/>
      <h2 className="sectionHeading">CV Editing Pad</h2>
      <CVEditor {...viewData} setContact={setContact} setWork={setWork} toggleVisibility={toggleVisibility} />
      <hr/>

      <section className="displayCV">
        <h2 className="sectionHeading">CV Render</h2>
        <CVRender {...viewData} {...userData} />
      </section>

    </div>
  );
}

export default App;
