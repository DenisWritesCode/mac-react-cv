import {useState} from 'react';

import DetailsForm from './Components/DetailsForm.js';
import RenderCV from './Components/RenderCV.js';

function App() {

  const [personalData, setPersonalData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const [data,setData] = useState(0);

  function editData() {
    const name = document.querySelector("input#name");
    const email = document.querySelector("input#email");
    const phoneNumber = document.querySelector("input#phoneNumber");

    name.value = personalData.name;
    email.value = personalData.email;
    phoneNumber.value = personalData.phoneNumber;

    setData( data+1);
  }

  return (
    <div className="App">
      <p>React setup</p>
      <DetailsForm setPersonalData={setPersonalData} personalData={personalData} data={data} />
      <RenderCV personalData={personalData} editData={editData} />
    </div>
  );
}

export default App;
