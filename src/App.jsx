import React from 'react';
import GetInTouchForm from './components/GetInTouchForm';
import USPSection from './components/USPSection';
import './components/USPSection.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-4 space-y-8">
      <GetInTouchForm />
      <USPSection />
    </div>
  );
}

export default App;
