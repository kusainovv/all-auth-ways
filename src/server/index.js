const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const cors = require('cors')
const jwt = require('jsonwebtoken');

app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173'
}))

const cookieAuth = (req, res, next) => {
  try {
    req.user = jwt.verify(req.cookies.token, 'Secret');
    next();
  } catch(err) {
    
    return res.send("You're not loginned");
  }
}

app.get('/delete', cookieAuth, function (req, res) {
  res.clearCookie('token');
  res.send('')
})

app.get('/set', function (req, res) {
  const token = jwt.sign({
    username: 'Test',
    password: 'Test'
  }, 'Secret', { expiresIn: "1h" });
  res.cookie('token', token);
  res.send('')
})

app.listen(8888, () => {})