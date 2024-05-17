import React from 'react';

const UserList = ({ users, onDelete }) => {
    return (
        <div className="bg-white p-4 rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-4">Användare:</h2>
        <ul>
          {users.map(user => (
            <li key={user.id} className="flex items-center justify-between py-2 border-b border-gray-200">
              <span>{user.email}</span>
              <button className="px-3 py-1 bg-red-500 text-black rounded hover:bg-red-600" onClick={() => onDelete(user.id)}>Radera</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default UserList;
