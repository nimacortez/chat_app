const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
console.log(process.env.MONGO_URL);

const app = express();

app.get('/test', (req, res) => {
  res.json('test ok');
});

app.post('/register', (req, res) => {
  res.json('register ok'); 
});

app.listen(4000); // Port 4000

//JdsD82Tk5zpyEXsp