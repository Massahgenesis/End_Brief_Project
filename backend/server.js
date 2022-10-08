const express = require('express');
const bodyParser = require('body-parser');
const formRoute = require('./routes/form.routes');
const cors = require('cors');
const app = express();
require('dotenv').config({ path: './config/.env' });
require('./config/db');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/form', formRoute);

app.listen(process.env.PORT, () => {
  console.log(`connect on port ${process.env.PORT}`);
})



