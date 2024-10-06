'use client';

import React from 'react';

type InputFieldProps = {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField: React.FC<InputFieldProps> = ({ label, name, type = 'text', value, onChange }) => {
  return (
    <div className="mb-6"> {/* Increased bottom margin for better spacing */}
      <label htmlFor={name} className="block text-sm font-medium text-gray-800 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="w-full p-4 border border-gray-400 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  );
};

export default InputField;
