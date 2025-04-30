import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import CallTable from '@/components/CallTable';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Dashboard() {
  const [calls, setCalls] = useState([]);
  const [filteredCalls, setFilteredCalls] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [totalCalls, setTotalCalls] = useState(0);
  const [totalDuration, setTotalDuration] = useState('0m');
  const [activeTab, setActiveTab] = useState('dashboard');
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem('clientToken')) {
      router.push('/login');
    }
  }, []);

  useEffect(() => {
    async function fetchCalls() {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/vapi/calls`);
        const data = res.data || [];
        setCalls(data);
        setFilteredCalls(data);
        setTotalCalls(data.length);

        const durationInSeconds = data.reduce((sum, call) => sum + call.duration_seconds, 0);
        const hours = Math.floor(durationInSeconds / 3600);
        const minutes = Math.floor((durationInSeconds % 3600) / 60);
        setTotalDuration(`${hours}h ${minutes}m`);
      } catch (error) {
        console.error('Error fetching call data:', error);
      }
    }
    fetchCalls();
  }, []);

  useEffect(() => {
    const filtered = calls.filter(call =>
      call.from_number?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCalls(filtered);
  }, [searchTerm, calls]);

  const clientName = 'John Doe';

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 p-4 space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
            {clientName.charAt(0)}
          </div>
          <div>
            <p className="text-sm text-gray-500">Welcome,</p>
            <p className="font-semibold text-base">{clientName}</p>
          </div>
        </div>
        <nav className="flex flex-col gap-2">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`text-left px-4 py-2 rounded ${activeTab === 'dashboard' ? 'bg-gray-200 font-semibold' : ''}`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab('logs')}
            className={`text-left px-4 py-2 rounded ${activeTab === 'logs' ? 'bg-gray-200 font-semibold' : ''}`}
          >
            Call Logs
          </button>
          <button
            onClick={() => {
              localStorage.removeItem('clientToken');
              router.push('/login');
            }}
            className="text-left px-4 py-2 rounded text-red-500 hover:bg-red-100"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Total Calls</CardTitle>
              </CardHeader>
              <CardContent className="text-4xl font-semibold">{totalCalls}</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Total Duration</CardTitle>
              </CardHeader>
              <CardContent className="text-4xl font-semibold">{totalDuration}</CardContent>
            </Card>
          </div>
        )}
        {activeTab === 'logs' && <CallTable calls={filteredCalls} />}
      </main>
    </div>
  );
}