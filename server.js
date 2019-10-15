const express = require('express');
const path = require('path');
const app = express();

app.set('etag', 'strong');  

app.get('/etags', (req, res) => {   
 res.send("hello world");   
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
})

const port = 3000
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})