import React from 'react';

const data = [
  { date: '2023-01-10', amount: 100.0, status: 'Paid' },
  { date: '2023-02-15', amount: 75.5, status: 'Pending' },
  { date: '2023-03-20', amount: 50.25, status: 'Paid' },
  { date: '2023-04-05', amount: 30.0, status: 'Pending' },
];

const DisbursalsData = () => {
  return (
    <div>
      {/* <h2>Transaction Table</h2> */}
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.amount}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisbursalsData;
