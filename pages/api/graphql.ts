import axios, { AxiosError } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(404).send('');
  }
  try {
    console.log('here');
    const { data } = await axios.post(
      'https://rickandmortyapi.com/graphql',
      req.body,
    );
    res.status(200).json(data);
  } catch (e) {
    const error = e as AxiosError;
    res
      .status(error?.response?.status ?? 500)
      .json({ error: error?.message ?? 'Invalid Request' });
  }
}
