import React from 'react';

const data = [
  { name: 'John', role: 'Developer' },
  { name: 'Alice', role: 'Designer' },
  { name: 'Bob', role: 'Manager' },
  { name: 'Eve', role: 'Tester' },
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
