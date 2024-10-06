'use client';  

import Form from './components/Form';

export default function Home() {
  const fields = [
    { name: 'firstName', label: 'First Name', type: 'text', required: true },
    { name: 'lastName', label: 'Last Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'questin', label: 'Guess our speakers, (there\'s a price for correct guesses)', type: 'text', required: false},
    { name: 'What do you expect?', label: 'What do you expect?', type: 'text', required: false},
    { name: 'question', label: 'how exited are you?', type: 'text', required: true},
  ];

  const handleSubmit = (data: { [key: string]: string }) => {
    console.log('Form submitted:', data);
  };

  return (
    <div className="flex flex-grid items-center justify-center bg-black padding-left-1000">
      <h1 className="text-4xl font-bold mb-10 text-black">Form Name</h1> {/* Increased font size and bottom margin */}
      <Form fields={fields} onSubmit={handleSubmit} />
      <p>Make sure to bring your friends!!</p>
    </div>
  );
}

