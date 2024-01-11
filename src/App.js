
import './App.css';
import { useState } from 'react';

function App() {
  const [title, settitle] = useState("");
  const [taxk, settaxk] = useState([])
  const submit_hendeler=(e)=>{
      e.preventDefault()
      settaxk([...taxk,{title}])
      settitle("")
      console.log(taxk)
  }
  const delete_handeler = (i) =>{
       let copyTask=[...taxk]
       copyTask.splice(i,1)
       settaxk(copyTask)
  }
  let rendering=<h2>you dont have any wish</h2>
  if(taxk.length>0){
    rendering = taxk.map(function(t,i){
      return<div key={i}>
        <h4>{t.title}</h4>
        <button  onClick={()=>{delete_handeler(i)}}>delete</button>
      </div> 
     
    })
  }
  return (
    <>
    <h1>MY-TODO-LIST</h1>
      <form onSubmit={submit_hendeler}>
        <input type="text" id="inputbox" placeholder="text your wish" value={title}
        onChange={(e)=>{settitle(e.target.value)}}></input>
        <button id="btn" >add</button>
      </form>
      <hr/>
      <div id="render">
      <ul>
         {rendering}
      </ul>
      </div>
    </>
  );
}

export default App;
