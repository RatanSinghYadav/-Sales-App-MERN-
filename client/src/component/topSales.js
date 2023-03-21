import React, { useState, useEffect } from 'react';

function Top() {
  const [data, setData] = useState([]);

  async function GetData() {
    const res = await fetch('http://localhost:8000/getSale', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const userData = await res.json();
    setData(userData);
  }

  useEffect(() => {
    GetData();
  }, [])

  const deleteUser = async(id)=> {
      await fetch(`http://localhost:8000/deleteData/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    });
    // const deleteData = await res2.json()
    alert("Data Delete Successfully");
    GetData();
}


  return (
    <div>
      <h1 style={{ textAlign: 'center' }} className='mt-4 mb-4'>Top 5 Sales</h1>
      <div>
        <table className="table add_sale">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Sales Id</th>
              <th scope="col">Product Name</th>
              <th scope="col">Quanity</th>
              <th scope="col">Sale Amount</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((e, id) => {
                return (
                  <>
                    <tr>
                      <th scope="row">{id + 1}</th>
                      <td>{e.saleId}</td>
                      <td>{e.name}</td>
                      <td>{e.qty}</td>
                      <td>{e.amount}</td>
                      <td>
                        <button onClick={() => deleteUser(e._id)} className='btn btn-danger'>Delete</button>
                      </td>
                    </tr>
                  </>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Top;