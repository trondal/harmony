import cors from 'cors';
import express from 'express';
import axios from 'axios';
import path from 'path';

const app = express();
app.use(express.json());
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser);

// add middlewares
let root = require('path').join(__dirname__, 'build');
if (process.env.NODE_ENV === 'development') {
  app.use(express.static(root));
  app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
} else {
  root = require('path').join(__dirname, '..', 'client', 'build');
  app.use(express.static(root));
  app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

app.listen(process.env.PORT || 5000, () => {
  console.warn(`Example app listening on port ${port}`);
});

/* const CLIENT_ID = '331853';
const CLIENT_SECRET = 'pcoNwoXB4aO33Ays';

app.get('/token', async (req, res) => {
  const response = await axios.get(
    `https://api-1.adax.no/client-api/auth/token?grant_type=password&username=${CLIENT_ID}&password=${CLIENT_SECRET}`
  );
  res.json(response.data);
});

app.get('/refresh_token', async (req, res) => {
  const { refreshToken } = req.query;
  if (!refreshToken) {
    res.json({ error: 'Missing parameters for refresh_token' });
  }
  const response = await axios.get(
    `https://api-1.adax.no/client-api/auth/token?grant_type=refresh_token&refresh_token=${refreshToken}&username=${CLIENT_ID}&password=${CLIENT_SECRET}`
  );
  res.json(response.data);
});

app.get('/get_homes_info', async (req, res) => {
  const { token } = req.query;
  if (!token) {
    res.json({ error: 'Missing parameters for get_homes_info' });
  }
  const response = await axios.get(
    `https://api-1.adax.no/client-api/rest/v1/content/?withEnergy=1`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  res.json(response.data);
});

app.get('/get_energy_info', async (req, res) => {
  const { roomId, token } = req.query;
  if (!token || !roomId) {
    res.json({ error: 'Missing parameters for get_energy_info' });
  }
  const response = await axios.get(
    `https://api-1.adax.no/client-api/rest/v1/energy_log/${roomId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  res.json(response.data);
});

const port = process.env.PORT || 8000; */

app.listen(port, () => {
  console.warn(`Example app listening on port ${port}`);
});
