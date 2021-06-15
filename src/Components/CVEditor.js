import EditContact from './CVEditor/EditContact.js';
import EditWork from './CVEditor/EditWork.js';
import EditEducation from './CVEditor/EditEducation.js';
import EditCompetencies from './CVEditor/EditCompetencies.js';
import EditInterests from './CVEditor/EditInterests.js';


function CVEditor({ seeContact, seeWork, seeEducation, seeCompetencies, seeInterests, contact, setContact, work, setWork, toggleVisibility}) {
  return (
    <div className="cvEditor">
      {seeContact && <EditContact contact={contact} setContact={setContact} toggleVisibility={toggleVisibility} /> }
      {seeWork && <EditWork work={work} setWork={setWork} toggleVisibility={toggleVisibility} /> }
      {seeEducation && <EditEducation /> }
      {seeCompetencies && <EditCompetencies /> }
      {seeInterests && <EditInterests /> }
    </div>
  )
};

export default CVEditor;
