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

  const validateField=(name,value)=>{
    let error="";
    if(!value){
      error=`${name} is required`;
    }else if (name==="phone" && !/^\d+$/.test(value))
    {
      error="Phone number must be numeric";
    }
    return error;
  };

  const handleChange=(e)=>{
    const{name,value}=e.target;

    setFormData({
      ...formData,[name]:value,
    });

    const fieldError=validateField(name,value);
    setErrors({
      ...errors,[name]:fieldError,
    });
  };

  const handleSubmit=(e)=>{
    e.preventDefault();

    const newErrors={};

  Object.keys(formData).forEach((key)=>{
      const error=validateField(key,formData[key]);
      if(error){
        newErrors[key]=error;
      }
    });
    setErrors(newErrors);
    if(Object.keys(newErrors).length===0)
    {
      alert("Form submitted successfully!");setFormData({firstName:"",lastName:"",country:"",address:"",phone:"",});
    }

  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        
        <div className="form-group">
        <label>First Name:</label><input type="text" name="firstName" value={formData.firstName} onChange={handleChange}/>
        {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>

        <div className="form-group">
        <label>Last Name:</label><input type="text" name="lastName" value={formData.lastName} onChange={handleChange}/>
        {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
        
        <div className="form-group">
        <label>Country:</label>
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="">Select a country</option> 
          <option value="USA">USA</option> 
          <option value="India">India</option> 
          <option value="Canada">Canada</option>
        </select>
        {errors.country && <span className="error">{errors.country}</span>}
        </div>
        
        <div className="form-group">  
        <label>Address:</label><input type="text" name="address" value={formData.address} onChange={handleChange}/>
        {errors.address && <span className="error">{errors.address}</span>}
        </div>

        <div className="form-group">
        <label>Phone No:</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange}/>
        {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        
        <button type="submit" className="submit-button">Send</button> 
      </form>

    </div>
  );
}

export default App;
