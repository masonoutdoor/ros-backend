const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

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
    const { stripeCustomerId, customerName, customerEmail } = JSON.parse(event.body || '{}');
    let customerId = stripeCustomerId;
    if (!customerId) {
      const customer = await stripe.customers.create({ name: customerName || '', email: customerEmail || '' });
      customerId = customer.id;
    }
    const session = await stripe.checkout.sessions.create({
      mode: 'setup',
      customer: customerId,
      payment_method_types: ['card'],
      success_url: 'https://richardsonoutdoorsolutions.com/app?setup=success',
      cancel_url: 'https://richardsonoutdoorsolutions.com/app?setup=cancel',
    });
    return { statusCode: 200, headers, body: JSON.stringify({ success: true, setupUrl: session.url, stripeCustomerId: customerId }) };
  } catch (err) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: err.message }) };
  }
};
