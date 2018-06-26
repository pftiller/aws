const express = require('express')
const app = express()
app.use(express.static('public'));
app.listen(2030, () => console.log('Server running on port 2030'))
