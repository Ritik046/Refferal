const http = require('http');
const app = require('./app');
require('dotenv').config();

const mongoose = require('mongoose');
const { setupSocket } = require('./sockets/earningsSocket');

const server = http.createServer(app);
setupSocket(server);

mongoose.connect("mongodb+srv://rajneeshrj73:HNr2FiG2H0a0oGcz@cluster0.yd0hel0.mongodb.net/refferalProject").then(() => {
  console.log('MongoDB connected');
  server.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
  );
});
