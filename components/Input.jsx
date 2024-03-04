'use client'

import { Plus } from 'lucide-react'
import { useState } from 'react';
import axios from 'axios';

const Input = () => {
    // State to store the input values
    const [input, setInput] = useState({
      title: '',
      description: ''
    });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

    // Handle submission
    const onSubmit = async(e) => {
      e.preventDefault(); // Prevent form from reloading the page
  
      // Here you can use the input state values to do what you need
      console.log('Submitted:', input);
  
      // Add axios call to backend here
      try {
        await axios.post('http://localhost:8080/api/addresses', input)
        
        window.location.reload();
        
        // Clear the input fields
        setInput({
          title: '',
          description: ''
        });
      } catch (error) {
        console.error('Error creating address:', error)
      }
    };

  return (
    <div className="flex bg-red-100 justify-end px-4 py-4 rounded-b-lg">
      <div className="flex flex-row">
      <input
          className="m-3 p-1 border border-5 border-black rounded"
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          value={input.title}
          onChange={handleChange}
        />
        <input
          className="m-3 p-1 border border-5 border-black rounded"
          type="text"
          id="description"
          name="description"
          placeholder="Description"
          value={input.description}
          onChange={handleChange}
        />
      </div>
      <button
        className="flex items-center text-white transition ease-in-out delay-50 bg-gray-900 hover:scale-105 hover:bg-gray-800 duration-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        onClick={onSubmit}
      >
        <Plus className="pr-2" /> Add address
      </button>
    </div>
  )
}

export default Input
