import React, { useState } from 'react';
import { 
  Button, 
  InputField, 
  TextareaField, 
  RadioButton,
  useCttForm,
  useCttComponent 
} from 'ctt-design-system/react';
import 'ctt-design-system/css';
import './App.css';

function FormExample() {
  const form = useCttForm({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    contactMethod: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    const data = form.getAllValues();
    console.log('Form Data:', data);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleReset = () => {
    form.reset();
  };

  return (
    <div className="form-container">
      <h2>Contact Form Example</h2>
      
      <div className="form-grid">
        <InputField
          label="First Name"
          placeholder="Enter your first name"
          value={form.getFieldValue('firstName')}
          onChange={form.handleFieldChange('firstName')}
          required
        />
        
        <InputField
          label="Last Name"
          placeholder="Enter your last name"
          value={form.getFieldValue('lastName')}
          onChange={form.handleFieldChange('lastName')}
          required
        />
      </div>
      
      <InputField
        label="Email"
        type="email"
        placeholder="your@email.com"
        value={form.getFieldValue('email')}
        onChange={form.handleFieldChange('email')}
        required
      />
      
      <TextareaField
        label="Message"
        placeholder="Tell us how we can help..."
        value={form.getFieldValue('message')}
        onChange={form.handleFieldChange('message')}
        rows={4}
        required
      />
      
      <fieldset className="radio-group">
        <legend>Preferred Contact Method</legend>
        <RadioButton
          label="Email"
          name="contactMethod"
          value="email"
          checked={form.getFieldValue('contactMethod') === 'email'}
          onChange={form.handleFieldChange('contactMethod')}
        />
        <RadioButton
          label="Phone"
          name="contactMethod"
          value="phone"
          checked={form.getFieldValue('contactMethod') === 'phone'}
          onChange={form.handleFieldChange('contactMethod')}
        />
        <RadioButton
          label="Text Message"
          name="contactMethod"
          value="text"
          checked={form.getFieldValue('contactMethod') === 'text'}
          onChange={form.handleFieldChange('contactMethod')}
        />
      </fieldset>
      
      <div className="button-group">
        <Button
          variant="primary"
          label="Submit"
          onClick={handleSubmit}
        />
        <Button
          variant="secondary"
          label="Reset"
          onClick={handleReset}
        />
      </div>
      
      {submitted && (
        <div className="success-message">
          ✅ Form submitted successfully!
        </div>
      )}
    </div>
  );
}

function ButtonShowcase() {
  const [message, setMessage] = useState('');

  return (
    <div className="showcase-container">
      <h2>Button Showcase</h2>
      
      <div className="button-section">
        <h3>Variants</h3>
        <div className="button-row">
          <Button 
            variant="primary" 
            label="Primary" 
            onClick={() => setMessage('Primary clicked!')}
          />
          <Button 
            variant="secondary" 
            label="Secondary" 
            onClick={() => setMessage('Secondary clicked!')}
          />
          <Button 
            variant="tertiary" 
            label="Tertiary" 
            onClick={() => setMessage('Tertiary clicked!')}
          />
        </div>
      </div>
      
      <div className="button-section">
        <h3>Sizes</h3>
        <div className="button-row">
          <Button 
            size="small" 
            label="Small" 
            onClick={() => setMessage('Small button clicked!')}
          />
          <Button 
            size="medium" 
            label="Medium" 
            onClick={() => setMessage('Medium button clicked!')}
          />
          <Button 
            size="large" 
            label="Large" 
            onClick={() => setMessage('Large button clicked!')}
          />
        </div>
      </div>
      
      <div className="button-section">
        <h3>States</h3>
        <div className="button-row">
          <Button 
            label="Enabled" 
            onClick={() => setMessage('Enabled button clicked!')}
          />
          <Button 
            label="Disabled" 
            disabled 
            onClick={() => setMessage('This should not trigger')}
          />
        </div>
      </div>
      
      {message && (
        <div className="message">
          {message}
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CTT Design System + Vite + React</h1>
        <p>Demonstrating seamless integration with modern React development</p>
      </header>
      
      <main className="App-main">
        <FormExample />
        <ButtonShowcase />
      </main>
      
      <footer className="App-footer">
        <p>Built with CTT Design System, Vite, and React</p>
      </footer>
    </div>
  );
}

export default App;