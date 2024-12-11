import {useEffect,useState} from "react";
import './style.css';

function App() {
  const [formData, setFormData]=useState({
    firstName:"",
    lastName:"",
    country:"",
    address:"",
    phone:"",
  });

  const[errors,setErrors]=useState({});
  const handleChange=(e)=>{
    const{name,value}=e.target;
    setFormData({
      ...formData,[name]:value,
    });
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    const newErrors={};
    Objects.keys(formData).forEach((key)=>{
      if(!formData[key]){
        newErrors[key]=`${key} is required`;
      }
    });
    if(formData.phone && !/^\d+$/.test(formData.phone))
    {
      newErrors.phone="Phone number must be numeric";
    }
    setErrors(newErrors);
    if(Object.keys(newErrors).length===0)
    {
      alert("Form submitted successfully!");setFormData({firstName:"",lastName:"",country:"",address:"",phone:"",});
    }

  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label><input type="text" name="firstName" value={formData.firstName} onChange={handleChange}/>
        {errors.firstName && <span className="error">{errors.firstName}</span>}
        <label>Last Name:</label><input type="text" name="lastName" value={formData.lastName} onChange={handleChange}/>
        {errors.lastName && <span className="error">{errors.lastName}</span>}
        <label>Country:</label>
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="">Select a country</option> 
          <option value="USA">USA</option> 
          <option value="India">India</option> 
          <option value="Canada">Canada</option>
        </select>
        {errors.country && <span className="error">{errors.country}</span>}
        <label>Address:</label><input type="text" name="address" value={formData.address} onChange={handleChange}/>
        {errors.address && <span className="error">{errors.address}</span>}
        <label>Phone No:</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange}/>
        {errors.phone && <span className="error">{errors.phone}</span>}
        <button type="submit">Send</button> 
        
      </form>

    </div>
  );
}

export default App;
