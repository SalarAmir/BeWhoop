// src/components/auth/AuthForm.jsx
import React, { useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Checkbox from '../ui/Checkbox';

const AuthForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    terms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Create an Account</h2>
      <p className="subtitle">Create a account to continue</p>
      
      <Input
        label="Email address:"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="esteban_schiller@gmail.com"
      />
      
      <Input
        label="Username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="esteban_schiller"
      />
      
      <div className="password-group">
        <Input
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="••••••••"
        />
        <a href="#" className="forgot-password">Forget Password?</a>
      </div>
      
      <Checkbox
        name="terms"
        checked={formData.terms}
        onChange={handleChange}
        label="I accept terms and conditions"
      />
      
      <Button type="submit" variant="primary">Sign Up</Button>
      
      <p className="login-prompt">
        Already have an account? <a href="/login">Login</a>
      </p>
    </form>
  );
};

export default AuthForm;