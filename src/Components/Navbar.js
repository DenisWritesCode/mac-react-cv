function Navbar({toggleVisibility}){
  function handleClick(eventID) {
    toggleVisibility(eventID);
  }

    return (
        <nav>
            <ul>
              <li>
                <button id="contact"
                  onClick={(e)=>{handleClick(e.target.id)}} >
                  Contact Details
                </button>
              </li>
              <li>
                <button id="work"
                  onClick={(e)=>{handleClick(e.target.id)}} >
                  Work Experience
                </button>
              </li>
              <li>
                <button id="education"
                  onClick={(e)=>{handleClick(e.target.id)}} >
                  Education Experience
              </button>
              </li>
              <li>
                <button id="competencies"
                  onClick={(e)=>{handleClick(e.target.id)}} >
                  Competencies
                </button>
              </li>
              <li>
                <button id="interests"
                  onClick={(e)=>{handleClick(e.target.id)}} >
                  Other Interests
                </button>
              </li>
            </ul>
        </nav>

        )
};

export default Navbar;
