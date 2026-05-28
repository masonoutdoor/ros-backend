const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' };
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
