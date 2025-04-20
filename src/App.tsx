import React, { useState, useEffect } from 'react'
import SignInForm from './components/signinForm'
import SignUpForm from './components/signupForm'
import ForgotForm from './components/forgotForm'
import { Message } from './types'

const App: React.FC = () => {
  const [currentForm, setCurrentForm] = useState<string>('signin')
  const [message, setMessage] = useState<Message | null>(null)

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(null), 5000)
      return () => clearTimeout(timer)
    }
  }, [message])

  return (
    <div className="min-h-screen flex items-center justify-center p-5">
      <div className="bg-white rounded-radius-lg shadow-md w-full max-w-md p-10 relative container">
        {message && (
          <div className={`p-3 rounded-radius mb-5 text-sm ${message.type === 'error' ? 'bg-error/10 text-error borderthe text-error border-l-4 border-error' : 'bg-success/10 text-success border-l-4 border-success'}`}>
            {message.text}
          </div>
        )}
        {currentForm === 'signin' && <SignInForm setForm={setCurrentForm} setMessage={setMessage} />}
        {currentForm === 'signup' && <SignUpForm setForm={setCurrentForm} setMessage={setMessage} />}
        {currentForm === 'forgot' && <ForgotForm setForm={setCurrentForm} setMessage={setMessage} />}
      </div>
    </div>
  )
}

export default App