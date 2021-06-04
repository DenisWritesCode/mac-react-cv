import {useState, useEffect} from 'react';

function DetailsForm ({setPersonalData, personalData }) {
    const [name, setName] = useState(' ');
    const [email, setEmail] = useState(' ');
    const [phoneNumber, setPhoneNumber] = useState(' ');

    useEffect(()=>{     
        setName(personalData.name);
        setEmail(personalData.email);
        setPhoneNumber(personalData.phoneNumber);
    }, [personalData])

    function handleSubmit(e){
        e.preventDefault();

        // Record Data
        setPersonalData({
            name,
            email,
            phoneNumber
        });    
        
        // Reset the inputs after recording Data
        setName(' ');
        console.log("Use Set");
        setEmail(' ');
        setPhoneNumber(' ');
    }

    function handleChange(target) {
        const field = target.name;
        const value = target.value;

        switch(field) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'phoneNumber':
                setPhoneNumber(value);
                break;
            default:
                console.log("The Gods Must Be Crazy");
        }
    }

    return (
        <form action="#" onSubmit={handleSubmit}>
            <label htmlFor="name"><p>Name: </p>
                <input type="text" name="name" id="name" value={name} onChange={(e) => {handleChange(e.target)}} />
            </label>
            <label htmlFor="email"><p>Email: </p>
                <input type="email" name="email" id="email" value={email} onChange={(e) => {handleChange(e.target)}} />
            </label>
            <label htmlFor="name"><p>Phone Number: </p>
                <input type="text" name="phoneNumber" id="phoneNumber" value={phoneNumber} onChange={(e) => {handleChange(e.target)}} />
            </label>
            <input type="submit" value="Submit" />
        </form>
        )
}

export default DetailsForm;