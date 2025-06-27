const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const CNPJA_API = 'https://api-publica.cnpja.com';

app.use(cors());

// Busca por CNPJ
app.get('/api/cnpj/:cnpj', async (req, res) => {
  try {
    const { cnpj } = req.params;
    const { data } = await axios.get(`${CNPJA_API}/cnpj/${cnpj}`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar dados do CNPJ' });
  }
});

// Busca por CNAE com filtros de cidade e estado
app.get('/api/cnae', async (req, res) => {
  const { cnae, cidade, uf } = req.query;

  try {
    const url = `${CNPJA_API}/cnae/${cnae}?cidade=${cidade || ''}&uf=${uf || ''}`;
    const { data } = await axios.get(url);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar por CNAE' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
