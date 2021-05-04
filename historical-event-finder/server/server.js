const jsonServer = require('json-server');
const path = require('path');
const router = jsonServer.router('./data/db.json');
const server = jsonServer.create();
const port = 4000;
const middlewares = jsonServer.defaults({static: 'public'});
const controllers = require('./controllers/index.js')
const axios = require('axios');
server.use(middlewares)


server.use('search', router);


server.get('/search/:term', async (req, res) => {
  let term = req.params.term
  let events = await controllers.getEvents(term);
  console.log('events', events.length);
  let numOfPages = Math.ceil(events.length / 10);
  let pageOneEvents = await controllers.getPageItems(0);
  await res.send({events: pageOneEvents, totalPages: numOfPages});
})

server.get('/eventPage/:page', async (req, res) => {
  let pageNumber = req.params.page;
  let historicalEvents = await controllers.getPageItems(pageNumber);
  await res.send(historicalEvents);
})



server.use(router);


server.listen(port, () => {
  console.log('JSON server is running on ' + port)
})