const express = require('express');

const port = 8080;
const app = express();

app.use('/user',require('./routes/users'));

app.listen (port, () => {
    console.log(`App is listening to port http://localhost:${port}`);
});