'use client';

import React from 'react';
import { Table, TableHead, TableHeader, TableRow, TableCell, TableBody } from '@/components/ui/table';
import { FileDown, FileText } from 'lucide-react';
import Papa from 'papaparse';

type Call = {
  id: string;
  from_number: string;
  duration_seconds: number;
  timestamp: string;
  transcript_url: string;
  audio_url: string;
};

export default function CallTable({ calls }: { calls: Call[] }) {
  const exportToCSV = () => {
    if (typeof window === 'undefined') return;

    const csv = Papa.unparse(calls);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'call_logs.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportToPDF = async () => {
    if (typeof window === 'undefined') return;

    const jsPDF = (await import('jspdf')).default;
    const autoTable = (await import('jspdf-autotable')).default;

    const doc = new jsPDF();

    const tableData = calls.map(call => [
      call.from_number,
      `${Math.floor(call.duration_seconds / 60)}m ${call.duration_seconds % 60}s`,
      new Date(call.timestamp).toLocaleString()
    ]);

    autoTable(doc, {
      head: [['Number', 'Duration', 'Date/Time']],
      body: tableData
    });

    doc.save('call_logs.pdf');
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <div className="flex justify-end mb-4 gap-2">
        <button
          onClick={exportToCSV}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          <FileText size={16} /> Export CSV
        </button>
        <button
          onClick={exportToPDF}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          <FileDown size={16} /> Export PDF
        </button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>From</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Transcript</TableHead>
            <TableHead>Recording</TableHead>
            <TableHead>Download</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {calls.map((call) => (
            <TableRow key={call.id}>
              <TableCell>{call.from_number}</TableCell>
              <TableCell>
                {Math.floor(call.duration_seconds / 60)}m {call.duration_seconds % 60}s
              </TableCell>
              <TableCell>{new Date(call.timestamp).toLocaleString()}</TableCell>
              <TableCell>
                <a href={call.transcript_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  View
                </a>
              </TableCell>
              <TableCell>
                <audio controls>
                  <source src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/vapi/recording/${call.id}`} type="audio/mpeg" />
                </audio>
              </TableCell>
              <TableCell>
                <a
                  href={`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/vapi/recording/${call.id}`}
                  download
                  className="text-blue-600 underline"
                >
                  Download
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}