const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const loadUsers = () => {
  try {
    const data = fs.readFileSync('users.json');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading users.json:', error);
    return [];
  }
};

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const users = loadUsers();

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    const token = jwt.sign(
      { username: user.username, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    res.json({ role: user.role, token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Middleware to authenticate requests
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Refresh token endpoint
app.post('/api/refresh-token', authenticateToken, (req, res) => {
  const { username, role } = req.user;

  const token = jwt.sign(
    { username, role },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({ token });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
