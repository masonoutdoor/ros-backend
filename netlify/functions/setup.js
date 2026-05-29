const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Only allow your app's origin to call this function.
const ALLOWED_ORIGIN = 'https://richardsonoutdoorsolutions.com';

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
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
      cancel_url: 'https://richardsonoutdoorsolution
