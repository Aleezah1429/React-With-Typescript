import React, { useState } from 'react';
import './App.css';

interface FormInterface {
    name: string;
    age: number;
}

const defaultFormvalue = {
    name: "",
    age: 0,
}

function Form() {
    const [userForm, setuserForm] = useState<FormInterface>(defaultFormvalue)

    // function for all name
    function FormName(e:any) {
        setuserForm({
            ...userForm,
            name: e.target.value,
        })
    }

     // function for all age
     function FormAge(e:any) {
        setuserForm({
            ...userForm,
            age: e.target.value,
        })
    }

    function SubmitForm() {
        console.log("form ==> ", userForm)
    }


    return (
        <div>
            <input type="text" value={userForm.name} onChange={FormName} placeholder="Enter Name" />
            <input type="number" value={userForm.age} onChange={FormAge} placeholder="Enter Age" />
            <button onClick={SubmitForm}>Submit</button>
        </div>

    )
}



export default Form;
