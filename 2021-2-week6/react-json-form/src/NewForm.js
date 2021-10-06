import './App.css';
import React,{useState, Component} from 'react';
import Form from "@rjsf/core";
import * as App from "./App";

class NewForm extends Component{
  constructor(props) {
    super(props);
  }
  
  state = {
    editorValue:'',
    schema: ''
  };
  

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    if (nextProps.schema !== prevState.schema) {
      return { schema: nextProps.schema };
    }
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    // 숫자의 마지막 자리가 4면 리렌더링하지 않습니다
    return nextState.schema;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    this.setState({
      schema: JSON.parse(this.editorValue)
    });
  };

  render(){

    return(
      <div>
        <textarea className="json-editor"
          >{this.editorValue}</textarea>
        <Form className="new-form" schema={this.schema}/>
        <button onClick={this.handleClick}>폼 생성하기</button>
      </div>
    );
  }
}

export default NewForm;
