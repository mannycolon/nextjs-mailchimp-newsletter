import axios from 'axios'

export async function subscribe({ email }) {
  try {
    const LIST_ID = process.env.MAILCHIMP_LIST_ID
    const API_KEY = process.env.MAILCHIMP_API_KEY

    const data = {
      email_address: email,
      status: 'subscribed',
    }

    const res = await axios.post(
      `https://us19.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
      data,
      {
        headers: {
          Accept: 'application/json',
          Authorization: `Basic ${Buffer.from(`apikey:${API_KEY}`).toString('base64')}`
        }
      }
    )

    return res;
  } catch (error) {
    throw error;
  }
}
