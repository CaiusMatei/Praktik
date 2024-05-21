import React from 'react';

const ConfirmationPopup = ({onDelete, onCancel }) => {
    return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="bg-slate-200 p-8 rounded-md shadow-md">
          <p className="mb-4">Är du säker på att du vill radera användaren?</p>
          <div className="flex justify-end">
            <button className="px-4 py-2 mr-2 bg-gray-400 text-grey rounded hover:bg-gray-500" onClick={onCancel}>Avbryt</button>
            <button className="px-4 py-2 bg-red-500 text-black rounded hover:bg-red-600" onClick={onDelete}>Ja</button>
          </div>
        </div>
    </div>
    );
  };
  
  export default ConfirmationPopup;