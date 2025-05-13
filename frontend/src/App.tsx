import { useState, useEffect } from 'react';
import React from 'react'
import ContactForm from '../components/Sign-up-form'

function App() {
  const [api_call, SetApiCall] = useState("Not Worked"); 

  useEffect(() => {
    const fetchdata = async () => {
      try{
        const response = await fetch('http://localhost:3000/user');
        if(!response.ok){
          throw new Error(`HTTP error status: ${response.status}`);
        }
        const Api_res = await response.text();
        console.log(Api_res);
        SetApiCall(Api_res);
      }
      catch (e){
        console.log(`Error: ${e}`)
      }
    };
    fetchdata();
  }, []);

  return (
  <div>
      <h3> Sign Up Form </h3>
      <ContactForm />

      <h3> </h3>
  </div>
);}

export default App;
