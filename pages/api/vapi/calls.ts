import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get('http://localhost:5050/api/vapi/calls');
    res.status(200).json(response.data);
  } catch (error: any) {
    console.error('Error fetching call data:', error.message);
    res.status(500).json({ error: 'Failed to fetch data from backend' });
  }
}