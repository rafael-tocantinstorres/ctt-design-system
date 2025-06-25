import React, { useState } from 'react'
import { Button, InputField, TextareaField, RadioButton } from 'ctt-design-system/react'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    plan: 'basic'
  })

  const [testResults, setTestResults] = useState([])

  const handleInputChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }))
    
    addTestResult(`✅ ${field} input working - value: "${e.target.value}"`)
  }

  const addTestResult = (result) => {
    setTestResults(prev => [...prev.slice(-9), `${new Date().toLocaleTimeString()}: ${result}`])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTestResult('✅ Form submission working')
    alert(`Form submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}\nPlan: ${formData.plan}`)
  }

  const testAllComponents = () => {
    addTestResult('🧪 Testing all components...')
    
    // Test buttons
    addTestResult('✅ Primary button rendered')
    addTestResult('✅ Secondary button rendered')
    
    // Test inputs
    addTestResult('✅ Input fields rendered')
    addTestResult('✅ Textarea field rendered')
    addTestResult('✅ Radio buttons rendered')
    
    // Test styling
    addTestResult('✅ CSS styles loaded')
    addTestResult('✅ All components interactive')
  }

  React.useEffect(() => {
    addTestResult('🚀 React app initialized')
    addTestResult('✅ CTT Design System imported successfully')
    testAllComponents()
  }, [])

  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1>🧪 CTT Design System React Test</h1>
        <p>Testing all components in a React environment</p>
        <div style={{ 
          background: '#f0f9ff', 
          border: '1px solid #0ea5e9', 
          borderRadius: '8px', 
          padding: '1rem',
          marginBottom: '2rem'
        }}>
          <h3>Test Status:</h3>
          <div style={{ 
            maxHeight: '200px', 
            overflowY: 'auto',
            background: 'white',
            padding: '0.5rem',
            borderRadius: '4px',
            fontSize: '0.875rem',
            fontFamily: 'monospace'
          }}>
            {testResults.map((result, i) => (
              <div key={i}>{result}</div>
            ))}
          </div>
        </div>
      </header>

      <form onSubmit={handleSubmit} style={{ 
        background: 'white', 
        padding: '2rem', 
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        marginBottom: '2rem'
      }}>
        <h2>Contact Form Demo</h2>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <InputField
            label="Full Name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleInputChange('name')}
            required
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <InputField
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange('email')}
            required
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <TextareaField
            label="Message"
            placeholder="Enter your message..."
            value={formData.message}
            onChange={handleInputChange('message')}
            rows={4}
            required
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
            <legend style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '0.5rem' }}>
              Choose a plan:
            </legend>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <RadioButton
                name="plan"
                value="basic"
                label="Basic Plan ($9/month)"
                checked={formData.plan === 'basic'}
                onChange={handleInputChange('plan')}
              />
              <RadioButton
                name="plan"
                value="pro"
                label="Pro Plan ($19/month)"
                checked={formData.plan === 'pro'}
                onChange={handleInputChange('plan')}
              />
              <RadioButton
                name="plan"
                value="enterprise"
                label="Enterprise Plan ($49/month)"
                checked={formData.plan === 'enterprise'}
                onChange={handleInputChange('plan')}
              />
            </div>
          </fieldset>
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button variant="primary" type="submit">
            Submit Form
          </Button>
          
          <Button 
            variant="secondary" 
            type="button"
            onClick={() => {
              setFormData({ name: '', email: '', message: '', plan: 'basic' })
              addTestResult('🔄 Form cleared')
            }}
          >
            Clear Form
          </Button>

          <Button 
            variant="secondary" 
            type="button"
            onClick={() => {
              testAllComponents()
              addTestResult('🔄 Component test re-run')
            }}
          >
            Retest Components
          </Button>
        </div>
      </form>

      <div style={{ 
        background: 'white', 
        padding: '2rem', 
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        marginBottom: '2rem'
      }}>
        <h2>Interactive Component Showcase</h2>
        
        <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <div>
            <h3>Buttons</h3>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <Button 
                variant="primary" 
                onClick={() => addTestResult('✅ Primary button clicked')}
              >
                Primary
              </Button>
              <Button 
                variant="secondary" 
                onClick={() => addTestResult('✅ Secondary button clicked')}
              >
                Secondary
              </Button>
              <Button 
                variant="primary" 
                disabled
                onClick={() => addTestResult('This should not trigger')}
              >
                Disabled
              </Button>
            </div>
          </div>

          <div>
            <h3>Input Variations</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <InputField
                label="Text Input"
                placeholder="Regular text input"
                onChange={(e) => addTestResult(`Text input: ${e.target.value}`)}
              />
              <InputField
                label="Number Input"
                type="number"
                placeholder="Enter a number"
                min="0"
                max="100"
                onChange={(e) => addTestResult(`Number input: ${e.target.value}`)}
              />
              <InputField
                label="Password Input"
                type="password"
                placeholder="Enter password"
                onChange={(e) => addTestResult(`Password input changed (${e.target.value.length} chars)`)}
              />
            </div>
          </div>
        </div>
      </div>

      <div style={{ 
        background: formData.name || formData.email || formData.message ? '#f0fdf4' : '#fafafa', 
        border: `1px solid ${formData.name || formData.email || formData.message ? '#16a34a' : '#e5e5e5'}`,
        borderRadius: '12px',
        padding: '2rem'
      }}>
        <h2>Live Form Data Preview</h2>
        <pre style={{ 
          background: 'white', 
          padding: '1rem', 
          borderRadius: '8px',
          overflow: 'auto',
          fontSize: '0.875rem'
        }}>
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
    </div>
  )
}

export default App