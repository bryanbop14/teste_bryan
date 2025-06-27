# CNPJá Prospector

Plataforma simples para prospecção de empresas por:

- CNPJ
- CNAE (com filtros de cidade e estado)

Usa a [API pública da CNPJá](https://cnpja.com/api/open) para obter dados empresariais.

Requer **Node.js 18 ou superior** e expõe a porta `3000`. O servidor utiliza CORS para permitir chamadas de outros domínios.

## Como rodar

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor:

```bash
npm start
```

## Rotas disponíveis

- `/api/cnpj/:cnpj`
- `/api/cnae?cnae=xxxx-xx&cidade=Curitiba&uf=PR`
