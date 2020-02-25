const express = require('express');
const {join} = require('path');
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static('.')); // dice que lo que hay en src se pueda acceder estaticamente
app.get('/*', (req, res) =>{
    res.sendFile(join(__dirname, 'index.html'));
    // para todas las demas rutas te carge el index
});
app.listen(PORT, () =>
    console.log(`Listening on Port: ${PORT}`)
);