import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  console.log(email,password);
  const handleLogin = async () => {
    
    const res = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email,password}),
      });
      const data = await res.json();
      console.log(data);
      navigate('/top'); 
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }} className='mt-4 mb-4'>Login Form</h1>
      <div className='add_sale'>
        <label>Email</label>
        <br />
        <input type="email"  value={email} onChange={(e) => setEmail(e.target.value)} className='add_input' />
        <br />
        <label>Password</label>
        <br />
        <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} className='add_input' />
        <br />
        <button type='submit' onClick={handleLogin} className='add_btn'>Sumbit</button>
      </div>
    </div>
  );
}

export default Login;


















// import React,{useState} from 'react';
// import { useNavigate } from 'react-router-dom';
// import './style.css';

// function Login() {
//   const navigate = useNavigate
//   // const [email, setEmail] = useState('');
//   // const [password, setPassword] = useState('');
//   const [data, setData] = useState({
//     email: '',
//     password: '',
    
// });
//   // const [error, setError] = useState('');

//   const Userdata = (e) => {
//     const { name, value } = e.target;
//     setData((newData) => {
//         return {
//             ...newData,
//             [name]: value,
//         }
//     })
// }

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const {email, password} = data;
//     // Send a POST request to the login endpoint with the email and password
//     const res = await fetch('http://localhost:8000/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ email, password })
//     });
//     console.log(res);
//     const addData = await res.json();
//     console.log(data);

//     // If the login was successful, redirect to the dashboard
//     if (res.status === 422 || !addData) {
//       window.alert("Plz fill the require field.");
//   } else {
//       window.alert("login successfully.");
//       navigate('/top'); 
//   }
//   };


//   return (
//     <div>
//       <h1 style={{ textAlign: 'center' }} className='mt-4 mb-4'>Login Form</h1>
//       <div className='add_sale'>
//         <label>Email</label>
//         <br />
//         <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}  />
//         <br />
//         <label>Password</label>
//         <br />
//         <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <br />
//         <button type='submit' onClick={handleLogin} className='add_btn'>Sumbit</button>
//       </div>
//     </div>
//   )
// }

// export default Login