const express = require('express')
const app = express()
const port = 3000
var path = require('path')
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile('/views/index.html', { root: __dirname });
});

app.post('/received', (req, res) => {
  res.send('Your message has been successfully submitted.')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})