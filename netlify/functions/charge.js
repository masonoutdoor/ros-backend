const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Only allow your app's origin to call this function.
const ALLOWED_ORIGIN = 'https://masonoutdoor.github.io';

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
    const { stripeCustomerId, amount, description, customerName } = JSON.parse(event.body || '{}');
    if (!stripeCustomerId || !amount) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing stripeCustomerId or amount' }) };
    }

    const customer = await stripe.customers.retrieve(stripeCustomerId);
    const paymentMethodId = customer.invoice_settings?.default_payment_method || customer.default_source;
    if (!paymentMethodId) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'No card on file for this customer' }) };
    }

    const cents = Math.round(parseFloat(amount) * 100);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: cents,
      currency: 'usd',
      customer: stripeCustomerId,
      payment_method: paymentMethodId,
      confirm: true,
      off_session: true,
      description: description || 'Lawn service — Richardson Outdoor Solutions',
      metadata: { customer_name: customerName || '', charged_via: 'ROS Field App' }
    }, {
      // Prevents an accidental double-charge from a retry/double-tap within a short window.
      idempotencyKey: `${stripeCustomerId}-${cents}-${new Date().toISOString().slice(0, 16)}`
    });

    return { statusCode: 200, headers, body: JSON.stringify({ success: true, paymentIntentId: paymentIntent.id, amount: paymentIntent.amount / 100, status: paymentIntent.status }) };
  } catch (err) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: err.message }) };
  }
};
