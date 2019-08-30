const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.post('/call', function (req, res, next) {
  req.method = 'GET'
  req.query = req.body
  next()
})

server.use(middlewares);
server.use(router);

server.listen(port);
