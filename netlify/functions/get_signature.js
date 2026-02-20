const jwt = require('jsonwebtoken');

// Usa variables de entorno en Netlify (Site settings → Environment variables)
const API_KEY = process.env.ZOOM_SDK_KEY || 'NpjxNIUdS0wtGb3FKR8ww';
const API_SECRET = process.env.ZOOM_SDK_SECRET || 'Fd4xCX51noBc92cdeimU0sDH8CmugsQr';

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const data = JSON.parse(event.body || '{}');
    const meetingNumber = String(data.meetingNumber || '').replace(/\s/g, '');
    const role = parseInt(data.role, 10) || 0;

    const iat = Math.floor(Date.now() / 1000);
    const exp = iat + 7200;

    const payload = {
      sdkKey: API_KEY,
      appKey: API_KEY,
      mn: meetingNumber,
      role,
      iat,
      exp,
      tokenExp: exp,
    };

    const signature = jwt.sign(payload, API_SECRET, { algorithm: 'HS256' });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ signature }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
