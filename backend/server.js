const express = require('express');
const bodyParser = require('body-parser');
const formRoute = require('./routes/form.routes');
const app = express();
const cors = require('cors');
require('dotenv').config({ path: './config/.env' });
require('./config/db');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/form', formRoute);


    const corsOptions={
        origin:'*',
        credentials:true,
        optionSuccessStatus:200,
    }
    app.use (cors(corsOptions))


app.listen(process.env.PORT, () => {
  console.log(`connect on port ${process.env.PORT}`);
})