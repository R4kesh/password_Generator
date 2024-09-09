import React from 'react';




function PasswordDisplay({ password }) {

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-6 flex items-center">
      <input
        type="text"
        value={password}
        readOnly
        className="w-full bg-gray-200 p-2 rounded-lg text-center text-lg font-semibold"
        placeholder="Your generated password will appear here"
      />
      <button
        onClick={copyToClipboard}
        className="ml-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
      >
        Copy
      </button>
    </div>
  );
}

export default PasswordDisplay;
