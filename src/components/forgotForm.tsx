import React, { useState } from 'react'
import Logo from './logo'
import FormGroup from './formGroup'
import Button from './button'
import { Message } from '../types'

interface ForgotFormProps {
  setForm: (form: string) => void;
  setMessage: (msg: Message) => void;
}

const ForgotForm: React.FC<ForgotFormProps> = ({ setForm, setMessage }) => {
  const [email, setEmail] = useState<string>('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      setMessage({ text: 'Please enter your email', type: 'error' })
      return
    }
    setMessage({ text: 'Sending reset link...', type: 'success' })
    setTimeout(() => {
      setMessage({ text: 'Reset link sent to your email', type: 'success' })
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="animate-fadeInUp">
      <Logo />
      <h2 className="text-xl font-semibold text-gray-700 mb-8 text-center">Reset your password</h2>
      <FormGroup
        label="Email"
        type="email"
        id="forgot-email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        type="submit"
        svg={
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        }
      >
        Send reset link
      </Button>
      <div className="text-center mt-6 text-sm text-gray-600">
        Remember your password?{' '}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); setForm('signin'); }}
          className="text-primary font-medium hover:underline"
        >
          Sign in
        </a>
      </div>
    </form>
  )
}

export default ForgotForm