const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('./db/database');
const campaignRoutes = require('./routes/campaignRoutes');
const eventRoutes = require('./routes/eventRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());

app.use('/api/campaigns', campaignRoutes);
app.use('/api/events', eventRoutes);

//Test route
app.get('/', (req, res) => {
  res.send('Let’s Fish backend running');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});