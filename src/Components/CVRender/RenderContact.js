export default function RenderContact({ seeContact, contact }) {

  return (
    <div>
      {!seeContact && (
        <section>
          <h2>Contact Info</h2>
          {!contact.name && !contact.email && !contact.phoneNumber && ( <p>You need to add something to display contact section.</p> )}
          {contact.name && (<p>Name: {contact.name} </p>)}
          {contact.email && (<p>Email: {contact.email} </p>)}
          {contact.phoneNumber && ( <p>Phone Number: {contact.phoneNumber}</p> )}
          <hr />
        </section>
      )}
    </div>
  );
}
