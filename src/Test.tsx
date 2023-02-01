import React from 'react';
import logo from './logo.svg';
import './App.css';

  // sum function with props types
  interface IProps {
    name: string;
  }

  function Test(props: IProps) {
    return (
      <>
        {props.name}
      </>
    )
  }



export default Test;
