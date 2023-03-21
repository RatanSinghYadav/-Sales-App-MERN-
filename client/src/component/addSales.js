import React,{useState} from 'react';
import './style.css';
import {useNavigate} from 'react-router-dom';

function Add() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    saleId:'',
    name: '',
    qty: '',
    amount: '',
    
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
  const {saleId,name,qty,amount} = data;
  const res = await fetch("http://localhost:8000/addSale", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({saleId, name, qty,amount})
        });
        const addData = await res.json();

        if (res.status === 422 || !addData) {
          window.alert("Plz fill the require field.");
      } else {
          window.alert("Registered successfully.");
          navigate('/top'); 
      }
  
}

  return (
    <div>
      <h1 style={{ textAlign: 'center' }} className='mt-4 mb-4'>Add Sale Entry</h1>
      <div className='add_sale'>
      <label>Sales Id</label>
        <br />
        <input className='add_input' value={data.saleId} name='saleId' onChange={Userdata} />
        <label>Product Name</label>
        <br />
        <input className='add_input' value={data.name} name='name' onChange={Userdata} />
        <br />
        <label>Quantity</label>
        <br />
        <input className='add_input' value={data.qty} name='qty' onChange={Userdata} />
        <br />
        <label>Amount</label>
        <br />
        <input className='add_input' value={data.amount} name='amount' onChange={Userdata} />
        <br />
        <button type='submit' onClick={addUser} className='add_btn'>Sumbit</button>
      </div>
    </div>
  )
}

export default Add;