import React, { useState } from 'react'
import Logo from './logo'
import FormGroup from './formGroup'
import Button from './button'
import { Message } from '../types'

interface SignInFormProps {
  setForm: (form: string) => void;
  setMessage: (msg: Message) => void;
}

const SignInForm: React.FC<SignInFormProps> = ({ setForm, setMessage }) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password) {
      setMessage({ text: 'Please fill in all fields', type: 'error' })
      return
    }
    setMessage({ text: 'Signing in...', type: 'success' })
    setTimeout(() => {
      setMessage({ text: 'Welcome back! Redirecting...', type: 'success' })
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="animate-fadeInUp">
      <Logo />
      <h2 className="text-xl font-semibold text-gray-700 mb-8 text-center">Welcome back</h2>
      <FormGroup
        label="Email"
        type="email"
        id="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormGroup
        label="Password"
        type={showPassword ? 'text' : 'password'}
        id="password"
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        showToggle
        showPassword={showPassword}
        onToggle={() => setShowPassword(!showPassword)}
      />
      <div className="text-right mb-5">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); setForm('forgot'); }}
          className="text-xs text-gray-600 hover:text-primary transition-colors"
        >
          Forgot password?
        </a>
      </div>
      <Button
        type="submit"
        svg={
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
            <polyline points="10 17 15 12 10 7"></polyline>
            <line x1="15" y1="12" x2="3" y2="12"></line>
          </svg>
        }
      >
        Sign in
      </Button>
      <div className="flex items-center my-6 text-xs text-gray-600 font-medium">
        <div className="flex-1 border-b border-gray-200"></div>
        <span className="mx-4">or continue with</span>
        <div className="flex-1 border-b border-gray-200"></div>
      </div>
      <Button
        secondary
        onClick={() => setMessage({ text: 'Redirecting to Google...', type: 'success' })}
        svg={
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        }
      >
        Google
      </Button>
      <div className="text-center mt-6 text-sm text-gray-600">
        Don't have an account?{' '}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); setForm('signup'); }}
          className="text-primary font-medium hover:underline"
        >
          Sign up
        </a>
      </div>
    </form>
  )
}

export default SignInForm