import React,{useState} from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    fname:'',
    lname: '',
    email: '',
    password: '',
    
});

const Userdata = (e) => {
    const { name, value } = e.target;
    setData((newData) => {
        return {
            ...newData,
            [name]: value,
        }
    })
}

let addUser = async(e)=>{
  e.preventDefault();
  const {fname,lname,email,password} = data;
  const res = await fetch("http://localhost:8000/register", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({fname, lname, email,password})
        });
        const addData = await res.json();

        if (res.status === 422 || !addData) {
          window.alert("Plz fill the require field.");
      } else {
          window.alert("Registered successfully.");
          navigate('/login'); 
      }
  
}

    return (
      <div>
        <h1 style={{ textAlign: 'center' }} className='mt-4 mb-4'>Register Form</h1>
        <div className='add_sale'>
          <label>First Name</label>
          <br />
          <input className='add_input' value={data.fname} name='fname' onChange={Userdata} />
          <br />
          <label>Last Name</label>
          <br />
          <input className='add_input' value={data.lname} name='lname' onChange={Userdata} />
          <br />
          <label>Email</label>
          <br />
          <input className='add_input' value={data.email} name='email' onChange={Userdata} />
          <br />
          <label>Password</label>
          <br />
          <input className='add_input' value={data.password} name='password' onChange={Userdata} />
          <br />
          <button type='submit' onClick={addUser} className='add_btn'>Sumbit</button>
        </div>
      </div>
    )
  }

  export default Register;