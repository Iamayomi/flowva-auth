import React from 'react'

interface FormGroupProps {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showToggle?: boolean;
  showPassword?: boolean;
  onToggle?: () => void;
  showStrength?: boolean;
  strength?: string;
  hint?: string;
}

const FormGroup: React.FC<FormGroupProps> = ({
  label,
  type,
  id,
  placeholder,
  value,
  onChange,
  showToggle,
  showPassword,
  onToggle,
  showStrength,
  strength,
  hint
}) => (
  <div className="mb-5 relative">
    <label htmlFor={id} className="block mb-2 text-sm text-gray-700 font-medium">{label}</label>
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      className="w-full p-3.5 border border-gray-300 rounded-radius text-sm bg-gray-50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all"
    />
    {showToggle && (
      <span
        className="absolute right-4 top-10 cursor-pointer text-gray-600 text-sm"
        onClick={onToggle}
      >
        {showPassword ? 'Hide' : 'Show'}
      </span>
    )}
    {showStrength && (
      <div className="password-strength">
        <div className={`strength-meter ${strength}`}></div>
      </div>
    )}
    {hint && (
      <div className={`text-xs text-gray-600 mt-1 ${strength ? 'block' : 'hidden'}`}>
        {hint}
      </div>
    )}
  </div>
)

export default FormGroup