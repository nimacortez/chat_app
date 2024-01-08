const express = require('express');

const mongoUrl = 'mongodb+srv://corteznima:JdsD82Tk5zpyEXsp@cluster0.qddx7os.mongodb.net/?retryWrites=true&w=majority';

const app = express();

app.get('/test', (req, res) => {
  res.json('test ok');
});

app.post('/register', (req, res) => {
  res.json('register ok'); 
});

app.listen(4000); // Port 4000

//JdsD82Tk5zpyEXsp