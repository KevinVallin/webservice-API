

const express = require('express');
const cors = require('cors'); // Importez le module cors

const app = express();
const port = 3000;

app.use(express.json());

app.use(cors());

// Endpoint pour gérer la requête de l'interface utilisateur
app.post('/api/generate-ui', (req, res) => {
  const { day, month, year } = req.body;

  //Donnée entrante 
  const uiData = {
    day, 
    month,
    year,
  };

  res.json(uiData);
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
