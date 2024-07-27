import { getAccessToken } from '@auth0/nextjs-auth0';
import config from '../../../../auth0-config.json';

export default async function handler(req:any, res:any) {
  try {
    const { accessToken } = await getAccessToken(req, res);
    res.status(200).json({ accessToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to get access token' });
  }
  
}

