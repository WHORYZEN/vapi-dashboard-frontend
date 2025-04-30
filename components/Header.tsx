import React from 'react';
import { Bell, HelpCircle, Search } from 'lucide-react';

export default function Header({ searchTerm, setSearchTerm }) {
  return (
    <div className="flex items-center justify-between mb-6 pb-2 border-b border-gray-200">
      {/* Logo and Brand */}
      <div className="flex items-center gap-2">
        <img src="/logo.jpg" alt="Logo" className="h-8 w-8 rounded" />
        <h1 className="text-lg font-bold tracking-tight text-gray-800">MYai500</h1>
      </div>

      {/* Search and Actions */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search calls..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-3 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none"
          />
          <Search className="w-4 h-4 absolute left-2 top-2.5 text-gray-400" />
        </div>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Bell className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <HelpCircle className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
}