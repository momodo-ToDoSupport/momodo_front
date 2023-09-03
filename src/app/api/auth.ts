import { putRefreshToken } from '../../service/auth';
import { setCookie } from '../../app/action';

// req, res type 수정
export default async function handler(req:any, res:any) {
  if (req.method === 'POST') {
    const refreshToken = req.body.refreshToken;
    
    try {
      const response = await putRefreshToken(refreshToken);
      
      if (response.accessToken) {
        const newAccessToken = response.accessToken;
        setCookie([
          {
            key: 'accessToken',
            value: newAccessToken,
          },
        ]);
        res.status(200).json({ success: true });
      } else {
        res.status(400).json({ success: false, message: 'Failed to refresh accessToken' });
      }
    } catch (error) {
      console.error('Failed to refresh accessToken:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}