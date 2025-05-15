import { useState } from 'react';
import React from 'react'; 

function DeleteUserForm(){
    const [formData, SetFormData] = useState({
        uname: '',
    })

    const [SucessMessage, SetSucessMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        SetFormData(prev => ({
          ...prev,
          [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await fetch('http://localhost:3000/user/DeleteUser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        SetFormData({
            uname : '',
        });

        if(res.ok){
            SetSucessMessage('Users data deleted successfully!');
            console.log("User has been sucessfully deleted");
        } else {
            SetSucessMessage('User has not been sucessfully deleted');
            console.log("User has not been sucessfully deleted");
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label> UserName:
                    <input type="text" name="uname" value={formData.uname} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>

            <div id = "SucessMessage">
                {/* ✅ Show message below the form */}
                {SucessMessage && <p>{SucessMessage}</p>}
            </div>
        </>
    )
}

export default DeleteUserForm;