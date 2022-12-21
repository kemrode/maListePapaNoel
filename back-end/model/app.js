// Properties
const express = require('express');
const app = express();


// App using
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods','POST, GET, PUT, OPTIONS');
    next();
});

app.use(express.json());

// Export

module.exports = app;