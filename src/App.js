import React from "react";
import {useFormik} from "formik";
// TODO: import useFormik from formik library

function App() {
  
  const formik = useFormik({

    initialValues: {
      email: '',
      password: ''
    },

    onSubmit: values => {
     alert("Login Successful");
    },

    validate: values => {
      let errors = {};
      if(!values.email.includes('@')||!values.email.includes('.com')) errors.email = 'Username should be an email';
      if(!values.email) errors.email = 'field required';
      if(!values.password) errors.password = 'field required';
      if(values.password.length < 8 ||values.password.length > 12 ) errors.password = 'password should be 8-12 characters';
      return errors;

    }

  })
 
  return (
    <div >

    <form onSubmit={formik.handleSubmit}>
        

        <div>Email</div>
        <input 
        id = "emailField"
        name='email' 
        type='text' 
        onChange={formik.handleChange}
        value ={formik.values.email}/>
        
        {formik.errors.email ? (
        <div id="emailError" style={{color:'red'}}>
        {formik.errors.email}
        </div>
        ):null}

        <div>Password</div>
        <input 
        id ="pswField"
        name='password' 
        type='text' 
        onChange={formik.handleChange}
        value ={formik.values.password}/>

        <br />
        {formik.errors.password ? (
        <div id ="pswError" style={{color:'red'}}>
        {formik.errors.password}
        </div>)
        :null}

        <button id="submitBtn" type='submit'>
          Submit
        </button>
    </form>

    </div>
  );
}

export default App;
