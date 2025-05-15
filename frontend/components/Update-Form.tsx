import { useState } from 'react';
import React from 'react'; 

function UpdateForm(){
    const [updateFormData, setupdateFormData] = useState({
        uname: '',
    });

    const [SucessMessage, SetSucessMessage] = useState('');

    const [updatedetails, setupdatedetails] = useState({
        username: '',
        firstname: '',
        lastname: '',
        address: '',
        zipcode: '',
        state: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setupdateFormData(prev => ({
          ...prev,
          [name]: value,
        }));

        setupdatedetails(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleUserUpdate = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', updateFormData);
        const res = await fetch('http://localhost:3000/user/pulluser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateFormData),
        });

        setupdateFormData({
            uname: '',
        });

        if(res.ok){
            SetSucessMessage('Users Data pulled successfully!');
            console.log(`Form Sent Sucessfully`);
            const data = await res.json();
            setupdatedetails({
                username: data.Username,
                firstname: data.FirstName,
                lastname: data.LastName,
                address: data.Address,
                zipcode: data.ZipCode,
                state: data.State
            });
            const updatingForm = document.getElementById("UserUpdateForm");
            (updatingForm as HTMLElement).style.display = "block";
        } else {
            SetSucessMessage('Incorrect Username Please try again');
            console.log("Form Did not sent Sucessfully")
        }       
    }

    const Updated_Form_Entry = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Update Form Submitted', updatedetails);
        const res = await fetch('http://localhost:3000/user/UpdateUser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedetails),
        });

        setupdatedetails({
            username: '',
            firstname: '',
            lastname: '',
            address: '',
            zipcode: '',
            state: ''
        });

        if(res.ok){
            console.log(`Form Sent Sucessfully`);
            SetSucessMessage('Users data updated successfully!');

            const data = await res.json();
            console.log(data);
            
        } else {
            console.log("Form Did not sent Sucessfully")
            SetSucessMessage('Users data failed to updated successfully!');
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

            <div style = {{display:"None"}} id = "UserUpdateForm">
                <form onSubmit={Updated_Form_Entry}>
                    <label> Firstname: 
                        <input type="text" name="firstname" value={updatedetails.firstname} onChange={handleChange} />
                    </label>
                    <label> Lastname: 
                        <input type="text" name="lastname" value={updatedetails.lastname} onChange={handleChange} />
                    </label>
                    <label> Address: 
                        <input type="text" name="address" value={updatedetails.address} onChange={handleChange} placeholder='No Address Added'/>
                    </label>
                    <label> Zipcode: 
                        <input type="text" name="zipcode" value={updatedetails.zipcode} onChange={handleChange} placeholder='No Zipcode Added'/>
                    </label>
                    <label> State: 
                        <input type="text" name="state" value={updatedetails.state} onChange={handleChange} placeholder='No State Added'/>
                    </label>
                    <button type = "submit">Submit</button>
                </form>

            </div>

            <div id = "SucessMessage">
                {/* ✅ Show message below the form */}
                {SucessMessage && <p>{SucessMessage}</p>}
            </div>
        </>
    );
}

export default UpdateForm;