
import React, {useState} from 'react';
import './Example.css';

const Example = (props) => {


  const [list,setlist]=useState([]);
   const [input,setinput]=useState('');
  
  function change(e){
        temp=e.target.value;
  }


  function add(){
    setlist((prev)=>[...prev,input]);
  }
    
  return (
    <div>
          <input type="text" onChange={change} />

          <button onClick={add}>Add</button>

          <ul>
            {
              list.map((ele)=>{
                     return(
                      <li>{ele}</li>
                     );
              })
            }
          </ul>
    </div>
  );
}

export default Example;