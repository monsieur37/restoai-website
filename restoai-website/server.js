const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir les fichiers statiques
app.use(express.static('.'));

// Route principale
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Routes légales
app.get('/legal/privacy', (req, res) => {
    res.sendFile(path.join(__dirname, 'legal/privacy.html'));
});

app.get('/legal/terms', (req, res) => {
    res.sendFile(path.join(__dirname, 'legal/terms.html'));
});

app.get('/legal/mentions', (req, res) => {
    res.sendFile(path.join(__dirname, 'legal/mentions.html'));
});

// Catch-all pour les 404
app.use((req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1>');
});

app.listen(PORT, () => {
    console.log(`🍽️ RestoAI server running on port ${PORT}`);
});

module.exports = app;