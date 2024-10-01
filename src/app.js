const fastifyPlugin = require('fastify-plugin');
const servicePlugin = require('./services/servicePlugin')

async function app(fastify, options) {
    // Register CORS plugin
    fastify.register(require('@fastify/cors'));

    fastify.register(servicePlugin);

    // Register test routes with prefix
    fastify.register(require('./routes/api/apiRoutes'), { prefix: '/api' });


}

module.exports = fastifyPlugin(app);
