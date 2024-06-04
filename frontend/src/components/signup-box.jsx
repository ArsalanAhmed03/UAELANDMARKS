import React, { useEffect, useState } from 'react';
import '../styles/signup-styles.css';
import { useNavigate } from 'react-router-dom';

export default function Signupbox() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    repassword: '',
    fullname: '',
    phone: '',
    emirate: 'Abu Dhabi',
    city: '',
    address: '',
    pobox: '',
    nationality: '',
    dob: '',
    gender: 'Male',
    language: 'English'
  });

  const [messages, setMessages] = useState({
    email: '',
    pass: '',
    repass: ''
  });

  const [formState, setFormState] = useState({
    disableBtn: false,
    wrongEmail: false,
    wrongPass: false,
    mismatchPass: false
  });

  const navigate = useNavigate();

  useEffect(() => {
    const root = document.querySelector('#root');
    if (root) {
      root.style.display = 'flex';
      root.style.flexDirection = 'column';
      root.style.backgroundColor = 'rgb(234, 234, 234)';
    }
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const checkPassword = (e) => {
    const newPass = e.target.value;
    setFormData((prevState) => ({ ...prevState, password: newPass }));
    if (newPass.length < 8) {
      setMessages((prevState) => ({ ...prevState, pass: 'Password too short' }));
      setFormState((prevState) => ({ ...prevState, wrongPass: true, disableBtn: true }));
    } else {
      setMessages((prevState) => ({ ...prevState, pass: '' }));
      setFormState((prevState) => ({ ...prevState, wrongPass: false, disableBtn: false }));
    }
  };

  const checkEmail = async (e) => {
    const newEmail = e.target.value;
    setFormData((prevState) => ({ ...prevState, email: newEmail }));
    const response = await fetch('/validate-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: newEmail })
    });

    const result = await response.json();
    if (!response.ok) {
      console.log(result);
      setMessages((prevState) => ({ ...prevState, email: 'Email Already in use' }));
      setFormState((prevState) => ({ ...prevState, wrongEmail: true, disableBtn: true }));
    } else {
      setMessages((prevState) => ({ ...prevState, email: '' }));
      setFormState((prevState) => ({ ...prevState, wrongEmail: false, disableBtn: false }));
    }
  };

  const reenterPass = (e) => {
    const newPass = e.target.value;
    setFormData((prevState) => ({ ...prevState, repassword: newPass }));
    if (newPass.length !== 0 && newPass !== formData.password) {
      setMessages((prevState) => ({ ...prevState, repass: 'Password Doesn\'t match' }));
      setFormState((prevState) => ({ ...prevState, mismatchPass: true, disableBtn: true }));
    } else {
      setMessages((prevState) => ({ ...prevState, repass: '' }));
      setFormState((prevState) => ({ ...prevState, mismatchPass: false, disableBtn: false }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      console.log('Signup success');
      navigate('/');
    } else {
      console.log('Signup failed');
      window.location.reload();
    }
  };

  return (
    <div className="signup-container">
      <h2>Join Our Family</h2>
      <form id="signupform" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="fullname">Full Name</label>
          <input type="text" id="fullname" name="fullname" placeholder="Enter Your Full Name" required value={formData.fullname} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter Your Email" required value={formData.email} onChange={checkEmail} />
          {formState.wrongEmail && <div>{messages.email}</div>}
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter Your Password" required value={formData.password} onChange={checkPassword} />
          {formState.wrongPass && <div>{messages.pass}</div>}
        </div>
        <div className="input-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" name="repassword" placeholder="Confirm Your Password" required value={formData.repassword} onChange={reenterPass} />
          {formState.mismatchPass && <div>{messages.repass}</div>}
        </div>
        <div className="input-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="+971" required value={formData.phone} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="emirate">Emirate</label>
          <select id="emirate" name="emirate" required value={formData.emirate} onChange={handleChange}>
            <option value="Abu Dhabi">Abu Dhabi</option>
            <option value="Dubai">Dubai</option>
            <option value="Sharjah">Sharjah</option>
            <option value="Ajman">Ajman</option>
            <option value="Fujairah">Fujairah</option>
            <option value="Ras Al Khaimah">Ras Al Khaimah</option>
            <option value="Umm Al Quwain">Umm Al Quwain</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" required value={formData.city} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" required value={formData.address} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="pobox">PO Box</label>
          <input type="text" id="pobox" name="pobox" value={formData.pobox} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="nationality">Nationality</label>
          <input type="text" id="nationality" name="nationality" required value={formData.nationality} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" id="dob" name="dob" required value={formData.dob} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="gender">Gender</label>
          <select id="gender" name="gender" required value={formData.gender} onChange={handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="language">Preferred Language</label>
          <select id="language" name="language" required value={formData.language} onChange={handleChange}>
            <option value="English">English</option>
            <option value="Arabic">Arabic</option>
          </select>
        </div>
        <button id="signbtn" type="submit" disabled={formState.disableBtn}>Sign Up</button>
      </form>
    </div>
  );
}
