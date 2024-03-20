import React, { useState } from "react";

// Functional component to display contact form
const Contact = () => {
  const[formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if(!formData.name || !formData.email || !formData.message){
      alert('Please fill all the fields');
      return; 
     }
    }
  
    return (
      
<section className="container py-4 col-md-6 mb-4">
    <div className="contact">
      <form className="card p-3 mt-3">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" className="form-control border-0 p-3" onChange={handleChange} />
        </div>
        <div className="form-group"> 
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" className="form-control border-0 p-3"  onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" className="form-control border-0 p-5"  onChange={handleChange}></textarea>
        </div>
        <button type="submit" className="btn btn-primary p-3 mt-4 formButton" onClick={handleSubmit}>Submit</button>
     </form>
    </div>
  </section>  
    
  )
}

  export default Contact;