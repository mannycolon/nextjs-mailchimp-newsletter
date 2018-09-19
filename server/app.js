import express from 'express'
import next from 'next'
import helmet from 'helmet';

const dev = process.env.NODE_ENV !== 'production'
const port = parseInt(process.env.PORT, 10) || 8000
const ROOT_URL = dev ? `http://localhost:${port}` : 'https://PRODUCTION_URL';

const app = next({ dev })
const handle = app.getRequestHandler()

// Nextjs's server prepared
app.prepare()
  .then(() => {
    const server = express()

    server.use(helmet());

    server.get('*', (req, res) => handle(req, res));

    // starting express server
    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on ${ROOT_URL}`)
    })
  })
