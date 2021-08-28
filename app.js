const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.backend.local') });

const PORT = process.env.PORT || 3001;

// Route Imports
const rootRouter = require('./controllers');

app.use(express.static(path.join(__dirname, 'build')));

// Routes
app.use('/api', rootRouter);

// React front-end catch-all route
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, err => {
  if (err) {
    console.error(`Error starting to listen on port ${PORT}`);
  } else {
    console.log(`Bartendeets is up and listening on port ${PORT}!`);
  }
});