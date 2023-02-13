import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test';
import ToggleBtn from './ToggleButton';
import Form from './Form';

function App() {

  // // sum function with types
  // function Sum(x: number, y: number) {
  //   return x + y
  // }

  // console.log("sum => ", Sum(2, 5))


  // // sum function with props types
  // interface sumProps {
  //   a: number;
  //   b: number;
  // }

  // function SumWithProps(props: sumProps) {
  //   return (
  //     <>
  //       {props.a + props.b}
  //     </>
  //   )
  // }


  return (
    <div className="App">

      {/* <SumWithProps a={5} b={10} /> */}


      <Test name='Aleezah' />
      <ToggleBtn />
      <Form />


    </div>
  );
}

export default App;
