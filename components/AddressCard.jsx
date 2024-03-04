'use client'

import { FileEdit, Trash2 } from 'lucide-react'
import { useState } from 'react'

const AddressCard = ({ address, onDelete }) => {
  // Initialize local state with props
  const [title, setTitle] = useState(address.title);
  const [description, setDescription] = useState(address.description);

  const [openEdit, setOpenEdit] = useState(false);

  // Handle changes to the input fields
  const handleChange = (e) => {
      const { name, value } = e.target;
      if (name === 'title') setTitle(value);
      if (name === 'description') setDescription(value);
  };

  // Update function
  const handleUpdate = () => {
    console.log('Updating with:', title, description);

    // Make an API call


    setOpenEdit(false); // Close the edit box after update
  };

   // Update function
   const handleDelete = () => {
    console.log('Deleting:', address._id, title, description);
    onDelete(address._id); // Calling Parent
  };

  return (
    <div className="flex justify-between rounded-lg shadow-lg overflow-hidden bg-blue-100 my-8">
  
    {openEdit && (<div className="edit-box">
      <input
          className="m-3 p-1 border border-5 border-black rounded"
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          value={title}
          onChange={handleChange}
        />
        <input
          className="m-3 p-1 border border-5 border-black rounded"
          type="text"
          id="description"
          name="description"
          placeholder="Description"
          value={description}
          onChange={handleChange}
        />
        <button
            className="m-3 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
            onClick={handleUpdate}
        >
            Update
        </button>
      </div>)}

      <div className="px-6 py-4">
        <h3 className="text-lg font-medium text-gray-900">
          {title}
        </h3>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
      <div className="bg-green-100 flex flex-col p-2">
        <FileEdit
          className="py-1 cursor-pointer"
          onClick={() => {
            console.log('Click file edit');
            setOpenEdit(!openEdit);
          }}
        />
        {/* Add tailwind css to have pointer when hover */}
        <Trash2
          className="py-1 cursor-pointer"
          onClick={() => {
            console.log('Click trash');
            handleDelete();
          }}
        />
      </div>
    </div>
  )
}

export default AddressCard
