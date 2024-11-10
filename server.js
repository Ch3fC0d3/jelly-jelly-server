const express = require('express');
const path = require('path');
const app = express();

// This line tells the server to use files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Set the port to 3000
const port = 3000;

// Start the server and listen on port 3000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
