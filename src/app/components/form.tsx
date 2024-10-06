'use client';

import React, { useState } from 'react';
import Button from './Button';
import InputField from './InputField';

type Field = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
};

type FormProps = {
  fields: Field[];
  onSubmit: (formData: { [key: string]: string }) => void;
};

const Form: React.FC<FormProps> = ({ fields, onSubmit }) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleClear = () => {
    setFormData(fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {}));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8 bg-gray-50 border border-gray-300 rounded-md shadow-md space-y-4">
      {fields.map((field) => (
        <InputField
          key={field.name}
          label={field.label}
          name={field.name}
          type={field.type}
          value={formData[field.name]}
          onChange={handleChange}
        />
      ))}
      <div className="flex justify-between mt-4">
        <Button type="submit" variant="primary">Submit</Button>
        <Button type="button" variant="secondary" onClick={handleClear}>Clear</Button>
      </div>
    </form>
  );
};

export default Form;
