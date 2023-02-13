import React, { useState } from 'react';
import './App.css';

  function ToggleBtn() {
    const [checked, setChecked] = useState(false);

    return (
      <div>
        <input type="checkbox" checked={checked} onClick={(e:any)=> setChecked(e.target.checked)} />
        Toggle with state
      </div>
    )
  }



export default ToggleBtn;
