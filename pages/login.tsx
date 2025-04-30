import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      localStorage.setItem('clientToken', 'valid');
      router.push('/');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url("/login-bg.jpg")' }}
    >
      <div className="w-full max-w-sm bg-white bg-opacity-90 p-8 shadow-lg rounded-md space-y-6">
        <div className="flex flex-col items-center space-y-2">
          <img src="/logo.jpg" alt="Logo" className="w-12 h-12" />
          <h1 className="text-xl font-bold">Welcome to MYai500</h1>
          <p className="text-sm text-gray-600">Secure Client Login</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="password"
            placeholder="Enter access password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
          />
          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}