const options = require('../Queries/SelectOptionsQueries');

const api = (app) => {
    app.get('/cores', async function(req, res) {
        const result = await options.cores();
        let numberProtocol = 200;
       
        if(result.process === 'ERROR' || (result.process === 'ERROR' && result.affect === 0)) {
            numberProtocol = 404;
        }

        res.status(numberProtocol).send(JSON.stringify(result)).JSON;
    });

    app.get('/tiposmanga', async function(req, res) {
        const result = await options.tiposmanga();
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