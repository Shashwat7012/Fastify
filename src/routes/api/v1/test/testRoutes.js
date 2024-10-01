const fastifyPlugin = require('fastify-plugin');
const testController  = require('../../../../../src/controllers/testController');

async function testRoute(fastify, options) {
    fastify.get('/ping', testController.pingRequest);
}

module.exports = testRoute;



// if we dont have prefix in another file then we can wrap it in plugin otherwise prefix will not work
// const fastifyPlugin = require('fastify-plugin');

// async function testRoute(fastify, options) {
//     fastify.get('/ping', (req, res) => {
//         res.send({ data: "pong" });
//     });
// }

// module.exports = fastifyPlugin(testRoute);

// fastify :- directly supporting routing 
