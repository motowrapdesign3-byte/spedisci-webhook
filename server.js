const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Endpoint per ricevere il webhook
app.post('/webhook', (req, res) => {
    console.log("📦 Evento ricevuto da Spedisci.online!");
    console.log("Dati:", JSON.stringify(req.body, null, 2));

    // Rispondi a Spedisci che è tutto OK
    res.status(200).send('Ricevuto!');
});

app.get('/', (req, res) => res.send('Il Webhook è attivo!'));

app.listen(PORT, () => {
    console.log(`Server in ascolto sulla porta ${PORT}`);
});
