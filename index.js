const jsonServer = require('json-server');

// create a server
const upServer = jsonServer.create()

// setup path/route for db.json
const router = jsonServer.router("db.json")

// to convert json to js
const middleware = jsonServer.defaults()

// set port 4000 or choose dynamically
const port = 4000 || process.env.PORT

// use middleware and router in server
upServer.use(middleware)
upServer.use(router)

// server listening
upServer.listen(port,() => {
    console.log(`Server listening on port ${port} and waiting for request`);
})
