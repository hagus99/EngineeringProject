import './App.css';
import React,{useState,Component} from 'react';
import Form from "@rjsf/core";
import PropTypes from 'prop-types';

function App() {
  const [clicked, setClicked] = useState(false);
  const [schema,setSchema] = useState();
  const onClickEnter = () => {
    setSchema(document.getElementById('json-editor').value);
    console.log("스키마",schema);
    setClicked(true);
  };

  function NewForm() {
    var myobj=JSON.parse(schema);
   
    return(
      <Form schema={myobj}/>
    );
  }

    const log = (type) => console.log.bind(console, type);
    
    
    return (
      <div className="App">
        <div className="container">
          <div className="editor-box" >
            <div className="editor-head"><h5>JSONSchema</h5></div> 
            <textarea className="json-editor" id="json-editor">{schema}</textarea>
            <div>
              <button className="btn btn-large btn-secondary create-btn" onClick={onClickEnter}>Create</button>
            </div>
          </div>
          <div className="new-form">
            {clicked? {schema}==' '? <div>No Content</div>:<NewForm/>:null}  
          </div> 
        </div>
      </div>
    
    );
}

export default App;

