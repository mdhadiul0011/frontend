import { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([])
  useEffect(()=> {
    async function userData (){
      const user_details = await axios.get("http://localhost:8000/")
      setData(user_details.data);
    }
    userData()
    
  })
  return (
    <div className="App">
      {
        data.map((item, i)=> (
          <div key={i}>
            <h2>hlw my name is {item.name}</h2>
            <h3>my id name is {item.id}</h3>
            <p>my address is {item.address}</p>
          </div>
        ))
      }
    </div>
  );
}

export default App;
