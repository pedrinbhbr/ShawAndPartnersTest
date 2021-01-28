const https = require('https');

const api = (app) => {
  // list 134 users per call
  app.get('/users', async function (req, res) {
    https
      .get(
        `https://api.github.com/users?since=${req.query.id}&per_page=134`,
        {
          headers: {
            'User-Agent': 'pedrinbhbr',
          },
        },
        (response) => {
          let data = '';
          response
            .on('data', (chunk) => (data += chunk))
            .on('end', () => {
              res.send(JSON.parse(data, null, 2));
            });
        }
      )
      .on('error', (e) => {
        console.log(e.message);
        res.send([{}]);
      });
  });

  //it searches for an specified username on github
  app.get('/users/:user', async function (req, res) {
    https
      .get(
        `https://api.github.com/users/${req.params.user}`,
        {
          headers: {
            'User-Agent': 'pedrinbhbr',
          },
        },
        (response) => {
          let data = '';
          response
            .on('data', (chunk) => (data += chunk))
            .on('end', () => {
              res.send(JSON.parse(data, null, 2));
            });
        }
      )
      .on('error', (e) => {
        console.log(e.message);
        res.send([{}]);
      });
  });

  //it searches for repositories of an specified user
  app.get('/users/:user/repos', async function (req, res) {
    https
      .get(
        `https://api.github.com/users/${req.params.user}/repos`,
        {
          headers: {
            'User-Agent': 'pedrinbhbr',
          },
        },
        (response) => {
          let data = '';
          response
            .on('data', (chunk) => (data += chunk))
            .on('end', () => {
              res.send(JSON.parse(data, null, 2));
            });
        }
      )
      .on('error', (e) => {
        console.log(e.message);
        res.send([{}]);
      });
  });
};

module.exports = {
  initialize: function (app) {
    api(app);
  },
};
