const tecido = require('../Queries/TecidosQueries');

const api = app => {
  app.get('/tecidos', async function(req, res) {
    const result = await tecido.list();
    let numberProtocol = 200;

    if (
      result.process === 'ERROR' ||
      (result.process === 'ERROR' && result.affect === 0)
    ) {
      numberProtocol = 404;
    }

    res.status(numberProtocol).send(JSON.stringify(result)).JSON;
  });

  app.get('/tecido/:id', async function(req, res) {
    const result = tecido.recovery(req.params);
    let numberProtocol = 200;

    if (
      result.process === 'ERROR' ||
      (result.process === 'ERROR' && result.affect === 0)
    ) {
      numberProtocol = 404;
    }

    res.status(numberProtocol).send(JSON.stringify(result)).JSON;
  });
};

module.exports = {
  initialize: function(app) {
    api(app);
  }
};
