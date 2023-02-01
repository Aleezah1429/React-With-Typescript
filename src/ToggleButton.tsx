import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

  // sum function with props types
  interface IProps {
    name: string;
  }

  function ToggleBtn(props: IProps) {
    const [] = useState(false);
    return (
      <>
        {props.name}
      </>
    )
  }



export default ToggleBtn;
