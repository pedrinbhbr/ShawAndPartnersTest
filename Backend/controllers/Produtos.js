const produtos = require('../Queries/ProdutoQueries');

const api = (app) => {
    app.get('/produtos', async function(req, res) {
        const result = await produtos.list();
        let numberProtocol = 200;
       
        if(result.process === 'ERROR' || (result.process === 'ERROR' && result.affect === 0)) {
            numberProtocol = 404;
        }

        res.status(numberProtocol).send(JSON.stringify(result)).JSON;
    });

    app.get('/produtos/:id', async function(req, res) {
        const params = req.params
        const result = await produtos.recovery(params);
        let numberProtocol = 200;
       
        if(result.process === 'ERROR' || (result.process === 'ERROR' && result.affect === 0)) {
            numberProtocol = 404;
        }

        res.status(numberProtocol).send(JSON.stringify(result)).JSON;
    });

    app.post('/produtos', async function(req, res) {
        const params = req.body.params
        const result = await produtos.insert(params);
        let numberProtocol = 200;
       
        if(result.process === 'ERROR' || (result.process === 'ERROR' && result.affect === 0)) {
            numberProtocol = 404;
        }

        res.status(numberProtocol).send(JSON.stringify(result)).JSON;
    });

    app.put('/produtos', async function(req, res) {
        const params = req.body.params.produto
        const result = await produtos.update(params);
        let numberProtocol = 200;
       
        if(result.process === 'ERROR' || (result.process === 'ERROR' && result.affect === 0)) {
            numberProtocol = 404;
        }

        res.status(numberProtocol).send(JSON.stringify(result)).JSON;
    });
}

module.exports = {

    initialize: function (app) {
        api(app);  
    }

}