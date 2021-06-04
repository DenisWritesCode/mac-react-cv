function RenderCV ({personalData, setPersonalData}) {

    function editData() {
    const name = document.querySelector("input#name");
    const email = document.querySelector("input#email");
    const phoneNumber = document.querySelector("input#phoneNumber");

    name.value = personalData.name;
    email.value = personalData.email;
    phoneNumber.value = personalData.phoneNumber;

    setPersonalData({...personalData});
  }

    return (
        <div>
            <hr />
            <p>Name: {personalData.name}</p>
            <p>Email: {personalData.email}</p>
            <p>Phone Number: {personalData.phoneNumber}</p>
            <button onClick={editData} > Edit </button>
        </div>
        )
}

export default RenderCV;