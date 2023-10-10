import React from 'react';

const data = [
  { name: 'John', role: 'Super Admin' },
  { name: 'Alice', role: 'Admin' },
  { name: 'Bob', role: 'Admin' },
  { name: 'Eve', role: 'Management Staff' },
];

const AdminData = () => {
  return (
    <div>
      
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminData;
