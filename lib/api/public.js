
async function sendRequest(path, options = {}) {
  return {}
}

export const subscribeToNewsletter = ({ email }) =>
  sendRequest('/api/v1/public/subscribe', {
    body: JSON.stringify({ email }),
  });
