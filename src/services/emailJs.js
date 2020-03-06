
var Email = require('../index').Email
var myMsg = new Email(
{ from: "cotizacion@scio.com.mx"
, port: 587
, to:   "you@example.com"
, subject: "Knock knock..."
, body: "Who's there?"
})

// if callback is provided, errors will be passed into it
// else errors will be thrown
myMsg.send(function(err){ ... })