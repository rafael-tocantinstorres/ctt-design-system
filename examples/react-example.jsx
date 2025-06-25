import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Button, InputField, TextareaField, RadioButton } from 'ctt-design-system/react';
import 'ctt-design-system/css';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    comments: '',
    preference: ''
  });

  const [message, setMessage] = useState('');

  const handleInputChange = (field) => (event) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.detail.value
    }));
  };

  const handleRadioChange = (event) => {
    setFormData(prev => ({
      ...prev,
      preference: event.detail.value
    }));
  };

  const handleSubmit = (event) => {
    setMessage(`Form submitted with data: ${JSON.stringify(formData, null, 2)}`);
  };

  const handleReset = (event) => {
    setFormData({
      username: '',
      email: '',
      comments: '',
      preference: ''
    });
    setMessage('Form reset');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>CTT Design System - React Integration Example</h1>
      
      <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <InputField
          label="Username"
          placeholder="Enter your username"
          value={formData.username}
          type="text"
          required
          onChange={handleInputChange('username')}
        />
        
        <InputField
          label="Email"
          placeholder="Enter your email"
          value={formData.email}
          type="email"
          required
          onChange={handleInputChange('email')}
        />
        
        <TextareaField
          label="Comments"
          placeholder="Enter your comments"
          value={formData.comments}
          rows={4}
          onChange={handleInputChange('comments')}
        />
        
        <fieldset style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '4px' }}>
          <legend>Preference</legend>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <RadioButton
              label="Option 1"
              name="preference"
              value="option1"
              checked={formData.preference === 'option1'}
              onChange={handleRadioChange}
            />
            <RadioButton
              label="Option 2"
              name="preference"
              value="option2"
              checked={formData.preference === 'option2'}
              onChange={handleRadioChange}
            />
            <RadioButton
              label="Option 3"
              name="preference"
              value="option3"
              checked={formData.preference === 'option3'}
              onChange={handleRadioChange}
            />
          </div>
        </fieldset>
        
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button
            variant="primary"
            size="medium"
            label="Submit"
            onClick={handleSubmit}
          />
          
          <Button
            variant="secondary"
            size="medium"
            label="Reset"
            onClick={handleReset}
          />
          
          <Button
            variant="tertiary"
            size="small"
            label="Small Button"
            onClick={() => setMessage('Small button clicked!')}
          />
        </div>
      </form>
      
      {message && (
        <div style={{ 
          marginTop: '20px', 
          padding: '10px', 
          backgroundColor: '#f0f0f0', 
          borderRadius: '4px',
          whiteSpace: 'pre-wrap'
        }}>
          {message}
        </div>
      )}
      
      <div style={{ marginTop: '40px' }}>
        <h2>Button Variants</h2>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <Button variant="primary" label="Primary" onClick={() => setMessage('Primary clicked')} />
          <Button variant="secondary" label="Secondary" onClick={() => setMessage('Secondary clicked')} />
          <Button variant="tertiary" label="Tertiary" onClick={() => setMessage('Tertiary clicked')} />
        </div>
        
        <h2>Button Sizes</h2>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button size="small" label="Small" onClick={() => setMessage('Small clicked')} />
          <Button size="medium" label="Medium" onClick={() => setMessage('Medium clicked')} />
          <Button size="large" label="Large" onClick={() => setMessage('Large clicked')} />
        </div>
        
        <h2>Button States</h2>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <Button label="Enabled" onClick={() => setMessage('Enabled clicked')} />
          <Button label="Disabled" disabled onClick={() => setMessage('This should not fire')} />
        </div>
      </div>
    </div>
  );
}

// Mount the app
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);