import {useState} from 'react';

import DetailsForm from './Components/DetailsForm.js';
import RenderCV from './Components/RenderCV.js';

function App() {

  const [personalData, setPersonalData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  return (
    <div className="App">
      <p>React setup</p>
      <DetailsForm 
        setPersonalData={setPersonalData} 
        personalData={personalData} 
      />
      <RenderCV 
        personalData={personalData} 
        setPersonalData={setPersonalData} 
        />
    </div>
  );
}

export default App;
