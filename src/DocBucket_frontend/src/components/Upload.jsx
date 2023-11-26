import React, { useState } from 'react';
import { BrowserRouter, Link, Routes, Route } from '../../../../node_modules/react-router-dom/dist/index';
import { DocBucket_backend } from '../../../declarations/DocBucket_backend';


const Upload = () => {

 

  const [formData, setFormData] = useState({
    name: '',
    stream: '',
    registrationno: '',
    cgpa: '',
    degree: '',
    passoutyear: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = async (e) => {

    setIsSubmitted(true);
    e.preventDefault()
    try {
      const data = await DocBucket_backend.create_profile(formData);
    }
    catch (err) {
      console.log(err);
    }
  }


  return (
    <div className="upload">
      <div className="bubble1"></div>
      <div className="bubble2"></div>
      

      <div className="formm-container">
        <form>
          <div className="formm-group">
            <label for="name">Name:</label>
            <input value={formData.name} onChange={handleChange} type="text" id="name" name="name" required/>
          </div>
          <div className="formm-group">
            <label for="stream">Stream:</label>
            <input value={formData.stream} onChange={handleChange} type="text" id="stream" name="stream" required/>
          </div>
          <div className="formm-group">
            <label for="degree">Degree:</label>
            <input value={formData.degree} onChange={handleChange} type="text" id="degree" name="degree" required/>
          </div>
          
          <div className="formm-group">
            <label for="cgpa">Registration Number:</label>
            <input value={formData.registrationno} onChange={handleChange} type="number" id="registrationno" name="registrationno" required/>
          </div>
          <div className="formm-group">
            <label for="cgpa">CGPA:</label>
            <input value={formData.cgpa} onChange={handleChange} type="number" id="cgpa" name="cgpa" required/>
          </div>
          <div className="formm-group">
            <label for="cgpa">Passout Year:</label>
            <input value={formData.passoutyear} onChange={handleChange} type="number" id="passoutyear" name="passoutyear" required/>
          </div>
          
          <div className="formm-group">
            <button onClick={submitHandler} type="submit">Submit</button>
          </div>
        {isSubmitted && <h1>Data Uploaded Successfully</h1>}
        </form>
      </div>

    </div>
  )
}

export default Upload