import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const UserList = ({ users, onDelete, onEdit }) => {
    return (
    <div className="bg-white p-4 rounded-md shadow-md">
        <h1 className="font-semibold mb-4">Användare:</h1>
        <ul>
        {users.map(user => (
          <li key={user.id} className="flex items-center justify-between py-2 border-b border-gray-200">
            <span>
              {user.email}
              <button title="Edit" className="px-4 py-3" onClick={() => onEdit(user)}><FaEdit size={'1.1em'}/></button>
            </span>
            <button title="Delete" onClick={() => onDelete(user.id)}><MdDelete size={'1.5em'}/></button>
          </li>
        ))}
      </ul>
      </div>
    );
  };
  
  export default UserList;
