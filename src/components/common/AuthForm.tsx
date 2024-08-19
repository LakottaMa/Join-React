import React, { useState, FormEvent } from 'react';

interface AuthFormProps {
  type: 'login' | 'signup';
  onSubmit: (data: AuthFormData) => void;
}

export interface AuthFormData {
    email: string;
    password: string;
    name?: string;
    confirmPassword?: string;
    remember?: boolean;
  }

const AuthForm: React.FC<AuthFormProps> = ({ type, onSubmit }) => {
  const [formData, setFormData] = useState<AuthFormData>({
    email: '',
    password: '',
    name: '',
    confirmPassword: '',
    remember: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="auth-form">
      <h2>{type === 'login' ? 'Log in' : 'Sign up'}</h2>
      <form onSubmit={handleSubmit}>
        {type === 'signup' && (
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
        )}
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
        {type === 'signup' && (
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" />
        )}
        {type === 'login' && (
          <label>
            <input type="checkbox" name="remember" checked={formData.remember} onChange={handleChange} />
            Remember me
          </label>
        )}
        <button type="submit">{type === 'login' ? 'Log in' : 'Sign up'}</button>
        {type === 'login' && <button type="button">Guest Log in</button>}
      </form>
    </div>
  );
};

export default AuthForm;