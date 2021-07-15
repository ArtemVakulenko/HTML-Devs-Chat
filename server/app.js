const cors = require('cors');
const http = require('http');
const express = require('express');
const { auth, rooms, messages } = require('./routes');
const { connect, url } = require('./helpers');

const app = express();

app.use(express.json());
app.use(cors());
app.use(url.api, auth);
app.use(url.api, rooms);
app.use(url.api, messages);

const server = http.createServer(app);

connect(server);
