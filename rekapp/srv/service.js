const cds = require('@sap/cds');

module.exports = cds.service.impl(async function(srv) {
    srv.on('printhelloworld', req =>{
        console.log(req.data.input)
        return `${req.data.input} World`
    })

    srv.on('joinString', req =>{
        console.log(req.data.str1);
        console.log(req.data.str2);
        let output = req.data.str1 + ' ' + req.data.str2;
        return `${output}`
    })
})