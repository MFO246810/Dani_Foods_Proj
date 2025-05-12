import { useState, useEffect } from 'react';

function App() {
  const [api_call, SetApiCall] = useState("Not Worked"); 

  useEffect(() => {
    const fetchdata = async () => {
      try{
        const response = await fetch('/Api_test');
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

  return <p>filler: {api_call}</p>;
}

export default App;
