import { useState } from "react";

function App() {
     
    const [profile, setProfile] = useState({});

    const handleChange = ({target}) => {
        const {name, value} = target
        
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value
        }));
    } 

    // handleSubmit


    return (

        // form


    )
}