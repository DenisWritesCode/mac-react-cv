function Navbar({toggleVisibility, seeContact, seeWork, seeEducation, seeCompetencies, seeInterests }){
  function handleClick(eventID) {
    toggleVisibility(eventID);
  }

    return (
        <nav>
            <ul>
              <li>
                <button id="contact"
                  onClick={(e)=>{handleClick(e.target.id)}} >
                  {seeContact ? "D.E. Contact" : "Edit contact" }
                </button>
              </li>
              <li>
                <button id="work"
                  onClick={(e)=>{handleClick(e.target.id)}} >
{seeWork ? "D.E. Work" : "Edit Work" }
                </button>
              </li>
              <li>
                <button id="education"
                  onClick={(e)=>{handleClick(e.target.id)}} >
{seeEducation ? "D.E. education" : "Edit education" }
              </button>
              </li>
              <li>
                <button id="competencies"
                  onClick={(e)=>{handleClick(e.target.id)}} >
{seeCompetencies ? "D.E. competencies" : "Edit competencies" }
                </button>
              </li>
              <li>
                <button id="interests"
                  onClick={(e)=>{handleClick(e.target.id)}} >
{/* D.E. -> Done Editing */ seeInterests ? "D.E. interests" : "Edit interests" }
                </button>
              </li>
            </ul>
        </nav>

        )
};

export default Navbar;
