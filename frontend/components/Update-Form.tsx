import { useState } from 'react';
import React from 'react'; 

function UpdateForm(){
    const [updateFormData, setupdateFormData] = useState({
        uname: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setupdateFormData(prev => ({
          ...prev,
          [name]: value,
        }));
    };

    const handleUserUpdate = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', updateFormData);
        const res = await fetch('http://localhost:3000/user/UpdateUsers', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateFormData),
        });

        setupdateFormData({
            uname: '',
        });

        if(res.ok){
            console.log(`Form Sent Sucessfully`);
            console.log(res);
            
        } else {
            console.log("Form Did not sent Sucessfully")
        }       
    }

    return(
        <>
            <form onSubmit={handleUserUpdate}>
                <label> UserName:
                    <input type="text" name="uname" value={updateFormData.uname} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default UpdateForm;