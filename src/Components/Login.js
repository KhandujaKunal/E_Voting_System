import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [voterId, setVoterId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpGenerated, setOtpGenerated] = useState(false);

  const handleGenerateOtp = () => {
    // Generate OTP logic can be implemented here
    console.log('Generating OTP...');
    setOtpGenerated(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic can be implemented here
    console.log('Form submitted');
  };
  return (
    <>
    
    <div className="login-form-container">
    {/* <h2 className='Heading'>Login Please</h2> */}
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          Voter ID:
          <input
            type="text"
            value={voterId}
            onChange={(e) => setVoterId(e.target.value)}
            required />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required />
        </label>
        {otpGenerated && (
          <label>
            OTP:
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </label>
        )}
        {!otpGenerated && (
          <button type="button" onClick={handleGenerateOtp}>
            Generate OTP
          </button>
        )}
        {otpGenerated && (
           <Link to="/Clist"><button type="submit">Submit</button></Link>
        )}
      </form>
    </div>
    </>
  );
}

export default Login
