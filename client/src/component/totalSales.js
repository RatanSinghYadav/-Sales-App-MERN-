import React, { useState, useEffect } from 'react';

function TotalSales() {
  const [totalSales, setTotalSales] = useState(null);

  useEffect(() => {
    async function fetchTotalSales() {
      try {
        const response = await fetch('http://localhost:8000/total');
        const data = await response.json();
        setTotalSales(data.totalSales);
      } catch (error) {
        console.error(error);
      }
    }
    fetchTotalSales();
  }, []);

  return (
    <div>
      <h1>Total Sales</h1>
      {totalSales !== null ? (
        <p>Total sales: ${totalSales}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default TotalSales;
