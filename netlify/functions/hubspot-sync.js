const ALLOWED_ORIGINS = [
  'https://www.richardsonoutdoorsolutions.com',
  'https://richardsonoutdoorsolutions.com',
  'https://masonoutdoor.github.io'
];

exports.handler = async (event) => {
  const origin = event.headers.origin || event.headers.Origin || '';
  const allowOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];

  const headers = {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Headers': 'Content-Type, x-app-secret',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' };
  }

  // ── AUTH GATE: reject anything without the shared secret ──
  if (event.headers['x-app-secret'] !== process.env.APP_SHARED_SECRET) {
    return { statusCode: 401, headers, body: JSON.stringify({ error: 'unauthorized' }) };
  }

  try {
    const { contactId, amount, method, jobDate } = JSON.parse(event.body || '{}');
    if (!contactId) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing contactId' }) };
    }

    const methodLabel = method === 'cash' ? 'Cash/Check' : (method || 'Payment');
    const dateMs = jobDate ? new Date(jobDate).getTime().toString() : Date.now().toString();

    const res = await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/${encodeURIComponent(contactId)}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + process.env.HUBSPOT_TOKEN
      },
      body: JSON.stringify({
        properties: {
          hs_lead_status: 'Connected',
          notes_last_contacted: dateMs,
          hs_content_membership_notes: `Last payment: $${(parseFloat(amount) || 0).toFixed(2)} via ${methodLabel} on ${jobDate || ''}`
        }
      })
    });

    if (!res.ok) {
      const text = await res.text();
      return { statusCode: 502, headers, body: JSON.stringify({ error: 'HubSpot error', detail: text }) };
    }
    return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
  } catch (err) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
