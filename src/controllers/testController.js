const testService = require('../services/testService');

async function pingRequest(req, res) {

    console.log(this.testService);

    const responce  = await this.testService.pingCheck();
    return res.send({data : responce});
}

module.exports = {pingRequest};
