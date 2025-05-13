import { useState } from 'react';
import React from 'react'; 

function ContactForm(){
    const [formData, setFormData] = useState({
        FirstName : '',
        Lastname: '',
        username: '',
        password:'',
    });

    const [SucessMessage, SetSucessMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        const res = await fetch('http://localhost/3000/user/CreateUsers', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        setFormData({
            FirstName: '',
            Lastname: '',
            username: '',
            password: ''
        });

        if(res.ok){
            console.log("Form Sent Sucessfully");
            SetSucessMessage('Form submitted successfully!');
        } else {
            console.log("Form Did not sent Sucessfully")
            SetSucessMessage('Form submitted unsuccessfully!')
        }
        // You can now send formData to your backend API
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label> First Name:
                    <input type="text" name="FirstName" value={formData.FirstName} onChange={handleChange} />
                </label>
                <br />

                 <label> Last Name:
                    <input type="text" name="Lastname" value={formData.Lastname} onChange={handleChange} />
                </label>
                <br />
    
                <label>Username:
                    <input type="text" name="username" value={formData.username} onChange={handleChange} />
                </label>
                <br />
                <label>Password:
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                </label>
                <br />
    
                <button type="submit">Submit</button>
            </form>

            <div id = "SucessMessage">
                {/* ✅ Show message below the form */}
                {SucessMessage && <p>{SucessMessage}</p>}
            </div>
        </>

    );
}

export default ContactForm;