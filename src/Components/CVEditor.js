import EditContact from './CVEditor/EditContact.js';
import EditWork from './CVEditor/EditWork.js';
import EditEducation from './CVEditor/EditEducation.js';
import EditCompetencies from './CVEditor/EditCompetencies.js';
import EditInterests from './CVEditor/EditInterests.js';


function CVEditor({ seeContact, seeWork, seeEducation, seeCompetencies, seeInterests, setContact, toggleVisibility}) {
  return (
    <div className="cvEditor">
      {seeContact && <EditContact setContact={setContact} toggleVisibility={toggleVisibility} /> }
      {seeWork && <EditWork /> }
      {seeEducation && <EditEducation /> }
      {seeCompetencies && <EditCompetencies /> }
      {seeInterests && <EditInterests /> }
    </div>
  )
};

export default CVEditor;
