import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({

  //Banco de dados interno do mirage
  models: {
    transaction: Model,
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      //Retorna todas as transações inseridas no banco de dados do Mirage, na tabela transaction criada.
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      //Inserindo no banco de dados do Mirage
      return schema.create('transaction', data);
    });
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
