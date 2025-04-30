import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Table, TableHead, TableHeader, TableRow, TableCell, TableBody } from '@/components/ui/table';
import { FileDown, FileText } from 'lucide-react';
import Papa from 'papaparse';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default function CallTable({ calls }) {
  const exportToCSV = () => {
    const csv = Papa.unparse(calls);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'call_logs.csv');
    link.click();
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    const tableData = calls.map(call => [
      call.from_number,
      `${Math.floor(call.duration_seconds / 60)}m ${call.duration_seconds % 60}s`,
      new Date(call.timestamp).toLocaleString()
    ]);
    doc.autoTable({ head: [['Number', 'Duration', 'Date/Time']], body: tableData });
    doc.save('call_logs.pdf');
  };

  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  return (
    <div>
      <div className="flex justify-end gap-2 mb-4">
        <button onClick={exportToCSV} className="text-sm bg-gray-200 px-3 py-1 rounded inline-flex items-center">
          <FileDown className="w-4 h-4 mr-1" /> CSV
        </button>
        <button onClick={exportToPDF} className="text-sm bg-gray-200 px-3 py-1 rounded inline-flex items-center">
          <FileText className="w-4 h-4 mr-1" /> PDF
        </button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Number</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Date/Time</TableHead>
            <TableHead>Transcript</TableHead>
            <TableHead>Recording</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {calls.map(call => (
            <TableRow key={call.id}>
              <TableCell>{call.from_number}</TableCell>
              <TableCell>{Math.floor(call.duration_seconds / 60)}m {call.duration_seconds % 60}s</TableCell>
              <TableCell>{new Date(call.timestamp).toLocaleString()}</TableCell>
              <TableCell>
                {call.transcript_url ? (
                  <a href={call.transcript_url} target="_blank" rel="noopener noreferrer">
                    <Badge variant="outline">View</Badge>
                  </a>
                ) : '—'}
              </TableCell>
              <TableCell>
                {call.audio_url ? (
                  <div className="flex flex-col gap-1">
                  <audio controls className="w-40">
                    <source src={`${baseURL}/api/vapi/recording/${call.id}`} type="audio/mpeg" />
                  </audio>
                  <a href={`${baseURL}/api/vapi/recording/${call.id}`} download
                    className="text-xs text-blue-600 hover:underline"
                  >
                    ⬇ Download MP3
                  </a>
                </div>
                ) : '—'}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}