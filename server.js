const express = require('express');
const { join } = require('path');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('.')); // cada asset debe de ser llamadas de forma absoluta con / al inicio
app.get('/*', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

app.listen(PORT, () =>
  console.log(`Listening PORT: ${PORT}`)
);
