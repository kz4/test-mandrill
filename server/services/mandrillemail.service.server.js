var MANDRILL_API_KEY = '';
var testEmail = '';

var Mandrill = require('./mandrill.service.server.js');

module.exports = function (app) {

    app.post('/api/email', sendEmail);

    function sendEmail(req, res) {
        var user = req.body;
        var sender = user.name;
        var mandrill = Mandrill(MANDRILL_API_KEY);
        mandrill('/messages/send', {
            message: {
                to: [{email: testEmail, name: sender}],
                from_email: 'some@domain.com',
                subject: "Hey, what's up?",
                text: "Hello, I sent this message using mandrill."
            }
        }, function(error, response)
        {
            //uh oh, there was an error
            if (error) console.log( JSON.stringify(error) );

            //everything's good, lets see what mandrill said
            else console.log(response);
            res.send(response);
        });
    }

};