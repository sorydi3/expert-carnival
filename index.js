const express = require ('express');

const app = express();

app.get('/',(req,res) => res.send('hello world!!!'));
app.listen(5000,() => console.log('The app listen on port 3000!'));