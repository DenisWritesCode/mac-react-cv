function RenderCV ({personalData, editData}) {
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